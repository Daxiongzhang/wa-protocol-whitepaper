import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { memo } from 'react';
import { CarouselSection } from '../components/CarouselSection';
import type { Language, Page } from '../App';
import { homeTranslations } from '../data/home-content';

function HomePageComponent({ language, setCurrentPage }: { language: Language; setCurrentPage: (page: Page) => void }) {
  const t = homeTranslations[language];

  return (
    <>
      <div
        className="relative"
        style={{
          backgroundImage: 'url(/bankground-smaller.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat'
        }}
      >
      <section 
        className="relative min-h-screen flex items-center overflow-hidden pt-16"
      >

        {/* Content Layer */}
        <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
          {/* Subtle decorative elements */}
          <Star className="absolute top-28 right-[15%] text-lime-400/40" size={16} />
          <Star className="absolute top-48 left-[20%] text-lime-300/30" size={12} />
          <Sparkles className="absolute bottom-32 right-[25%] text-lime-400/30" size={18} />

          <div className="max-w-4xl mx-auto text-center pt-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs tracking-wide text-lime-300/90 bg-lime-500/5 border border-lime-500/20 rounded-full">
              <span className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse" />
              {t.badge}
            </div>

            <h1 className="mb-8">
              <div className="text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-tight mb-3">
                {t.hero.line1}
              </div>
              <div className="text-5xl md:text-6xl lg:text-7xl text-white font-medium tracking-tight relative inline-block" style={{ fontFamily: 'Array, sans-serif' }}>
                {t.hero.line2}
                <svg
                  className="absolute left-0 right-0 -bottom-3 w-full h-2"
                  viewBox="0 0 400 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 0 4 Q 200 2 400 4"
                    stroke="#84cc16"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </h1>

            <p className="text-slate-400 text-lg mb-14 max-w-2xl mx-auto font-light leading-relaxed">
              "{t.hero.quote}"
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setCurrentPage('whitepaper')}
                className="group w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white bg-lime-600 hover:bg-lime-500 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-lime-500/25 flex items-center justify-center"
              >
                {t.buttons.primary}
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-slate-300 hover:text-white border border-white/10 hover:border-white/20 rounded-lg transition-all duration-200 hover:bg-white/5">
        {t.buttons.secondary}
      </button>
            </div>
          </div>
        </div>

        {/* 底部渐变遮罩 - 红框区域 */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{
            zIndex: 999,
            background: 'linear-gradient(to top, var(--page-bg) 0%, rgb(var(--page-bg-rgb) / 0.35) 55%, transparent 100%)'
          }}
        />
      </section>

      {/* Stats */}
      <section className="relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, rgb(var(--page-bg-rgb) / 0.25) 45%, rgb(var(--page-bg-rgb) / 0.65) 100%)'
          }}
        />
        <div className="container mx-auto px-6 pt-16 pb-20 relative z-10">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
            style={{ transform: 'translateY(12px)' }}
          >
            {['100K+', '30%', '50+', '24/7'].map((value, index) => (
              <div key={index} className="text-center group cursor-default">
                <div className="text-white text-3xl md:text-4xl mb-2 tracking-tight group-hover:text-lime-400 transition-colors font-bold" style={{ fontFamily: 'HarmonyOS Sans Bold, HarmonyOS Sans, sans-serif' }}>
                  {value}
                </div>
                <div className="text-slate-500 text-sm">
                  {t.stats[index]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div
        className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none"
        style={{
          zIndex: 5,
          background:
            'linear-gradient(to top, var(--page-bg) 0%, rgb(var(--page-bg-rgb) / 0.82) 18%, rgb(var(--page-bg-rgb) / 0.55) 42%, rgb(var(--page-bg-rgb) / 0.28) 68%, rgb(var(--page-bg-rgb) / 0.12) 82%, transparent 100%)'
        }}
      />

      </div>

      {/* Vision Cards */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.visionCards.map((card, index) => (
            <div
              key={index}
              className="group p-6 border border-white/10 hover:border-emerald-500/50 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 bg-white/5 backdrop-blur-sm cursor-pointer flex flex-col h-auto min-h-[300px]"
            >
              <div className="text-3xl mb-4 transform transition-transform duration-300 group-hover:scale-110 inline-block">
                {['✨', '📈', '🎯'][index]}
              </div>

              <h3 className="text-white font-medium text-lg mb-3">
                {card.title}
              </h3>

              <div className="relative overflow-hidden mb-4 flex-grow max-h-[80px]">
                <p className="text-slate-400 text-xs leading-relaxed">
                  {card.desc}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-[#0a0a0a]/90 to-transparent pointer-events-none"></div>
              </div>

              <div className="mt-auto mb-1">
                <div className="flex items-center justify-center px-4 py-2 bg-emerald-500/10 group-hover:bg-emerald-500/20 border border-emerald-500/20 group-hover:border-emerald-500/40 text-emerald-400 text-xs font-medium rounded-lg transition-all duration-300 w-20">
                  {card.tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Carousel Section */}
      <CarouselSection language={language} setCurrentPage={setCurrentPage} />

      {/* Core Resources */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white font-medium text-5xl mb-3 tracking-tight" style={{ fontFamily: 'Array, sans-serif' }}>
              {t.resourcesTitle}
            </h2>
            <p className="text-slate-400 text-base">
              {t.resourcesDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {t.resources.map((resource, index) => {
              const pages: Page[] = ['whitepaper', 'faq', 'social'];
              return (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentPage(pages[index]);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-lime-500/50 rounded-2xl transition-all duration-500 hover:shadow-xl hover:shadow-lime-500/20 hover:-translate-y-2 text-left w-full overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Animated gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/0 via-emerald-500/0 to-lime-500/0 group-hover:from-lime-500/5 group-hover:via-emerald-500/5 group-hover:to-lime-500/5 transition-all duration-500 rounded-2xl" />

                  {/* Animated corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-lime-400/0 to-transparent group-hover:from-lime-400/10 transition-all duration-500 rounded-bl-full" />

                  <div className="relative z-10">
                    <div className="text-3xl mb-6 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 inline-block">
                      {['📄', '❓', '🌐'][index]}
                    </div>

                    <h3 className="text-white font-medium text-lg mb-3 group-hover:text-lime-100 transition-colors duration-300">
                      {resource.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors duration-300">
                      {resource.desc}
                    </p>

                    <div className="flex items-center gap-2 text-lime-400 text-sm font-medium transition-all duration-300">
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{t.learnMore}</span>
                      <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-lime-400/0 to-transparent group-hover:via-lime-400/50 transition-all duration-500" />
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(HomePageComponent);
