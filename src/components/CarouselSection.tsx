import React, { useState, useRef, useEffect } from 'react';
import { FileText, Globe, MessageCircle, Layers, Users } from 'lucide-react';
import type { Language, Page } from '../App';
import { defaultCarouselContent, loadCarouselContent } from '../data/carousel';
import type { CarouselContent } from '../data/carousel/types';

type RenderCard = CarouselContent['cards'][number] & {
  icon: typeof FileText;
  color: 'cyan' | 'indigo' | 'emerald' | 'blue' | 'green';
};

const colorMap = {
  cyan: {
    icon: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20'
  },
  indigo: {
    icon: 'text-indigo-500',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20'
  },
  emerald: {
    icon: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20'
  },
  blue: {
    icon: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20'
  },
  green: {
    icon: 'text-green-500',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20'
  }
};

interface CarouselSectionProps {
  language: Language;
  setCurrentPage: (page: Page) => void;
}

export function CarouselSection({ language, setCurrentPage }: CarouselSectionProps) {
  const [t, setT] = useState<CarouselContent>(defaultCarouselContent);
  const [currentIndex, setCurrentIndex] = useState(2);
  const [scrollProgress, setScrollProgress] = useState(0);
  const SWIPE_THRESHOLD_PX = 24;
  const NAV_STEP_DELAY_MS = 420;
  const ENTER_AFTER_CENTER_MS = 720;
  const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad|iPod/i.test(navigator.platform);
  const WHEEL_THRESHOLD_PX = isMac ? 14 : 18;
  const WHEEL_IMMEDIATE_TRIGGER_PX = isMac ? 8 : 12;
  const WHEEL_GESTURE_IDLE_MS = isMac ? 160 : 200;
  const WHEEL_LOCK_MS = isMac ? 1400 : 360;
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);
  const pointerStartX = useRef<number | null>(null);
  const pointerEndX = useRef<number | null>(null);
  const pointerStartY = useRef<number | null>(null);
  const pointerEndY = useRef<number | null>(null);
  const isPointerDown = useRef(false);
  const wheelLockUntilTs = useRef(0);
  const wheelAccX = useRef(0);
  const wheelAccY = useRef(0);
  const wheelLastTs = useRef(0);
  const wheelSurfaceRef = useRef<HTMLDivElement | null>(null);
  const scrollCenterLeft = useRef(0);
  const scrollLastLeft = useRef(0);
  const learnMoreBlockUntilTs = useRef(0);
  const touchBlockStartX = useRef<number | null>(null);
  const touchBlockStartY = useRef<number | null>(null);
  const scrollProgressRaf = useRef<number | null>(null);
  const scrollProgressPending = useRef(0);
  const navTimeoutRef = useRef<number | null>(null);
  const navOnDoneRef = useRef<(() => void) | null>(null);
  
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const loaded = await loadCarouselContent(language);
      if (!cancelled) setT(loaded);
    })();
    return () => {
      cancelled = true;
    };
  }, [language]);

  const cardIcons = [FileText, Globe, MessageCircle, Layers, Users] as const;
  const cardColors = ['cyan', 'indigo', 'emerald', 'blue', 'green'] as const;

  const cards: RenderCard[] = t.cards.map((card, index) => ({
    ...card,
    icon: cardIcons[index],
    color: cardColors[index],
  }));

  const totalCards = cards.length;

  const pickCardIndexAtPoint = (clientX: number, clientY: number, ignoreInteractive: boolean = true) => {
    const elements = document.elementsFromPoint(clientX, clientY) as HTMLElement[];
    const roots = new Map<number, HTMLElement>();

    for (const node of elements) {
      if (ignoreInteractive && node.closest('button, a')) continue;
      const root = node.closest('[data-card-index]') as HTMLElement | null;
      if (!root) continue;

      const idxAttr = root.getAttribute('data-card-index');
      const idx = idxAttr ? Number(idxAttr) : NaN;
      if (Number.isNaN(idx)) continue;

      const cs = window.getComputedStyle(root);
      if (cs.pointerEvents === 'none' || cs.opacity === '0') continue;

      if (!roots.has(idx)) roots.set(idx, root);
    }

    if (roots.size === 0) return null;

    let bestIdx: number | null = null;
    let bestDist = Number.POSITIVE_INFINITY;

    for (const [idx, root] of roots.entries()) {
      const rect = root.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = clientX - cx;
      const dy = clientY - cy;
      const dist = dx * dx + dy * dy;

      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = idx;
      }
    }

    return bestIdx;
  };

  const goToPrevious = () => {
    cancelPendingNav();
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const cancelPendingNav = () => {
    if (navTimeoutRef.current !== null) {
      window.clearTimeout(navTimeoutRef.current);
      navTimeoutRef.current = null;
    }
    navOnDoneRef.current = null;
  };

  const animateToIndex = (targetIndex: number, onDone?: () => void) => {
    cancelPendingNav();
    navOnDoneRef.current = onDone || null;

    const current = currentIndex;
    if (targetIndex === current) return;

    const forward = (targetIndex - current + totalCards) % totalCards;
    const backward = (current - targetIndex + totalCards) % totalCards;
    const step = forward <= backward ? 1 : -1;
    const steps = Math.min(forward, backward);

    if (steps <= 1) {
      setCurrentIndex(targetIndex);
      if (navOnDoneRef.current) {
        const cb = navOnDoneRef.current;
        navTimeoutRef.current = window.setTimeout(() => {
          navTimeoutRef.current = null;
          navOnDoneRef.current = null;
          cb();
        }, ENTER_AFTER_CENTER_MS);
      }
      return;
    }

    // 分步推进：让视觉上像连续滑动，而不是“瞬移”到目标
    let remaining = steps;
    const tick = () => {
      setCurrentIndex((prev) => (prev + step + totalCards) % totalCards);
      remaining -= 1;
      if (remaining <= 0) {
        if (navOnDoneRef.current) {
          const cb = navOnDoneRef.current;
          navTimeoutRef.current = window.setTimeout(() => {
            navTimeoutRef.current = null;
            navOnDoneRef.current = null;
            cb();
          }, ENTER_AFTER_CENTER_MS);
        } else {
          navTimeoutRef.current = null;
        }
        return;
      }
      navTimeoutRef.current = window.setTimeout(tick, NAV_STEP_DELAY_MS);
    };

    navTimeoutRef.current = window.setTimeout(tick, 0);
  };

  useEffect(() => {
    return () => {
      cancelPendingNav();
    };
  }, []);

  useEffect(() => {
    const el = wheelSurfaceRef.current;
    if (!el) return;
    // 让横向手势先变成“元素滚动”，从根上避免触发浏览器历史后退/前进
    const setCenter = () => {
      const max = Math.max(0, el.scrollWidth - el.clientWidth);
      const center = Math.floor(max / 2);
      scrollCenterLeft.current = center;
      el.scrollLeft = center;
      scrollLastLeft.current = center;
    };

    requestAnimationFrame(setCenter);
    window.addEventListener('resize', setCenter);
    return () => window.removeEventListener('resize', setCenter);
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const now = performance.now();
    if (now < learnMoreBlockUntilTs.current) {
      el.scrollLeft = scrollCenterLeft.current;
      scrollLastLeft.current = scrollCenterLeft.current;
      scrollProgressPending.current = 0;
      setScrollProgress(0);
      return;
    }

    const deviation = el.scrollLeft - scrollCenterLeft.current;
    const progressRaw = deviation / 120;
    const progress = Math.max(-1, Math.min(1, progressRaw));
    scrollProgressPending.current = progress;
    if (scrollProgressRaf.current === null) {
      scrollProgressRaf.current = window.requestAnimationFrame(() => {
        scrollProgressRaf.current = null;
        setScrollProgress(scrollProgressPending.current);
      });
    }

    // 不让滚动面“真的滚走”，否则会带着整块内容偏移（触屏上尤其明显）
    if (Math.abs(deviation) > 0.5) {
      el.scrollLeft = scrollCenterLeft.current;
    }

    if (now < wheelLockUntilTs.current) {
      el.scrollLeft = scrollCenterLeft.current;
      scrollLastLeft.current = scrollCenterLeft.current;
      scrollProgressPending.current = 0;
      setScrollProgress(0);
      return;
    }

    // 这里不再根据 scroll 来触发翻页（避免与 wheel 处理重复触发导致一次手势翻两张）。
    // scroll 仅用于视觉跟手（scrollProgress）以及锁定期复位。
    scrollLastLeft.current = el.scrollLeft;
  };

  const goToNext = () => {
    cancelPendingNav();
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  const goToSlide = (index: number) => {
    cancelPendingNav();
    setCurrentIndex(index);
  };

  useEffect(() => {
    const el = wheelSurfaceRef.current;
    if (!el) return;

    const handler = (e: WheelEvent) => {
      const now = performance.now();
      if (now < learnMoreBlockUntilTs.current) return;
      if (now < wheelLockUntilTs.current) return;

      // 不抢按钮/链接区域（例如“了解更多”）
      const topEl = (document.elementsFromPoint(e.clientX, e.clientY)[0] || null) as HTMLElement | null;
      if (topEl?.closest('[data-learn-more-index], button, a')) return;

      if (now - wheelLastTs.current > WHEEL_GESTURE_IDLE_MS) {
        wheelAccX.current = 0;
        wheelAccY.current = 0;
      }

      const scale = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? window.innerHeight : 1;
      // 兼容：有些设备/浏览器主要给 deltaY（纵向滚轮），deltaX 接近 0
      const deltaX = e.shiftKey ? e.deltaY : e.deltaX;
      const deltaY = e.shiftKey ? 0 : e.deltaY;
      const rawX = Math.abs(deltaX) < 0.5 ? deltaY : deltaX;
      const rawY = Math.abs(deltaX) < 0.5 ? 0 : deltaY;
      const dx = rawX * scale;
      const dy = rawY * scale;

      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);
      const horizontalIntent = absDx >= 0.5 && absDx > absDy * 0.35;
      if (!horizontalIntent) {
        wheelLastTs.current = now;
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      wheelAccX.current += dx;
      wheelAccY.current += dy;
      wheelLastTs.current = now;

      const progressRaw = wheelAccX.current / 120;
      scrollProgressPending.current = Math.max(-1, Math.min(1, progressRaw));
      if (scrollProgressRaf.current === null) {
        scrollProgressRaf.current = window.requestAnimationFrame(() => {
          scrollProgressRaf.current = null;
          setScrollProgress(scrollProgressPending.current);
        });
      }

      const absAccX = Math.abs(wheelAccX.current);
      const shouldTrigger = absDx >= WHEEL_IMMEDIATE_TRIGGER_PX || absAccX >= WHEEL_THRESHOLD_PX;
      if (!shouldTrigger) return;

      if (wheelAccX.current > 0) goToNext();
      else goToPrevious();

      wheelAccX.current = 0;
      wheelAccY.current = 0;
      scrollProgressPending.current = 0;
      setScrollProgress(0);
      wheelLockUntilTs.current = now + WHEEL_LOCK_MS;

      // 保持滚动面回到中心，避免累积滚偏
      el.scrollLeft = scrollCenterLeft.current;
      scrollLastLeft.current = scrollCenterLeft.current;
    };

    el.addEventListener('wheel', handler, { passive: false, capture: true });
    return () => el.removeEventListener('wheel', handler as EventListener, true);
  }, [language, totalCards]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!('history' in window) || typeof window.history?.pushState !== 'function') return;

    const ensureGuard = () => {
      try {
        const st: any = window.history.state;
        if (st && st.__wa_carousel_guard__) return;
        window.history.pushState({ ...(st || {}), __wa_carousel_guard__: true }, '', window.location.href);
      } catch {
        // ignore
      }
    };

    ensureGuard();

    const onPopState = () => {
      ensureGuard();
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const el = wheelSurfaceRef.current;
    if (!el) return;

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches?.[0];
      if (!t) return;
      touchBlockStartX.current = t.clientX;
      touchBlockStartY.current = t.clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (touchBlockStartX.current === null || touchBlockStartY.current === null) return;
      const t = e.touches?.[0];
      if (!t) return;

      const dx = t.clientX - touchBlockStartX.current;
      const dy = t.clientY - touchBlockStartY.current;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);

      // 只要是明显的横向手势，就阻止浏览器“侧滑返回/退出”
      if (absDx > 8 && absDx > absDy) {
        e.preventDefault();
        (e as any).stopPropagation?.();
        (e as any).stopImmediatePropagation?.();
      }
    };

    const onTouchEnd = () => {
      touchBlockStartX.current = null;
      touchBlockStartY.current = null;
    };

    el.addEventListener('touchstart', onTouchStart, { passive: false, capture: true });
    el.addEventListener('touchmove', onTouchMove, { passive: false, capture: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true, capture: true });
    el.addEventListener('touchcancel', onTouchEnd, { passive: true, capture: true });

    return () => {
      el.removeEventListener('touchstart', onTouchStart as EventListener, true);
      el.removeEventListener('touchmove', onTouchMove as EventListener, true);
      el.removeEventListener('touchend', onTouchEnd as EventListener, true);
      el.removeEventListener('touchcancel', onTouchEnd as EventListener, true);
    };
  }, []);

  // 处理触摸开始
  const handleTouchStart = (e: React.TouchEvent) => {
    // 现代浏览器触屏会同时触发 pointer 事件；为避免双重触发，优先使用 pointer 处理
    if (typeof window !== 'undefined' && 'PointerEvent' in window) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  // 处理触摸移动
  const handleTouchMove = (e: React.TouchEvent) => {
    if (typeof window !== 'undefined' && 'PointerEvent' in window) return;
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  // 处理触摸结束
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (typeof window !== 'undefined' && 'PointerEvent' in window) return;

    const now = performance.now();
    if (now < wheelLockUntilTs.current) {
      touchStartX.current = null;
      touchEndX.current = null;
      touchStartY.current = null;
      touchEndY.current = null;
      return;
    }

    // 有些触控设备/浏览器 touchmove 可能不稳定，这里用 touchend 的 changedTouches 兜底
    const end = e.changedTouches?.[0];
    if (end) {
      touchEndX.current = end.clientX;
      touchEndY.current = end.clientY;
    }

    if (touchStartX.current !== null && touchEndX.current !== null && touchStartY.current !== null && touchEndY.current !== null) {
      const deltaX = touchEndX.current - touchStartX.current;
      const deltaY = touchEndY.current - touchStartY.current;
      
      // 横向滑动距离超过阈值且横向为主才触发切换
      if (Math.abs(deltaX) > SWIPE_THRESHOLD_PX && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
          // 向右滑动，切换到上一张
          goToPrevious();
        } else {
          // 向左滑动，切换到下一张
          goToNext();
        }

        // 触摸惯性/抖动可能导致 end 触发多次，这里加锁保证“一次手势只翻一页”
        wheelLockUntilTs.current = now + WHEEL_LOCK_MS;
      }
      
      // 重置
      touchStartX.current = null;
      touchEndX.current = null;
      touchStartY.current = null;
      touchEndY.current = null;
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;

    const now = performance.now();
    if (now < learnMoreBlockUntilTs.current) return;

    const directHit = (e.target as HTMLElement | null)?.closest?.('[data-learn-more-index], button, a') as HTMLElement | null;
    if (directHit) return;

    // 如果起手点在按钮/链接（例如“了解更多”），不要启动容器的手势逻辑
    const downEls = document.elementsFromPoint(e.clientX, e.clientY) as HTMLElement[];
    if (downEls.some((node) => !!node.closest('[data-learn-more-index]'))) return;
    if (downEls.some((node) => !!node.closest('button, a'))) return;

    // 避免触屏时浏览器把手势当成页面滚动/选择
    if (e.pointerType !== 'mouse') e.preventDefault();

    isPointerDown.current = true;
    pointerStartX.current = e.clientX;
    pointerEndX.current = null;
    pointerStartY.current = e.clientY;
    pointerEndY.current = null;

    // 捕获指针：mouse 也需要（否则拖出元素后松手可能收不到 pointerup，导致“翻页失败”）
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPointerDown.current) return;
    pointerEndX.current = e.clientX;
    pointerEndY.current = e.clientY;

    // 超过阈值就立即触发翻页（mouse 也支持，且配合 pointer capture 可避免丢失 up）
    if (e.pointerType !== 'mouse' || e.pointerType === 'mouse') {
      const now = performance.now();
      if (now < wheelLockUntilTs.current) return;

      if (pointerStartX.current !== null && pointerStartY.current !== null) {
        const deltaX = e.clientX - pointerStartX.current;
        const deltaY = e.clientY - pointerStartY.current;
        if (Math.abs(deltaX) > SWIPE_THRESHOLD_PX && Math.abs(deltaX) > Math.abs(deltaY)) {
          if (deltaX > 0) goToPrevious();
          else goToNext();

          wheelLockUntilTs.current = now + WHEEL_LOCK_MS;
          isPointerDown.current = false;
          pointerStartX.current = null;
          pointerEndX.current = null;
          pointerStartY.current = null;
          pointerEndY.current = null;

          try {
            (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
          } catch {
            // ignore
          }
        }
      }
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isPointerDown.current) return;
    isPointerDown.current = false;

    const now = performance.now();
    if (now < learnMoreBlockUntilTs.current) {
      pointerStartX.current = null;
      pointerEndX.current = null;
      pointerStartY.current = null;
      pointerEndY.current = null;
      return;
    }
    if (now < wheelLockUntilTs.current) {
      pointerStartX.current = null;
      pointerEndX.current = null;
      pointerStartY.current = null;
      pointerEndY.current = null;
      return;
    }

    if (e.pointerType !== 'mouse') {
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }

    // 防止点到按钮/链接时触发容器级别的“点击切换”（3D transform 下用坐标命中更稳）
    const upEls = document.elementsFromPoint(e.clientX, e.clientY) as HTMLElement[];
    if (upEls.some((node) => !!node.closest('[data-learn-more-index]'))) {
      pointerStartX.current = null;
      pointerEndX.current = null;
      return;
    }
    if (upEls.some((node) => !!node.closest('button, a'))) {
      pointerStartX.current = null;
      pointerEndX.current = null;
      return;
    }

    if (pointerEndX.current === null) pointerEndX.current = e.clientX;
    if (pointerEndY.current === null) pointerEndY.current = e.clientY;

    if (pointerStartX.current !== null && pointerEndX.current !== null && pointerStartY.current !== null && pointerEndY.current !== null) {
      const deltaX = pointerEndX.current - pointerStartX.current;
      const deltaY = pointerEndY.current - pointerStartY.current;

      if (Math.abs(deltaX) > SWIPE_THRESHOLD_PX && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
          goToPrevious();
        } else {
          goToNext();
        }

        wheelLockUntilTs.current = now + WHEEL_LOCK_MS;
      } else {
        // 视作“点击”：用坐标命中到卡片（3D transform 下 event.target 可能会落到父容器）
        const idx = pickCardIndexAtPoint(e.clientX, e.clientY);
        if (idx !== null) handleCardClick(idx);
      }
    }

    pointerStartX.current = null;
    pointerEndX.current = null;
    pointerStartY.current = null;
    pointerEndY.current = null;
  };

  const handleCarouselClickCapture = (e: React.MouseEvent) => {
    const now = performance.now();
    if (now < learnMoreBlockUntilTs.current) return;
    const elements = document.elementsFromPoint(e.clientX, e.clientY) as HTMLElement[];

    // 命中“了解更多”区域时，捕获阶段不要介入（避免误命中到背后的卡片导致翻页/切换）
    if (elements.some((node) => !!node.closest('[data-learn-more-index]'))) return;

    // 如果点到按钮/链接（例如“了解更多”），不要在捕获阶段抢事件
    if (elements.some((node) => !!node.closest('button, a'))) return;
    const idx = pickCardIndexAtPoint(e.clientX, e.clientY);
    if (idx !== null) handleCardClick(idx);
  };

  // 卡片到页面的映射
  const cardToPageMap: Record<number, Page | null> = {
    0: null,
    1: null,
    2: 'faq',
    3: null,
    4: null
  };

  useEffect(() => {
    const el = wheelSurfaceRef.current;
    if (!el) return;

    const handler = (ev: Event) => {
      const target = ev.target as HTMLElement | null;
      if (!target) return;

      const anyEv = ev as any;
      const clientX = typeof anyEv.clientX === 'number' ? anyEv.clientX : null;
      const clientY = typeof anyEv.clientY === 'number' ? anyEv.clientY : null;

      // 坐标命中：落在“百问百答”卡片下半区则直接进入 FAQ（二级页）
      if (clientX !== null && clientY !== null) {
        const faqCard = el.querySelector('[data-faq-card="1"]') as HTMLElement | null;
        if (faqCard) {
          const rect = faqCard.getBoundingClientRect();
          const inRect = clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
          const inLowerZone = clientY >= rect.top + rect.height * 0.6;
          if (inRect && inLowerZone) {
            (ev as any).preventDefault?.();
            (ev as any).stopPropagation?.();
            (ev as any).stopImmediatePropagation?.();

            const now = performance.now();
            learnMoreBlockUntilTs.current = now + 900;
            wheelLockUntilTs.current = Math.max(wheelLockUntilTs.current, now + 900);
            isPointerDown.current = false;
            pointerStartX.current = null;
            pointerEndX.current = null;
            pointerStartY.current = null;
            pointerEndY.current = null;

            setCurrentPage('faq');
            return;
          }
        }
      }

      const moreRoot = target.closest?.('[data-learn-more-index]') as HTMLElement | null;
      if (!moreRoot) return;

      const pageAttr = moreRoot.getAttribute('data-learn-more-page');
      if (pageAttr !== 'faq') return;

      const idxAttr = moreRoot.getAttribute('data-learn-more-index');
      const idx = idxAttr ? Number(idxAttr) : NaN;
      if (Number.isNaN(idx)) return;

      (ev as any).preventDefault?.();
      (ev as any).stopPropagation?.();
      (ev as any).stopImmediatePropagation?.();

      const now = performance.now();
      learnMoreBlockUntilTs.current = now + 900;
      wheelLockUntilTs.current = Math.max(wheelLockUntilTs.current, now + 900);
      isPointerDown.current = false;
      pointerStartX.current = null;
      pointerEndX.current = null;
      pointerStartY.current = null;
      pointerEndY.current = null;

      setCurrentPage('faq');
    };

    el.addEventListener('pointerdown', handler, true);
    el.addEventListener('click', handler, true);
    return () => {
      el.removeEventListener('pointerdown', handler, true);
      el.removeEventListener('click', handler, true);
    };
  }, [setCurrentPage]);

  // 处理卡片点击
  const handleCardClick = (index: number) => {
    // 点击卡片仅用于切换，不直接进入二级页
    if (index !== currentIndex) {
      animateToIndex(index);
    }
  };

  const getCardStyle = (index: number) => {
    const position = index - currentIndex;
    const absPosition = Math.abs(position);
    
    let scale = 1;
    let opacity = 1;
    let translateX = 0;
    let translateZ = 0;
    let rotateY = 0;
    let zIndex = 10;

    if (absPosition === 0) {
      // Center card - front and center
      scale = 1;
      opacity = 1;
      translateX = 0;
      translateZ = 100;
      rotateY = 0;
      zIndex = 50;
    } else if (absPosition === 1) {
      // Adjacent cards - rotated, overlapping
      scale = 0.85;
      opacity = 0.95;
      translateX = position > 0 ? 150 : -150;
      translateZ = -50;
      rotateY = position > 0 ? -18 : 18;
      zIndex = 40;
    } else if (absPosition === 2) {
      // Outer cards - more rotation, still visible
      scale = 0.65;
      opacity = 0.9;
      translateX = position > 0 ? 250 : -250;
      translateZ = -120;
      rotateY = position > 0 ? -28 : 28;
      zIndex = 30;
    } else {
      // Far cards - hidden
      scale = 0.5;
      opacity = 0;
      translateX = position > 0 ? 350 : -350;
      translateZ = -180;
      rotateY = position > 0 ? -35 : 35;
      zIndex = 20;
    }

    return {
      transform: `translateX(${translateX - scrollProgress * 80}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex,
      pointerEvents: (opacity > 0 ? 'auto' : 'none') as React.CSSProperties['pointerEvents'], // 只有可见的卡片才能点击
      transformStyle: 'preserve-3d' as const
    };
  };

  return (
    <section className="py-20 relative overflow-hidden z-20 pointer-events-auto" style={{ isolation: 'isolate' }}>
      {/* Header */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <div className="text-lime-500 text-sm font-medium tracking-widest mb-4">
          EXPLORE MORE
        </div>
        <h2 className="text-white font-bold text-5xl mb-4" style={{ fontFamily: 'Array, sans-serif' }}>
          {t.title}
        </h2>
        <p className="text-zinc-400 text-sm max-w-md mx-auto">
          {t.subtitle}
        </p>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative h-[400px] w-full max-w-6xl mx-auto px-6 pointer-events-auto"
        style={{ 
          perspective: '1200px',
          perspectiveOrigin: 'center center'
        }}
      >
        <div 
          className="absolute inset-0 flex items-center justify-center" 
          ref={wheelSurfaceRef}
          style={{ transformStyle: 'preserve-3d', touchAction: 'pan-y', userSelect: 'none', overscrollBehaviorX: 'none', overflowX: 'auto', overflowY: 'hidden', scrollbarWidth: 'none' }}
          onClickCapture={handleCarouselClickCapture}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onScroll={handleScroll}
        >
          <div className="pointer-events-none" style={{ width: '200%', height: 1 }} />
          {cards.map((card, index) => {
            const style = getCardStyle(index);
            const isCenter = index === currentIndex;
            const position = index - currentIndex;
            const isFAQCard = card.color === 'emerald';
            const Icon = card.icon;
            const colors = colorMap[card.color as keyof typeof colorMap];
            
            return (
              <div
                key={index}
                className={`absolute transition-all duration-700 ease-out cursor-pointer`}
                style={style as React.CSSProperties}
                data-card-index={index}
                data-faq-card={isFAQCard ? '1' : undefined}
              >
                <div 
                  className={`w-[260px] h-[360px] rounded-2xl p-6 transition-all duration-700 border cursor-pointer ${
                    isCenter 
                      ? 'bg-[rgba(26,26,26,1)] border-emerald-500/40 shadow-[0_10px_15px_rgba(0,0,0,0.3)]' 
                      : 'bg-[rgba(26,26,26,0.8)] border-zinc-800/50 hover:border-zinc-700/70'
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                  data-card-index={index}
                  onClick={(e) => {
                    if (performance.now() < learnMoreBlockUntilTs.current) return;
                    const target = e.target as HTMLElement | null;
                    if (target?.closest?.('[data-learn-more-index]')) return;
                    handleCardClick(index);
                  }}
                >
                  {isFAQCard && (
                    <div
                      className="absolute left-0 right-0 bottom-0 h-[120px] pointer-events-auto"
                      style={{ transform: 'translateZ(260px)', zIndex: 260, touchAction: 'manipulation' }}
                      data-learn-more-page="faq"
                      onPointerDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        (e.nativeEvent as any).stopImmediatePropagation?.();

                        const now = performance.now();
                        learnMoreBlockUntilTs.current = now + 900;
                        wheelLockUntilTs.current = Math.max(wheelLockUntilTs.current, now + 900);
                        isPointerDown.current = false;
                        pointerStartX.current = null;
                        pointerEndX.current = null;
                        pointerStartY.current = null;
                        pointerEndY.current = null;
                        setCurrentPage('faq');
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        (e.nativeEvent as any).stopImmediatePropagation?.();

                        const now = performance.now();
                        learnMoreBlockUntilTs.current = now + 900;
                        wheelLockUntilTs.current = Math.max(wheelLockUntilTs.current, now + 900);
                        isPointerDown.current = false;
                        pointerStartX.current = null;
                        pointerEndX.current = null;
                        pointerStartY.current = null;
                        pointerEndY.current = null;
                        setCurrentPage('faq');
                      }}
                    />
                  )}

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-all duration-700 ${
                    isCenter 
                      ? colors.bg + ' ' + colors.border
                      : 'bg-zinc-800/30 border-zinc-700/30'
                  }`}>
                    <Icon className={`w-6 h-6 transition-all duration-700 ${
                      isCenter ? colors.icon : 'text-zinc-600'
                    }`} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className={`font-semibold text-lg mb-4 leading-tight transition-all duration-700 ${
                    isCenter ? 'text-white' : 'text-zinc-500'
                  }`}>
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-6 transition-all duration-700 ${
                    isCenter ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    {card.desc}
                  </p>

                  {/* Learn More Link */}
                  <button
                    type="button"
                    className={`absolute bottom-6 ${isFAQCard ? 'pointer-events-auto' : 'pointer-events-none'} bg-transparent border-0 p-0 ${
                      position > 0 ? 'right-6 left-auto' : 'left-6 right-auto'
                    } ${position === 0 ? 'z-[220]' : 'z-[240]'}`}
                    style={{ transform: 'translateZ(220px)', touchAction: 'manipulation' }}
                    data-learn-more-index={index}
                    data-learn-more-page={isFAQCard ? 'faq' : undefined}
                    onPointerDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();

                      if (isFAQCard) {
                        (e.nativeEvent as any).stopImmediatePropagation?.();
                      }

                      // 非 FAQ 卡片："了解更多" 仅用于切换/翻页，不进入二级页
                      if (!isFAQCard) {
                        handleCardClick(index);
                        return;
                      }

                      const now = performance.now();
                      learnMoreBlockUntilTs.current = now + 900;
                      wheelLockUntilTs.current = Math.max(wheelLockUntilTs.current, now + 900);
                      isPointerDown.current = false;
                      pointerStartX.current = null;
                      pointerEndX.current = null;
                      pointerStartY.current = null;
                      pointerEndY.current = null;

                      setCurrentPage('faq');
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();

                      if (isFAQCard) {
                        (e.nativeEvent as any).stopImmediatePropagation?.();
                      }

                      if (!isFAQCard) {
                        handleCardClick(index);
                        return;
                      }

                      const now = performance.now();
                      learnMoreBlockUntilTs.current = now + 900;
                      wheelLockUntilTs.current = Math.max(wheelLockUntilTs.current, now + 900);
                      isPointerDown.current = false;
                      pointerStartX.current = null;
                      pointerEndX.current = null;
                      pointerStartY.current = null;
                      pointerEndY.current = null;

                      setCurrentPage('faq');
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();

                      if (isFAQCard) {
                        (e.nativeEvent as any).stopImmediatePropagation?.();
                      }

                      if (!isFAQCard) {
                        handleCardClick(index);
                        return;
                      }

                      const now = performance.now();
                      learnMoreBlockUntilTs.current = now + 900;
                      wheelLockUntilTs.current = Math.max(wheelLockUntilTs.current, now + 900);
                      isPointerDown.current = false;
                      pointerStartX.current = null;
                      pointerEndX.current = null;
                      pointerStartY.current = null;
                      pointerEndY.current = null;

                      setCurrentPage('faq');
                    }}
                  >
                    <span
                      className={`inline-flex items-center gap-2 text-sm font-normal transition-all duration-300 group ${
                        isCenter
                          ? 'text-lime-500 hover:text-lime-400'
                          : 'text-zinc-700'
                      }`}
                      style={{ width: 132, height: 28, alignItems: 'center', touchAction: 'manipulation' }}
                    >
                      {t.learnMore}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-3 mt-16">
        {t.cards.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              goToSlide(index);
            }}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-6 h-2 bg-lime-500'
                : 'w-2 h-2 bg-zinc-700 hover:bg-zinc-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
