import type { Language } from '../../App';
import type { WhitepaperContent } from './types';

export async function loadWhitepaperContent(language: Language): Promise<WhitepaperContent> {
  try {
    switch (language) {
      case 'en':
        return (await import('./content/whitepaper-content.en')).whitepaperContent_en;
      case 'zh':
        return (await import('./content/whitepaper-content.zh')).whitepaperContent_zh;
      case 'id':
        return (await import('./content/whitepaper-content.id')).whitepaperContent_id;
      case 'th':
        return (await import('./content/whitepaper-content.th')).whitepaperContent_th;
      case 'vi':
        return (await import('./content/whitepaper-content.vi')).whitepaperContent_vi;
      case 'ko':
        return (await import('./content/whitepaper-content.ko')).whitepaperContent_ko;
      case 'ja':
        return (await import('./content/whitepaper-content.ja')).whitepaperContent_ja;
      default:
        return (await import('./content/whitepaper-content.en')).whitepaperContent_en;
    }
  } catch {
    return (await import('./content/whitepaper-content.en')).whitepaperContent_en;
  }
}
