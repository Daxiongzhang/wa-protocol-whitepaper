import type { Language } from '../App';

export interface HeaderTranslation {
  title: string;
  home: string;
  resources: string;
  tools: string;
  community: string;
}

export const headerTranslations: Record<Language, HeaderTranslation> = {
  en: {
    title: 'W/A Resource Hub',
    home: 'Home',
    resources: 'Resources',
    tools: 'Tools',
    community: 'Community'
  },
  zh: {
    title: 'W/A 中文资料库',
    home: '首页',
    resources: '资料库',
    tools: '工具',
    community: '社区'
  },
  id: {
    title: 'W/A Pusat Sumber Daya',
    home: 'Beranda',
    resources: 'Sumber Daya',
    tools: 'Alat',
    community: 'Komunitas'
  },
  th: {
    title: 'W/A ศูนย์ทรัพยากร',
    home: 'หน้าหลัก',
    resources: 'ทรัพยากร',
    tools: 'เครื่องมือ',
    community: 'ชุมชน'
  },
  vi: {
    title: 'W/A Trung Tâm Tài Nguyên',
    home: 'Trang Chủ',
    resources: 'Tài Nguyên',
    tools: 'Công Cụ',
    community: 'Cộng Đồng'
  },
  ko: {
    title: 'W/A 리소스 허브',
    home: '홈',
    resources: '리소스',
    tools: '도구',
    community: '커뮤니티'
  },
  ja: {
    title: 'W/A リソースハブ',
    home: 'ホーム',
    resources: 'リソース',
    tools: 'ツール',
    community: 'コミュニティ'
  }
};

export const languageShort: Record<Language, string> = {
  en: 'EN',
  zh: '中文',
  id: 'ID',
  th: 'TH',
  vi: 'VI',
  ko: 'KR',
  ja: 'JP'
};

export const languageNames: Record<Language, string> = {
  en: 'English',
  zh: '中文',
  id: 'Bahasa Indonesia',
  th: 'ภาษาไทย',
  vi: 'Tiếng Việt',
  ko: '한국어',
  ja: '日本語'
};

export const languageOrder: Language[] = ['en', 'zh', 'id', 'th', 'vi', 'ko', 'ja'];
