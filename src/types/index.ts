/**
 * 统一类型导出
 * 工业级类型系统入口
 */

// 基础类型
export * from './common.types';

// 应用类型
export * from './app.types';

// 内容类型
export * from './content.types';

// 重新导出常用类型别名
export type {
  SupportedLanguage as Language,
  PageRoute as Page,
  AppError as Error,
  AsyncState,
  BaseComponentProps,
  EventHandler,
  Callback,
  AsyncCallback
} from './common.types';

export type {
  AppState,
  AppContext,
  AppAction,
  AppDispatch,
  AppActions,
  AppSelectors
} from './app.types';