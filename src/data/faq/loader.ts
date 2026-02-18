import type { Language } from '../../App';
import type { FAQContent } from '../../types/content.types';

export async function loadFAQContent(language: Language): Promise<FAQContent> {
  try {
    switch (language) {
      case 'zh':
        return (await import('./content/faq.zh')).faqContent_zh;
      case 'en':
        return (await import('./content/faq.en')).faqContent_en;
      case 'id':
        return (await import('./content/faq.id')).faqContent_id;
      case 'th':
        return (await import('./content/faq.th')).faqContent_th;
      case 'vi':
        return (await import('./content/faq.vi')).faqContent_vi;
      case 'ko':
        return (await import('./content/faq.ko')).faqContent_ko;
      case 'ja':
        return (await import('./content/faq.ja')).faqContent_ja;
      default:
        return (await import('./content/faq.zh')).faqContent_zh;
    }
  } catch {
    return (await import('./content/faq.zh')).faqContent_zh;
  }
}
