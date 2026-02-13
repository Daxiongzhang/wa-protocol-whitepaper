import type { 
  SupportedLanguage, 
  PageRoute, 
  AsyncState, 
  ScreenSize, 
  DeviceType,
  Theme,
  AppError 
} from './common.types';

/**
 * 应用程序核心类型定义
 * 管理应用状态和配置
 */

// 应用状态接口
export interface AppState {
  // 用户偏好设置
  preferences: UserPreferences;
  
  // 当前页面状态
  routing: RoutingState;
  
  // UI状态
  ui: UIState;
  
  // 内容状态
  content: ContentState;
  
  // 系统状态
  system: SystemState;
}

// 用户偏好设置
export interface UserPreferences {
  language: SupportedLanguage;
  theme: Theme;
  autoSave: boolean;
  notifications: NotificationSettings;
  accessibility: AccessibilitySettings;
}

export interface NotificationSettings {
  enabled: boolean;
  sound: boolean;
  desktop: boolean;
  frequency: 'realtime' | 'hourly' | 'daily' | 'weekly';
}

export interface AccessibilitySettings {
  reducedMotion: boolean;
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
  screenReader: boolean;
}

// 路由状态
export interface RoutingState {
  currentPage: PageRoute;
  previousPage: PageRoute | null;
  navigationHistory: PageRoute[];
  isTransitioning: boolean;
  transitionDuration: number;
}

// UI状态
export interface UIState {
  // 布局状态
  layout: LayoutState;
  
  // 交互状态
  interactions: InteractionState;
  
  // 模态框状态
  modals: ModalState;
  
  // 加载状态
  loading: LoadingState;
}

export interface LayoutState {
  headerHeight: number;
  footerHeight: number;
  sidebarOpen: boolean;
  sidebarWidth: number;
  isMobileMenuOpen: boolean;
  screenSize: ScreenSize;
  deviceType: DeviceType;
  scrollPosition: number;
  isScrolled: boolean;
}

export interface InteractionState {
  isLanguageMenuOpen: boolean;
  isUserMenuOpen: boolean;
  isSearchOpen: boolean;
  focusedElement: string | null;
  keyboardNavigation: boolean;
}

export interface ModalState {
  openModals: string[];
  modalData: Record<string, any>;
}

export interface LoadingState {
  global: boolean;
  components: Record<string, boolean>;
  operations: Record<string, AsyncState<any>>;
}

// 内容状态
export interface ContentState {
  translations: AsyncState<Record<SupportedLanguage, any>>;
  cachedContent: Record<string, any>;
  lastUpdated: Record<string, number>;
  validationErrors: Record<string, any[]>;
}

// 系统状态
export interface SystemState {
  online: boolean;
  serviceWorker: ServiceWorkerState;
  performance: PerformanceState;
  errors: AppError[];
  version: string;
  buildTime: string;
  environment: 'development' | 'staging' | 'production';
}

export interface ServiceWorkerState {
  supported: boolean;
  enabled: boolean;
  updated: boolean;
  registration: ServiceWorkerRegistration | null;
}

export interface PerformanceState {
  firstContentfulPaint: number | null;
  largestContentfulPaint: number | null;
  cumulativeLayoutShift: number | null;
  firstInputDelay: number | null;
  memoryUsage: number | null;
}

// 应用配置
export interface AppConfig {
  name: string;
  version: string;
  description: string;
  author: string;
  repository: string;
  license: string;
  supportedLanguages: SupportedLanguage[];
  defaultLanguage: SupportedLanguage;
  theme: {
    default: Theme;
    colors: Record<string, string>;
  };
  routing: {
    baseUrl: string;
    defaultRoute: PageRoute;
    transitionDuration: number;
  };
  performance: {
    enableServiceWorker: boolean;
    enableAnalytics: boolean;
    enableErrorTracking: boolean;
    enablePerformanceMonitoring: boolean;
  };
  features: {
    enableDarkMode: boolean;
    enableLanguageSwitch: boolean;
    enableOfflineMode: boolean;
    enablePWA: boolean;
  };
}

// 应用上下文
export interface AppContext {
  state: AppState;
  dispatch: AppDispatch;
  actions: AppActions;
  selectors: AppSelectors;
}

// Action类型
export type AppAction = 
  | { type: 'SET_LANGUAGE'; payload: SupportedLanguage }
  | { type: 'SET_THEME'; payload: Theme }
  | { type: 'NAVIGATE'; payload: { page: PageRoute; replace?: boolean } }
  | { type: 'SET_LAYOUT_STATE'; payload: Partial<LayoutState> }
  | { type: 'SET_INTERACTION_STATE'; payload: Partial<InteractionState> }
  | { type: 'OPEN_MODAL'; payload: { id: string; data?: any } }
  | { type: 'CLOSE_MODAL'; payload: { id: string } }
  | { type: 'SET_LOADING'; payload: { key: string; loading: boolean } }
  | { type: 'SET_CONTENT'; payload: { key: string; content: any } }
  | { type: 'ADD_ERROR'; payload: AppError }
  | { type: 'CLEAR_ERRORS'; payload?: string }
  | { type: 'RESET_STATE' };

export type AppDispatch = (action: AppAction) => void;

// Actions接口
export interface AppActions {
  // 用户偏好
  setLanguage: (language: SupportedLanguage) => void;
  setTheme: (theme: Theme) => void;
  updatePreferences: (preferences: Partial<UserPreferences>) => void;
  
  // 路由
  navigate: (page: PageRoute, replace?: boolean) => void;
  goBack: () => void;
  
  // UI
  toggleSidebar: () => void;
  setMobileMenu: (open: boolean) => void;
  openModal: (id: string, data?: any) => void;
  closeModal: (id: string) => void;
  setLoading: (key: string, loading: boolean) => void;
  
  // 内容
  loadContent: (key: string) => Promise<void>;
  cacheContent: (key: string, content: any) => void;
  
  // 系统
  addError: (error: AppError) => void;
  clearErrors: (code?: string) => void;
}

// Selectors接口
export interface AppSelectors {
  // 用户偏好
  selectLanguage: (state: AppState) => SupportedLanguage;
  selectTheme: (state: AppState) => Theme;
  selectPreferences: (state: AppState) => UserPreferences;
  
  // 路由
  selectCurrentPage: (state: AppState) => PageRoute;
  selectNavigationHistory: (state: AppState) => PageRoute[];
  selectIsTransitioning: (state: AppState) => boolean;
  
  // UI
  selectLayoutState: (state: AppState) => LayoutState;
  selectInteractionState: (state: AppState) => InteractionState;
  selectModalState: (state: AppState) => ModalState;
  selectLoadingState: (state: AppState) => LoadingState;
  
  // 内容
  selectContent: (state: AppState, key: string) => any;
  selectTranslations: (state: AppState, language: SupportedLanguage) => any;
  
  // 系统
  selectSystemState: (state: AppState) => SystemState;
  selectErrors: (state: AppState, code?: string) => AppError[];
}
