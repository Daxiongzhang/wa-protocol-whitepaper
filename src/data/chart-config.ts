// 图表配置 - 数据层
export interface ChartConfig {
  id: string;
  title: string;
  component: React.ComponentType<any>;
  keywords: string[];
  description: string;
}

// 图表映射配置
export const CHART_CONFIGS: ChartConfig[] = [
  {
    id: 'architecture-diagram',
    title: '架构总览图（逻辑结构）',
    keywords: ['架构总览图', '逻辑结构'],
    description: 'WA Protocol 操作系统架构总览图',
    component: null as any, // 将在视觉层注入
  },
  {
    id: 'flow-diagram',
    title: '流程结构图（逻辑结构）',
    keywords: ['流程结构图', '逻辑结构'],
    description: 'WA Protocol 用户参与流程结构图',
    component: null as any, // 将在视觉层注入
  },
  {
    id: 'business-loop-diagram',
    title: '商业闭环总图（逻辑结构）',
    keywords: ['商业闭环总图', '逻辑结构'],
    description: 'WA Protocol 商业闭环总图',
    component: null as any, // 将在视觉层注入
  },
  {
    id: 'incentive-structure-diagram',
    title: '激励体系结构（四种类型）',
    keywords: ['激励体系结构', '四种类型'],
    description: 'WA Protocol 激励体系结构图',
    component: null as any, // 将在视觉层注入
  },
];

// 图表检测工具函数
export const detectChart = (text: string): ChartConfig | null => {
  return CHART_CONFIGS.find(config => 
    config.keywords.every(keyword => text.includes(keyword))
  ) || null;
};

// 图表组件注册器
export class ChartRegistry {
  private static components: Map<string, React.ComponentType<any>> = new Map();

  static register(id: string, component: React.ComponentType<any>) {
    this.components.set(id, component);
  }

  static get(id: string): React.ComponentType<any> | null {
    return this.components.get(id) || null;
  }

  static getAll(): Map<string, React.ComponentType<any>> {
    return new Map(this.components);
  }
}
