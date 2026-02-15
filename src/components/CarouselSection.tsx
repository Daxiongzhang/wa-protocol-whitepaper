import React, { useState, useRef, useEffect } from 'react';
import { FileText, Globe, MessageCircle, Layers, Users } from 'lucide-react';
import type { Language, Page } from '../App';

const translations = {
  en: {
    title: 'Core Resources',
    subtitle: 'Deep dive into our platform, technology and community',
    cards: [
      {
        title: 'Whitepaper',
        desc: 'Comprehensive documentation of our platform\'s vision, technology, and roadmap.',
        icon: FileText,
        color: 'cyan'
      },
      {
        title: 'Global Community',
        desc: 'Join our worldwide network of creators, developers, and innovators.',
        icon: Globe,
        color: 'indigo'
      },
      {
        title: 'Q&A',
        desc: 'Frequently asked questions and quick answers for partners and community members.',
        icon: MessageCircle,
        color: 'emerald'
      },
      {
        title: 'Social Channels',
        desc: 'Connect with us on Telegram, Discord, and YouTube for updates and community.',
        icon: Layers,
        color: 'blue'
      },
      {
        title: 'Team & Partners',
        desc: 'Meet the experts behind the platform and our strategic ecosystem partners.',
        icon: Users,
        color: 'green'
      }
    ],
    learnMore: 'Learn More'
  },
  zh: {
    title: '核心资源',
    subtitle: '深入了解我们的平台、技术和社区',
    cards: [
      {
        title: '白皮书',
        desc: '全面记录我们平台的愿景、技术和路线图。',
        icon: FileText,
        color: 'cyan'
      },
      {
        title: '全球社区',
        desc: '加入我们遍布全球的创作者、开发者和创新者网络。',
        icon: Globe,
        color: 'indigo'
      },
      {
        title: '百问百答',
        desc: '面向合作伙伴与社区成员的常见问题与快速解答。',
        icon: MessageCircle,
        color: 'emerald'
      },
      {
        title: '社交渠道',
        desc: '通过 Telegram、Twitter、Discord 和 YouTube 与我们保持联系。',
        icon: Layers,
        color: 'blue'
      },
      {
        title: '团队与合作伙伴',
        desc: '认识平台背后的专家团队和我们的战略合作伙伴。',
        icon: Users,
        color: 'green'
      }
    ],
    learnMore: '了解更多'
  },
  id: {
    title: 'Sumber Daya Inti',
    subtitle: 'Selami platform, teknologi, dan komunitas kami',
    cards: [
      {
        title: 'Whitepaper',
        desc: 'Dokumentasi komprehensif tentang visi, teknologi, dan roadmap platform kami.',
        icon: FileText,
        color: 'cyan'
      },
      {
        title: 'Komunitas Global',
        desc: 'Bergabunglah dengan jaringan global kreator, developer, dan inovator kami.',
        icon: Globe,
        color: 'indigo'
      },
      {
        title: 'Q&A',
        desc: 'Pertanyaan umum dan jawaban cepat untuk mitra dan anggota komunitas.',
        icon: MessageCircle,
        color: 'emerald'
      },
      {
        title: 'Saluran Sosial',
        desc: 'Terhubung dengan kami di Telegram, Discord, dan YouTube untuk pembaruan.',
        icon: Layers,
        color: 'blue'
      },
      {
        title: 'Tim & Mitra',
        desc: 'Temui para ahli di balik platform dan mitra ekosistem strategis kami.',
        icon: Users,
        color: 'green'
      }
    ],
    learnMore: 'Pelajari Lebih Lanjut'
  },
  th: {
    title: 'แหล่งข้อมูลหลัก',
    subtitle: 'เจาะลึกแพลตฟอร์ม เทคโนโลยี และชุมชนของเรา',
    cards: [
      {
        title: 'Whitepaper',
        desc: 'เอกสารที่ครอบคลุมเกี่ยวกับวิสัยทัศน์ เทคโนโลยี และแผนงานของแพลตฟอร์ม',
        icon: FileText,
        color: 'cyan'
      },
      {
        title: 'ชุมชนทั่วโลก',
        desc: 'เข้าร่วมเครือข่ายทั่วโลกของผู้สร้างสรรค์ นักพัฒนา และนักนวัตกรรม',
        icon: Globe,
        color: 'indigo'
      },
      {
        title: 'คำถามที่พบบ่อย',
        desc: 'คำถามที่พบบ่อยและคำตอบด่วนสำหรับพาร์ทเนอร์และสมาชิกชุมชน',
        icon: MessageCircle,
        color: 'emerald'
      },
      {
        title: 'ช่องทางโซเชียล',
        desc: 'เชื่อมต่อกับเราบน Telegram, Discord และ YouTube สำหรับอัปเดต',
        icon: Layers,
        color: 'blue'
      },
      {
        title: 'ทีมและพาร์ทเนอร์',
        desc: 'พบกับผู้เชี่ยวชาญเบื้องหลังแพลตฟอร์มและพาร์ทเนอร์เชิงกลยุทธ์',
        icon: Users,
        color: 'green'
      }
    ],
    learnMore: 'เรียนรู้เพิ่มเติม'
  },
  vi: {
    title: 'Tài Nguyên Cốt Lõi',
    subtitle: 'Tìm hiểu sâu về nền tảng, công nghệ và cộng đồng của chúng tôi',
    cards: [
      {
        title: 'Whitepaper',
        desc: 'Tài liệu toàn diện về tầm nhìn, công nghệ và lộ trình của nền tảng.',
        icon: FileText,
        color: 'cyan'
      },
      {
        title: 'Cộng Đồng Toàn Cầu',
        desc: 'Tham gia mạng lưới toàn cầu của các nhà sáng tạo, nhà phát triển và đổi mới.',
        icon: Globe,
        color: 'indigo'
      },
      {
        title: 'Hỏi & Đáp',
        desc: 'Câu hỏi thường gặp và câu trả lời nhanh cho đối tác và thành viên cộng đồng.',
        icon: MessageCircle,
        color: 'emerald'
      },
      {
        title: 'Kênh Xã Hội',
        desc: 'Kết nối với chúng tôi trên Telegram, Discord và YouTube để cập nhật.',
        icon: Layers,
        color: 'blue'
      },
      {
        title: 'Đội Ngũ & Đối Tác',
        desc: 'Gặp gỡ các chuyên gia đằng sau nền tảng và đối tác chiến lược.',
        icon: Users,
        color: 'green'
      }
    ],
    learnMore: 'Tìm Hiểu Thêm'
  },
  ko: {
    title: '핵심 리소스',
    subtitle: '플랫폼, 기술 및 커뮤니티에 대해 자세히 알아보세요',
    cards: [
      {
        title: '백서',
        desc: '플랫폼의 비전, 기술 및 로드맵에 대한 포괄적인 문서.',
        icon: FileText,
        color: 'cyan'
      },
      {
        title: '글로벌 커뮤니티',
        desc: '크리에이터, 개발자 및 혁신가의 전 세계 네트워크에 참여하세요.',
        icon: Globe,
        color: 'indigo'
      },
      {
        title: '질문과 답변',
        desc: '파트너 및 커뮤니티 구성원을 위한 자주 묻는 질문과 빠른 답변.',
        icon: MessageCircle,
        color: 'emerald'
      },
      {
        title: '소셜 채널',
        desc: 'Telegram, Discord 및 YouTube에서 업데이트 및 커뮤니티를 위해 연결하세요.',
        icon: Layers,
        color: 'blue'
      },
      {
        title: '팀 및 파트너',
        desc: '플랫폼 뒤의 전문가와 전략적 생태계 파트너를 만나보세요.',
        icon: Users,
        color: 'green'
      }
    ],
    learnMore: '자세히 보기'
  },
  ja: {
    title: 'コアリソース',
    subtitle: 'プラットフォーム、技術、コミュニティについて深く学ぶ',
    cards: [
      {
        title: '�����ワ��トペーパー',
        desc: 'プラットフォームのビジョン、技術、ロードマップの包括的なドキュメント。',
        icon: FileText,
        color: 'cyan'
      },
      {
        title: 'グローバルコミュニティ',
        desc: 'クリエイター、開発者、イノベーターの世界的なネット�����クに参���して���ださい。',
        icon: Globe,
        color: 'indigo'
      },
      {
        title: 'Q&A',
        desc: 'パートナーやコミュニティメンバー向けのよくある質問と迅速な回答。',
        icon: MessageCircle,
        color: 'emerald'
      },
      {
        title: 'ソーシャルチャンネル',
        desc: 'Telegram、Discord、YouTubeで更新情報とコミュニティのために接���してください。',
        icon: Layers,
        color: 'blue'
      },
      {
        title: 'チームとパートナー',
        desc: 'プラットフォームの背後にある専門家と戦略的エコシステムパートナーに会いましょう。',
        icon: Users,
        color: 'green'
      }
    ],
    learnMore: '詳細を見る'
  }
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
  const [currentIndex, setCurrentIndex] = useState(2);
  const [pendingEnterIndex, setPendingEnterIndex] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const SWIPE_THRESHOLD_PX = 24;
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
  const scrollProgressRaf = useRef<number | null>(null);
  const scrollProgressPending = useRef(0);
  
  const t = translations[language] || translations.en;
  const totalCards = t.cards.length;

  const pickCardIndexAtPoint = (clientX: number, clientY: number) => {
    const elements = document.elementsFromPoint(clientX, clientY) as HTMLElement[];
    const roots = new Map<number, HTMLElement>();

    for (const node of elements) {
      if (node.closest('button, a')) continue;
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
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

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
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const el = wheelSurfaceRef.current;
    if (!el) return;

    const handler = (e: WheelEvent) => {
      const now = performance.now();
      if (now < wheelLockUntilTs.current) return;

      // 不抢按钮/链接区域（例如“了解更多”）
      const topEl = (document.elementsFromPoint(e.clientX, e.clientY)[0] || null) as HTMLElement | null;
      if (topEl?.closest('[data-learn-more-index], button, a')) return;

      if (now - wheelLastTs.current > WHEEL_GESTURE_IDLE_MS) {
        wheelAccX.current = 0;
        wheelAccY.current = 0;
      }

      const scale = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? window.innerHeight : 1;
      const rawX = e.shiftKey ? e.deltaY : e.deltaX;
      const rawY = e.shiftKey ? 0 : e.deltaY;
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

    // 避免触屏时浏览器把手势当成页面滚动/选择
    if (e.pointerType !== 'mouse') e.preventDefault();

    // 如果起手点在按钮/链接（例如“了解更多”），不要启动容器的手势逻辑
    const downEls = document.elementsFromPoint(e.clientX, e.clientY) as HTMLElement[];
    if (downEls.some((node) => !!node.closest('[data-learn-more-index]'))) return;
    if (downEls.some((node) => !!node.closest('button, a'))) return;

    isPointerDown.current = true;
    pointerStartX.current = e.clientX;
    pointerEndX.current = null;
    pointerStartY.current = e.clientY;
    pointerEndY.current = null;

    // 触控/手写笔：捕获指针，保证滑动过程中 pointermove/pointerup 不丢失
    if (e.pointerType !== 'mouse') {
      try {
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPointerDown.current) return;
    pointerEndX.current = e.clientX;
    pointerEndY.current = e.clientY;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isPointerDown.current) return;
    isPointerDown.current = false;

    const now = performance.now();
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
    const elements = document.elementsFromPoint(e.clientX, e.clientY) as HTMLElement[];

    // 优先处理“了解更多”：即使命中目标落在卡片 div 上，也能通过坐标命中到热区
    const moreHit = elements.find((node) => !!node.closest('[data-learn-more-index]'));
    const moreAttr = moreHit?.closest('[data-learn-more-index]')?.getAttribute('data-learn-more-index');
    const moreIdx = moreAttr ? Number(moreAttr) : NaN;
    if (!Number.isNaN(moreIdx)) {
      e.preventDefault();
      e.stopPropagation();
      handleLearnMoreClick(moreIdx);
      return;
    }

    // 如果点到按钮/链接（例如“了解更多”），不要在捕获阶段抢事件
    if (elements.some((node) => !!node.closest('button, a'))) return;
    const idx = pickCardIndexAtPoint(e.clientX, e.clientY);
    if (idx !== null) handleCardClick(idx);
  };

  // 卡片到页面的映射
  const cardToPageMap: Record<number, Page | null> = {
    0: 'whitepaper',  // Whitepaper
    1: null,          // Global Community - 暂时没有对应页面
    2: 'faq',         // Q&A
    3: 'social',      // Social Channels
    4: null           // Team & Partners - 暂时没有对应页面
  };

  // 处理卡片点击
  const handleCardClick = (index: number) => {
    // 点击卡片仅用于切换，不直接进入二级页
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  const enterPage = (index: number) => {
    const targetPage = cardToPageMap[index];
    if (targetPage) {
      setCurrentPage(targetPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLearnMoreClick = (index: number) => {
    // 点击“了解更多”需要进入二级页：若不是中间卡，先切到中间并在动画结束后自动进入
    if (index !== currentIndex) {
      setPendingEnterIndex(index);
      setCurrentIndex(index);
      return;
    }

    enterPage(index);
  };

  useEffect(() => {
    if (pendingEnterIndex === null) return;
    if (pendingEnterIndex !== currentIndex) return;

    // 等待切换动画完成后再进入（与卡片 transition duration 对齐）
    const id = window.setTimeout(() => {
      enterPage(pendingEnterIndex);
      setPendingEnterIndex(null);
    }, 720);

    return () => window.clearTimeout(id);
  }, [currentIndex, pendingEnterIndex]);

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
          style={{ transformStyle: 'preserve-3d', touchAction: 'pan-y', userSelect: 'none', overscrollBehaviorX: 'contain', overflowX: 'auto', overflowY: 'hidden', scrollbarWidth: 'none' }}
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
          {t.cards.map((card, index) => {
            const style = getCardStyle(index);
            const isCenter = index === currentIndex;
            const Icon = card.icon;
            const colors = colorMap[card.color as keyof typeof colorMap];
            
            return (
              <div
                key={index}
                className={`absolute transition-all duration-700 ease-out cursor-pointer`}
                style={style as React.CSSProperties}
                data-card-index={index}
              >
                <div 
                  className={`w-[260px] h-[360px] rounded-2xl p-6 transition-all duration-700 border cursor-pointer ${
                    isCenter 
                      ? 'bg-[rgba(26,26,26,1)] border-emerald-500/40 shadow-[0_10px_15px_rgba(0,0,0,0.3)]' 
                      : 'bg-[rgba(26,26,26,0.8)] border-zinc-800/50 hover:border-zinc-700/70'
                  }`}
                  data-card-index={index}
                  onClick={() => handleCardClick(index)}
                >
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
                  <div className="absolute bottom-6 left-6 z-20 pointer-events-auto" data-learn-more-index={index}>
                    <button 
                      type="button"
                      className={`relative z-20 pointer-events-auto inline-flex items-center gap-2 text-sm font-normal transition-all duration-300 group ${
                        isCenter 
                          ? 'text-lime-500 hover:text-lime-400' 
                          : 'text-zinc-700'
                      }`}
                      onPointerUp={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleLearnMoreClick(index);
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleLearnMoreClick(index);
                      }}
                    >
                      {t.learnMore}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </button>
                  </div>
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
