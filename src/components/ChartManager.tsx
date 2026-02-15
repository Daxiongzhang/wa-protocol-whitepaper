import React from 'react';
import { ChartRegistry, detectChart, ChartConfig } from '../data/chart-config';
import type { Language } from '../App';

const CHART_REGISTRY_UPDATED_EVENT = 'chart-registry-updated';

// 图表管理器 - 视觉层
export const ChartManager = {
  // 注册所有图表组件
  registerComponents() {
    // 动态导入并注册图表组件
    import('./OptimizedArchitectureImage').then(module => {
      ChartRegistry.register('architecture-diagram', module.default);
      window.dispatchEvent(new Event(CHART_REGISTRY_UPDATED_EVENT));
    });
    
    import('./FlowDiagramImage').then(module => {
      ChartRegistry.register('flow-diagram', module.default);
      window.dispatchEvent(new Event(CHART_REGISTRY_UPDATED_EVENT));
    });
    
    import('./BusinessLoopImage').then(module => {
      ChartRegistry.register('business-loop-diagram', module.default);
      window.dispatchEvent(new Event(CHART_REGISTRY_UPDATED_EVENT));
    });
  },

  // 渲染图表
  renderChart(
    text: string,
    key: string,
    props?: {
      language?: Language;
    }
  ): React.ReactNode | null {
    const config = detectChart(text);
    if (!config) return null;

    const Component = ChartRegistry.get(config.id);
    if (!Component) return null;

    return (
      <div key={`${config.id}-${key}`} className="my-8">
        <Component {...props} />
      </div>
    );
  },

  // 获取所有已注册的图表
  getRegisteredCharts() {
    return ChartRegistry.getAll();
  },

  // 检查图表是否已注册
  isChartRegistered(id: string): boolean {
    return ChartRegistry.get(id) !== null;
  }
};

// 图表渲染组件
interface ChartRendererProps {
  text: string;
  index: number;
  language?: Language;
}

export const ChartRenderer: React.FC<ChartRendererProps> = ({ text, index, language }) => {
  const [, forceRerender] = React.useState(0);

  React.useEffect(() => {
    const handleUpdate = () => forceRerender(v => v + 1);
    window.addEventListener(CHART_REGISTRY_UPDATED_EVENT, handleUpdate);
    return () => window.removeEventListener(CHART_REGISTRY_UPDATED_EVENT, handleUpdate);
  }, []);

  return ChartManager.renderChart(text, `chart-${index}`, { language });
};

// 图表初始化Hook
export const useChartInitialization = () => {
  React.useEffect(() => {
    ChartManager.registerComponents();
  }, []);
};
