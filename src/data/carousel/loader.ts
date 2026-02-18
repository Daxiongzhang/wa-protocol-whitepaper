import type { Language } from '../../App';
import type { CarouselContent } from './types';

export async function loadCarouselContent(language: Language): Promise<CarouselContent> {
  try {
    switch (language) {
      case 'en':
        return (await import('./content/content.en')).carouselContent_en;
      case 'zh':
        return (await import('./content/content.zh')).carouselContent_zh;
      case 'id':
        return (await import('./content/content.id')).carouselContent_id;
      case 'th':
        return (await import('./content/content.th')).carouselContent_th;
      case 'vi':
        return (await import('./content/content.vi')).carouselContent_vi;
      case 'ko':
        return (await import('./content/content.ko')).carouselContent_ko;
      case 'ja':
        return (await import('./content/content.ja')).carouselContent_ja;
      default:
        return (await import('./content/content.en')).carouselContent_en;
    }
  } catch {
    return (await import('./content/content.en')).carouselContent_en;
  }
}
