import { useState, useEffect, memo, useCallback, useMemo } from 'react';
import { Menu, X, Sparkles, Globe, ChevronDown } from 'lucide-react';
import type { Language, Page } from '../App';
import { headerTranslations, languageShort, languageNames, languageOrder } from '../data/header-content';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

function HeaderComponent({ language, setLanguage, currentPage, setCurrentPage }: HeaderProps) {
  // 状态管理 - 使用useState进行状态封装
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // 翻译内容 - 使用useMemo优化性能
  const t = useMemo(() => headerTranslations[language], [language]);

  // 滚动监听 - 防抖优化和性能提升
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      // 防抖处理，避免频繁状态更新
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 5);
      }, 16); // ~60fps
    };
    
    // 使用passive事件监听器提升性能
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // 页面切换处理 - 使用useCallback优化性能
  const handlePageChange = useCallback((page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    
    // 平滑滚动到顶部，带降级处理
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      // 降级处理
      window.scrollTo(0, 0);
    }
  }, [setCurrentPage]);

  // 语言切换处理 - 使用useCallback优化性能
  const handleLanguageChange = useCallback((lang: Language) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
  }, [setLanguage]);

  // 移动端菜单切换
  const toggleMobileMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  // 语言菜单切换
  const toggleLanguageMenu = useCallback(() => {
    setIsLangMenuOpen(prev => !prev);
  }, []);

  // 关闭所有菜单
  const closeAllMenus = useCallback(() => {
    setIsMenuOpen(false);
    setIsLangMenuOpen(false);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-2 pb-1`}
    >
      {/* Background with glassmorphism */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#0a0a0a]/95 backdrop-blur-xl' 
          : 'bg-transparent'
      }`}>
        {/* Subtle border bottom */}
        <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800/50 to-transparent transition-opacity duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`} />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="flex items-center justify-between h-12 relative z-10">
          
          {/* Logo & Brand */}
          <button 
            onClick={() => handlePageChange('home')}
            className="flex items-center gap-2.5 group"
          >
            {/* Logo Icon */}
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Sparkles 
                size={18} 
                className="text-lime-400 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-lime-400/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Brand Name */}
            <span className="text-[15px] font-medium text-white tracking-tight group-hover:text-lime-50 transition-colors duration-200">
              {t.title}
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {(['home', 'resources', 'tools', 'community'] as const).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`relative px-4 py-1.5 text-[18px] font-medium rounded-lg transition-all duration-200 ${
                  currentPage === page
                    ? 'text-lime-400'
                    : 'text-white hover:bg-white/5'
                }`}
              >
                {t[page]}
                
                {/* Active indicator */}
                {currentPage === page && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-lime-400 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            
            {/* Language Selector - Desktop */}
            <div className="relative hidden md:block">
              <button
                onClick={toggleLanguageMenu}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-[18px] font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lime-400/50 ${
                  isLangMenuOpen
                    ? 'text-lime-400 bg-white/5 border border-lime-500/30'
                    : 'text-white hover:text-lime-400 hover:bg-white/5 border border-transparent'
                }`}
                aria-label="语言选择"
                aria-expanded={isLangMenuOpen}
              >
                <Globe size={15} className={isLangMenuOpen ? 'text-lime-400' : ''} />
                <span>{languageShort[language]}</span>
                <ChevronDown 
                  size={14} 
                  className={`transition-transform duration-200 ${
                    isLangMenuOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {/* Language Dropdown */}
              {isLangMenuOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsLangMenuOpen(false)}
                  />
                  <div className="absolute right-0 top-full mt-2 w-52 bg-[#0a0a0a]/98 backdrop-blur-xl border border-zinc-800/70 rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="p-1.5">
                      {languageOrder.map((lang) => (
                        <button
                          key={lang}
                          onClick={() => handleLanguageChange(lang)}
                          className={`w-full text-left px-3 py-2 text-[13px] rounded-lg transition-all duration-150 ${
                            language === lang
                              ? 'text-white bg-lime-500/15 font-medium'
                              : 'text-zinc-400 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{languageNames[lang]}</span>
                            {language === lang && (
                              <span className="w-1.5 h-1.5 bg-lime-400 rounded-full" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-all duration-200 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/50"
              aria-label={isMenuOpen ? '关闭菜单' : '打开菜单'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-[#0a0a0a]/98 backdrop-blur-xl border border-zinc-800/70 rounded-xl shadow-2xl shadow-black/50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="p-2">
            {/* Navigation Links */}
            {(['home', 'resources', 'tools', 'community'] as const).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-full text-left px-4 py-2.5 text-sm rounded-lg transition-all duration-150 ${
                  currentPage === page
                    ? 'text-lime-400 font-medium'
                    : 'text-white hover:bg-white/5'
                }`}
              >
                {t[page]}
              </button>
            ))}
            
            {/* Language Section */}
            <div className="mt-3 pt-3 border-t border-zinc-800/50">
              <div className="text-[11px] text-zinc-500 uppercase tracking-wider mb-2 px-4">
                Language
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {languageOrder.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className={`text-[12px] py-2 px-3 rounded-lg transition-all duration-150 ${
                      language === lang
                        ? 'text-lime-400 font-medium'
                        : 'text-white hover:bg-white/5'
                    }`}
                  >
                    {languageShort[lang]}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export const Header = memo(HeaderComponent);
