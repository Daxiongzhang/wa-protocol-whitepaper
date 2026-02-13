import type { SupportedLanguage } from './common.types';

/**
 * 内容相关类型定义
 * 统一管理所有内容数据结构
 */

// FAQ相关类型
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: CategoryKey;
  tags?: string[];
  lastUpdated?: number;
}

export interface RiskItem {
  id: string;
  label: string;
  text: string;
  severity: 'low' | 'medium' | 'high';
}

export interface FAQCategory {
  key: CategoryKey;
  name: string;
  description: string;
  itemCount: number;
}

export interface FAQContent {
  title: string;
  subtitle: string;
  backToHome: string;
  searchPlaceholder: string;
  riskSummary: {
    title: string;
    items: RiskItem[];
  };
  disclaimer: string;
  categories: Record<CategoryKey, string>;
  totalQuestions: string;
  noResults: string;
  faqs: Record<CategoryKey, FAQItem[]>;
}

export type CategoryKey = 'basic' | 'revenue' | 'organization' | 'risk' | 'conclusion';

// 通用内容翻译接口
export interface BaseTranslation {
  readonly language: SupportedLanguage;
  readonly lastUpdated: number;
}

// 头部导航翻译
export interface HeaderTranslation extends BaseTranslation {
  title: string;
  navigation: {
    home: string;
    resources: string;
    tools: string;
    community: string;
  };
}

// 首页内容翻译
export interface HomeTranslation extends BaseTranslation {
  badge: string;
  hero: {
    line1: string;
    line2: string;
    quote: string;
  };
  buttons: {
    primary: string;
    secondary: string;
  };
  stats: string[];
  visionCards: VisionCard[];
  resources: ResourceSection;
  learnMore: string;
}

export interface VisionCard {
  id: string;
  title: string;
  description: string;
  tag: string;
  icon: string;
}

export interface ResourceSection {
  title: string;
  description: string;
  items: ResourceItem[];
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

// 通用内容类型
export interface ContentSection {
  id: string;
  title: string;
  description?: string;
  content: any;
  metadata?: Record<string, any>;
}

// 内容验证结果
export interface ContentValidationResult {
  isValid: boolean;
  errors: ValidationError[];
  warnings: ValidationWarning[];
}

export interface ValidationError {
  field: string;
  message: string;
  code: string;
}

export interface ValidationWarning {
  field: string;
  message: string;
  code: string;
}
