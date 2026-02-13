import React, { Component, ReactNode, ErrorInfo } from 'react';
import type { AppError } from '../types';

interface ErrorBoundaryState {
  hasError: boolean;
  error: AppError | null;
  errorInfo: ErrorInfo | null;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: AppError, errorInfo: ErrorInfo) => void;
}

/**
 * 工业级错误边界组件
 * 提供全局错误捕获和优雅降级
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error: {
        code: 'REACT_ERROR_BOUNDARY',
        message: error.message,
        details: { stack: error.stack },
        timestamp: Date.now()
      }
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      errorInfo
    });

    // 记录错误到监控服务
    this.logErrorToService(error, errorInfo);

    // 调用自定义错误处理
    if (this.props.onError) {
      this.props.onError(this.state.error!, errorInfo);
    }
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // 在生产环境中，这里应该发送错误到监控服务
    // 例如: Sentry, LogRocket, 或自定义错误追踪服务
    console.error('Error Boundary caught an error:', {
      error: {
        message: error.message,
        stack: error.stack
      },
      errorInfo,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href
    });
  };

  private handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  private handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // 如果提供了自定义fallback，使用它
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // 默认错误UI
      return (
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>

            <h1 className="text-2xl font-bold text-white mb-4">
              出现了一些问题
            </h1>

            <p className="text-slate-400 mb-8 leading-relaxed">
              应用程序遇到了意外错误。我们已经记录了这个问题，请稍后再试。
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text-left mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <summary className="text-red-400 cursor-pointer font-medium mb-2">
                  错误详情 (开发模式)
                </summary>
                <div className="mt-2 text-xs text-red-300 font-mono whitespace-pre-wrap">
                  {this.state.error.message}
                  {this.state.errorInfo?.componentStack && (
                    <div className="mt-2">
                      <strong>Component Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}

            <div className="flex gap-3 justify-center">
              <button
                onClick={this.handleReset}
                className="px-6 py-2.5 bg-lime-600 hover:bg-lime-500 text-white font-medium rounded-lg transition-colors duration-200"
              >
                重试
              </button>
              <button
                onClick={this.handleReload}
                className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors duration-200"
              >
                刷新页面
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * 高阶组件：为组件添加错误边界保护
 */
export function withErrorBoundary<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  fallback?: ReactNode,
  onError?: (error: AppError, errorInfo: ErrorInfo) => void
) {
  return function WithErrorBoundaryComponent(props: P) {
    return (
      <ErrorBoundary fallback={fallback} onError={onError}>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
}

/**
 * Hook: 用于在函数组件中处理错误
 */
export function useErrorHandler() {
  const [error, setError] = React.useState<AppError | null>(null);

  const handleError = React.useCallback((error: Error | AppError) => {
    const appError: AppError = {
      code: 'MANUAL_ERROR',
      message: error.message,
      details: error instanceof Error ? { stack: error.stack } : {},
      timestamp: Date.now()
    };
    
    setError(appError);
    
    // 在生产环境中发送到错误监控服务
    console.error('Manual error caught:', appError);
  }, []);

  const resetError = React.useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, resetError };
}
