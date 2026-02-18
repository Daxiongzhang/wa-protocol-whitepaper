import { useState, useEffect, memo } from 'react';
import { Sparkles, Star, ArrowLeft } from 'lucide-react';
import type { Language, Page } from '../App';
import { useChartInitialization } from '../components/ChartManager';
import { loadWhitepaperContent, whitepaperTranslations } from '../data/whitepaper';
import type { WhitepaperContent } from '../data/whitepaper/types';
import { WhitepaperSectionList } from '../components/whitepaper/WhitepaperSectionList';
import { WhitepaperTableOfContents } from '../components/whitepaper/WhitepaperTableOfContents';

interface WhitepaperPageProps {
  language: Language;
  setCurrentPage: (page: Page) => void;
}

function WhitepaperPageComponent({ language, setCurrentPage }: WhitepaperPageProps) {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const [content, setContent] = useState<WhitepaperContent | null>(null);
  const t = whitepaperTranslations[language];

  // 初始化图表组件
  useChartInitialization();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const loaded = await loadWhitepaperContent(language);
      if (!cancelled) setContent(loaded);
    })();
    return () => {
      cancelled = true;
    };
  }, [language]);

  useEffect(() => {
    if (!content) return;
    const handleScroll = () => {
      const sections = content.sections;
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(`section-${sections[i].id}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 80) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [content]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId: number) => {
    setExpandedSection(sectionId);
    const doScroll = () => {
      const element = document.getElementById(`section-${sectionId}`);
      if (!element) return;
      const topbar = document.querySelector('.ui-topbar');
      const headerEl = (topbar instanceof HTMLElement ? topbar.closest('header') : null) || document.querySelector('header');
      const headerHeight = headerEl instanceof HTMLElement ? headerEl.getBoundingClientRect().height : 0;
      const extraGap = 12;
      const y = element.getBoundingClientRect().top + window.scrollY - headerHeight - extraGap;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        doScroll();
        requestAnimationFrame(() => {
          doScroll();
        });
      });
    });
  };

  const toggleSection = (sectionId: number) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  if (!content) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <div className="container mx-auto px-6 py-20 relative max-w-2xl lg:max-w-3xl">
          <div className="text-slate-400">Loading…</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Animated background effect - same as homepage */}
      <div className="fixed inset-0 overflow-hidden z-[-1] opacity-60">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-gradient-to-br from-lime-500/20 via-emerald-500/10 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-blue-500/20 via-indigo-500/10 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/3 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-gradient-to-bl from-amber-500/20 via-orange-500/10 to-red-500/20 rounded-full blur-3xl animate-pulse delay-1400"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative max-w-2xl lg:max-w-3xl">
        {/* Decorative elements - same as homepage */}
        <Star className="absolute top-28 right-[15%] text-lime-400/40" size={16} />
        <Star className="absolute top-48 left-[20%] text-lime-300/30" size={12} />
        <Sparkles className="absolute bottom-32 right-[25%] text-lime-400/30" size={18} />

        {/* Header */}
        <header className="mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs tracking-wide text-lime-300/90 bg-lime-500/5 border border-lime-500/20 rounded-full">
            <span className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse" />
            Whitepaper Documentation
          </div>

          <h1 className="mb-8">
            <div className="text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tight mb-3">
              {t.title}
            </div>
          </h1>
          
          <p className="text-slate-400 text-lg mb-14 max-w-2xl mx-auto font-light leading-relaxed">
            {t.subtitle}
          </p>
        </header>

        {/* Table of Contents */}
        <WhitepaperTableOfContents
          sections={content.sections}
          activeSection={activeSection}
          onSelect={scrollToSection}
          tableOfContentsLabel={t.tableOfContents}
        />

        <WhitepaperSectionList
          sections={content.sections}
          expandedSection={expandedSection}
          onToggle={toggleSection}
          language={language}
        />

        {/* Back to Home */}
        <div className="mt-24 text-center">
          <button
            onClick={() => setCurrentPage('home')}
            className="group flex items-center justify-center gap-2 text-zinc-400 hover:text-white transition-colors duration-200 mx-auto"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-sm">{t.backToHome}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export const WhitepaperPage = memo(WhitepaperPageComponent);
