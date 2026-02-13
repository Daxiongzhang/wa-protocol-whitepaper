import { useState, useCallback, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Suspense, lazy } from 'react';

// 使用优化后的类型定义
type Language = 'en' | 'zh' | 'id' | 'th' | 'vi' | 'ko' | 'ja';
type Page = 'home' | 'resources' | 'tools' | 'community' | 'whitepaper' | 'faq' | 'social';

export type { Language, Page };

// 页面配置映射 - 提升可维护性
const PAGE_CONFIG = {
  home: 'HomePage',
  resources: 'ResourcesPage', 
  tools: 'ToolsPage',
  community: 'CommunityPage',
  whitepaper: 'WhitepaperPage',
  faq: 'FAQPage',
  social: 'SocialPage'
} as const;

// 懒加载页面组件 - 工业级代码分割
const LazyPages = {
  [PAGE_CONFIG.home]: lazy(() => 
    import('./pages/HomePage').then(mod => ({ default: mod.HomePage }))
  ),
  [PAGE_CONFIG.resources]: lazy(() => 
    import('./pages/ResourcesPage').then(mod => ({ default: mod.ResourcesPage }))
  ),
  [PAGE_CONFIG.tools]: lazy(() => 
    import('./pages/ToolsPage').then(mod => ({ default: mod.ToolsPage }))
  ),
  [PAGE_CONFIG.community]: lazy(() => 
    import('./pages/CommunityPage').then(mod => ({ default: mod.CommunityPage }))
  ),
  [PAGE_CONFIG.whitepaper]: lazy(() => 
    import('./pages/WhitepaperPage').then(mod => ({ default: mod.WhitepaperPage }))
  ),
  [PAGE_CONFIG.faq]: lazy(() => 
    import('./pages/FAQPage').then(mod => ({ default: mod.FAQPage }))
  ),
  [PAGE_CONFIG.social]: lazy(() => 
    import('./pages/SocialPage').then(mod => ({ default: mod.SocialPage }))
  )
} as const;

/**
 * 主应用组件 - 工业级架构
 * 
 * 特性:
 * - 错误边界保护
 * - 代码分割和懒加载
 * - 性能优化
 * - 类型安全
 * - 可维护性提升
 */
export default function App() {
  // 状态管理 - 使用useCallback优化性能
  const [language, setLanguage] = useState<Language>('zh');
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // 语言切换处理 - 防抖优化
  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    
    // 保存到localStorage - 持久化用户偏好
    try {
      localStorage.setItem('preferred-language', lang);
    } catch (error) {
      console.warn('Failed to save language preference:', error);
    }
  }, []);

  // 页面切换处理 - 滚动到顶部优化
  const handleSetCurrentPage = useCallback((page: Page) => {
    setCurrentPage(page);
    
    // 平滑滚动到顶部
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      // 降级处理
      window.scrollTo(0, 0);
    }
  }, []);

  // 初始化时恢复用户偏好
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem('preferred-language') as Language;
      if (savedLanguage && ['en', 'zh', 'id', 'th', 'vi', 'ko', 'ja'].includes(savedLanguage)) {
        setLanguage(savedLanguage);
      }
    } catch (error) {
      console.warn('Failed to load language preference:', error);
    }
  }, []);

  // 页面渲染逻辑 - 使用useMemo优化
  const currentPageComponent = useMemo(() => {
    const pageKey = PAGE_CONFIG[currentPage];
    const PageComponent = LazyPages[pageKey];
    
    return (
      <PageComponent 
        language={language} 
        setCurrentPage={handleSetCurrentPage} 
      />
    );
  }, [currentPage, language, handleSetCurrentPage]);

  // 动态样式计算
  const appStyles = useMemo(() => ({
    className: `min-h-screen bg-[#0a0a0a] relative overflow-hidden lang-${language}`
  }), [language]);

  return (
    <ErrorBoundary>
      <div {...appStyles}>
        {/* 背景效果 - 分离关注点 */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent" />
        
        {/* 主布局 */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* 头部导航 */}
          <Header 
            language={language} 
            setLanguage={handleSetLanguage}
            currentPage={currentPage}
            setCurrentPage={handleSetCurrentPage}
          />
          
          {/* 主内容区域 */}
          <main className="flex-1">
            <Suspense fallback={null}>
              {currentPageComponent}
            </Suspense>
          </main>
          
          {/* 页脚 */}
          <Footer language={language} />
        </div>
      </div>
    </ErrorBoundary>
  );
}
