import React from 'react';
import { ChartRegistry, detectChart, ChartConfig } from '../data/chart-config';

// 图表管理器 - 视觉层
export const ChartManager = {
  // 注册所有图表组件
  registerComponents() {
    // 动态导入并注册图表组件
    import('./OptimizedArchitectureImage').then(module => {
      ChartRegistry.register('architecture-diagram', module.default);
    });
    
    import('./FlowDiagramImage').then(module => {
      ChartRegistry.register('flow-diagram', module.default);
    });
    
    import('./BusinessLoopImage').then(module => {
      ChartRegistry.register('business-loop-diagram', module.default);
    });
    
    import('./IncentiveStructureImage').then(module => {
      ChartRegistry.register('incentive-structure-diagram', module.default);
    });
  },

  // 渲染图表
  renderChart(text: string, key: string): React.ReactNode | null {
    const config = detectChart(text);
    if (!config) return null;

    const Component = ChartRegistry.get(config.id);
    if (!Component) return null;

    return (
      <div key={`${config.id}-${key}`} className="my-8">
        <Component />
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
}

export const ChartRenderer: React.FC<ChartRendererProps> = ({ text, index }) => {
  return ChartManager.renderChart(text, `chart-${index}`);
};

// 图表初始化Hook
export const useChartInitialization = () => {
  React.useEffect(() => {
    ChartManager.registerComponents();
  }, []);
};
