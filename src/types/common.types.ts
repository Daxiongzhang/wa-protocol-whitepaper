/**
 * 通用类型定义
 * 工业级类型系统基础
 */

// 基础语言类型
export type SupportedLanguage = 'en' | 'zh' | 'id' | 'th' | 'vi' | 'ko' | 'ja';

// 页面路由类型
export type PageRoute = 'home' | 'resources' | 'tools' | 'community' | 'whitepaper' | 'faq' | 'social';

// 通用API响应类型
export interface ApiResponse<T = any> {
  data: T;
  success: boolean;
  message?: string;
  timestamp: number;
}

// 通用错误类型
export interface AppError {
  code: string;
  message: string;
  details?: Record<string, any>;
  timestamp: number;
}

// 组件通用Props
export interface BaseComponentProps {
  className?: string;
  testId?: string;
}

// 异步状态类型
export type AsyncState<T> = {
  data: T | null;
  loading: boolean;
  error: AppError | null;
};

// 主题类型
export type Theme = 'light' | 'dark' | 'system';

// 设备类型
export type DeviceType = 'mobile' | 'tablet' | 'desktop';

// 屏幕尺寸
export interface ScreenSize {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

// 通用回调函数类型
export type EventHandler<T = Event> = (event: T) => void;
export type Callback<T = void> = () => T;
export type AsyncCallback<T = void> = () => Promise<T>;

// 通用ID类型
export type ID = string | number;

// 时间戳类型
export type Timestamp = number;

// 可选类型工具
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// 必需类型工具
export type Required<T, K extends keyof T> = T & { [P in K]-?: T[P] };

// 深度部分类型
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
