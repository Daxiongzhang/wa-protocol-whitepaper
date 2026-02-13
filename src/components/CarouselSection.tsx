import { useState, useRef } from 'react';
import { FileText, Globe, MessageCircle, Layers, Users } from 'lucide-react';
import type { Language, Page } from '../App';

const translations = {
  en: {
    title: 'Core Resources',
    subtitle: 'Deep dive into our platform, technology and community',
    cards: [
      {
        title: 'Whitepaper',
        desc: 'Comprehensive documentation of our platform\'s vision, technology, and roadmap.',
        icon: FileText,
        color: 'cyan'
      },
      {
        title: 'Global Community',
        desc: 'Join our worldwide network of creators, developers, and innovators.',
        icon: Globe,
        color: 'indigo'
      },
      {
        title: 'Q&A',
        desc: 'Frequently asked questions and quick answers for partners and community members.',
        icon: MessageCircle,
        color: 'emerald'
      },
      {
        title: 'Social Channels',
        desc: 'Connect with us on Telegram, Discord, and YouTube for updates and community.',
        icon: Layers,
        color: 'blue'
      },
      {
        title: 'Team & Partners',
        desc: 'Meet the experts behind the platform and our strategic ecosystem partners.',
        icon: Users,
        color: 'green'
      }
    ],
    learnMore: 'Learn More'
  },
  zh: {
    title: '核心资源',
    subtitle: '深入了解我们的平台、技术和社区',
    cards: [
      {
        title: '白皮书',
        desc: '全面记录我们平台的愿景、技术和路线图。',
        icon: FileText,
        color: 'cyan'
      },
      {
        title: '全球社区',
        desc: '加入我们遍布全球的创作者、开发者和创新者网络。',
        icon: Globe,
        color: 'indigo'
      },
      {
        title: '百问百答',
        desc: '面向合作伙伴与社区成员的常见问题与快速解答。',
        icon: MessageCircle,
        color: 'emerald'
      },
      {
        title: '社交渠道',
        desc: '通过 Telegram、Twitter、Discord 和 YouTube 与我们保持联系。',
        icon: Layers,
        color: 'blue'
      },
      {
        title: '团队与合作伙伴',
        desc: '认识平台背后的专家团队和我们的战略合作伙伴。',
        icon: Users,
        color: 'green'
      }
    ],
    learnMore: '了解更多'
  },
  id: {
    title: 'Sumber Daya Inti',
    subtitle: 'Selami platform, teknologi, dan komunitas kami',
    cards: [
      {
        title: 'Whitepaper',
        desc: 'Dokumentasi komprehensif tentang visi, teknologi, dan roadmap platform kami.',
        icon: FileText,
        color: 'cyan'
      },
      {
        title: 'Komunitas Global',
        desc: 'Bergabunglah dengan jaringan global kreator, developer, dan inovator kami.',
        icon: Globe,
        color: 'indigo'
      },
      {
        title: 'Q&A',
        desc: 'Pertanyaan umum dan jawaban cepat untuk mitra dan anggota komunitas.',
        icon: MessageCircle,
        color: 'emerald'
      },
      {
        title: 'Saluran Sosial',
        desc: 'Terhubung dengan kami di Telegram, Discord, dan YouTube untuk pembaruan.',
        icon: Layers,
        color: 'blue'
      },
      {
        title: 'Tim & Mitra',
        desc: 'Temui para ahli di balik platform dan mitra ekosistem strategis kami.',
        icon: Users,
        color: 'green'
      }
    ],
    learnMore: 'Pelajari Lebih Lanjut'
  },
  th: {
    title: 'แหล่งข้อมูลหลัก',
    subtitle: 'เจาะลึกแพลตฟอร์ม เทคโนโลยี และชุมชนของเรา',
    cards: [
      {
        title: 'Whitepaper',
        desc: 'เอกสารที่ครอบคลุมเกี่ยวกับวิสัยทัศน์ เทคโนโลยี และแผนงานของแพลตฟอร์ม',
        icon: FileText,
        color: 'cyan'
      },
      {
        title: 'ชุมชนทั่วโลก',
        desc: 'เข้าร่วมเครือข่ายทั่วโลกของผู้สร้างสรรค์ นักพัฒนา และนักนวัตกรรม',
        icon: Globe,
        color: 'indigo'
      },
      {
        title: 'คำถามที่พบบ่อย',
        desc: 'คำถามที่พบบ่อยและคำตอบด่วนสำหรับพาร์ทเนอร์และสมาชิกชุมชน',
        icon: MessageCircle,
        color: 'emerald'
      },
      {
        title: 'ช่องทางโซเชียล',
        desc: 'เชื่อมต่อกับเราบน Telegram, Discord และ YouTube สำหรับอัปเดต',
        icon: Layers,
        color: 'blue'
      },
      {
        title: 'ทีมและพาร์ทเนอร์',
        desc: 'พบกับผู้เชี่ยวชาญเบื้องหลังแพลตฟอร์มและพาร์ทเนอร์เชิงกลยุทธ์',
        icon: Users,
        color: 'green'
      }
    ],
    learnMore: 'เรียนรู้เพิ่มเติม'
  },
  vi: {
    title: 'Tài Nguyên Cốt Lõi',
    subtitle: 'Tìm hiểu sâu về nền tảng, công nghệ và cộng đồng của chúng tôi',
    cards: [
      {
        title: 'Whitepaper',
        desc: 'Tài liệu toàn diện về tầm nhìn, công nghệ và lộ trình của nền tảng.',
        icon: FileText,
        color: 'cyan'
      },
      {
        title: 'Cộng Đồng Toàn Cầu',
        desc: 'Tham gia mạng lưới toàn cầu của các nhà sáng tạo, nhà phát triển và đổi mới.',
        icon: Globe,
        color: 'indigo'
      },
      {
        title: 'Hỏi & Đáp',
        desc: 'Câu hỏi thường gặp và câu trả lời nhanh cho đối tác và thành viên cộng đồng.',
        icon: MessageCircle,
        color: 'emerald'
      },
      {
        title: 'Kênh Xã Hội',
        desc: 'Kết nối với chúng tôi trên Telegram, Discord và YouTube để cập nhật.',
        icon: Layers,
        color: 'blue'
      },
      {
        title: 'Đội Ngũ & Đối Tác',
        desc: 'Gặp gỡ các chuyên gia đằng sau nền tảng và đối tác chiến lược.',
        icon: Users,
        color: 'green'
      }
    ],
    learnMore: 'Tìm Hiểu Thêm'
  },
  ko: {
    title: '핵심 리소스',
    subtitle: '플랫폼, 기술 및 커뮤니티에 대해 자세히 알아보세요',
    cards: [
      {
        title: '백서',
        desc: '플랫폼의 비전, 기술 및 로드맵에 대한 포괄적인 문서.',
        icon: FileText,
        color: 'cyan'
      },
      {
        title: '글로벌 커뮤니티',
        desc: '크리에이터, 개발자 및 혁신가의 전 세계 네트워크에 참여하세요.',
        icon: Globe,
        color: 'indigo'
      },
      {
        title: '질문과 답변',
        desc: '파트너 및 커뮤니티 구성원을 위한 자주 묻는 질문과 빠른 답변.',
        icon: MessageCircle,
        color: 'emerald'
      },
      {
        title: '소셜 채널',
        desc: 'Telegram, Discord 및 YouTube에서 업데이트 및 커뮤니티를 위해 연결하세요.',
        icon: Layers,
        color: 'blue'
      },
      {
        title: '팀 및 파트너',
        desc: '플랫폼 뒤의 전문가와 전략적 생태계 파트너를 만나보세요.',
        icon: Users,
        color: 'green'
      }
    ],
    learnMore: '자세히 보기'
  },
  ja: {
    title: 'コアリソース',
    subtitle: 'プラットフォーム、技術、コミュニティについて深く学ぶ',
    cards: [
      {
        title: '�����ワ��トペーパー',
        desc: 'プラットフォームのビジョン、技術、ロードマップの包括的なドキュメント。',
        icon: FileText,
        color: 'cyan'
      },
      {
        title: 'グローバルコミュニティ',
        desc: 'クリエイター、開発者、イノベーターの世界的なネット�����クに参���して���ださい。',
        icon: Globe,
        color: 'indigo'
      },
      {
        title: 'Q&A',
        desc: 'パートナーやコミュニティメンバー向けのよくある質問と迅速な回答。',
        icon: MessageCircle,
        color: 'emerald'
      },
      {
        title: 'ソーシャルチャンネル',
        desc: 'Telegram、Discord、YouTubeで更新情報とコミュニティのために接���してください。',
        icon: Layers,
        color: 'blue'
      },
      {
        title: 'チームとパートナー',
        desc: 'プラットフォームの背後にある専門家と戦略的エコシステムパートナーに会いましょう。',
        icon: Users,
        color: 'green'
      }
    ],
    learnMore: '詳細を見る'
  }
};

const colorMap = {
  cyan: {
    icon: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20'
  },
  indigo: {
    icon: 'text-indigo-500',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20'
  },
  emerald: {
    icon: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20'
  },
  blue: {
    icon: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20'
  },
  green: {
    icon: 'text-green-500',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20'
  }
};

interface CarouselSectionProps {
  language: Language;
  setCurrentPage: (page: Page) => void;
}

export function CarouselSection({ language, setCurrentPage }: CarouselSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(2);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  
  const t = translations[language] || translations.en;
  const totalCards = t.cards.length;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // 处理触摸开始
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    console.log('Touch start:', touchStartX.current);
  };

  // 处理触摸移动
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  // 处理触摸结束
  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const deltaX = touchEndX.current - touchStartX.current;
      console.log('Touch end:', touchEndX.current, 'Delta X:', deltaX);
      
      // 滑动距离超过30px才触发切换
      if (Math.abs(deltaX) > 30) {
        if (deltaX > 0) {
          // 向右滑动，切换到上一张
          console.log('Swiping right, going to previous');
          goToPrevious();
        } else {
          // 向左滑动，切换到下一张
          console.log('Swiping left, going to next');
          goToNext();
        }
      }
      
      // 重置
      touchStartX.current = null;
      touchEndX.current = null;
    }
  };

  // 卡片到页面的映射
  const cardToPageMap: Record<number, Page | null> = {
    0: 'whitepaper',  // Whitepaper
    1: null,          // Global Community - 暂时没有对应页面
    2: 'faq',         // Q&A
    3: 'social',      // Social Channels
    4: null           // Team & Partners - 暂时没有对应页面
  };

  // 处理卡片点击
  const handleCardClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Card clicked:', index, 'Current index:', currentIndex);
    
    // 检查是否点击了当前中间卡片
    if (index === currentIndex) {
      // 点击中间卡片，跳转到对应页面
      const targetPage = cardToPageMap[index];
      console.log('Clicking center card, target page:', targetPage);
      if (targetPage) {
        setCurrentPage(targetPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // 点击其他卡片，切换到该卡片
      console.log('Clicking non-center card, switching to:', index);
      setCurrentIndex(index);
    }
  };

  const getCardStyle = (index: number) => {
    const position = index - currentIndex;
    const absPosition = Math.abs(position);
    
    let scale = 1;
    let opacity = 1;
    let translateX = 0;
    let translateZ = 0;
    let rotateY = 0;
    let zIndex = 10;

    if (absPosition === 0) {
      // Center card - front and center
      scale = 1;
      opacity = 1;
      translateX = 0;
      translateZ = 100;
      rotateY = 0;
      zIndex = 50;
    } else if (absPosition === 1) {
      // Adjacent cards - rotated, overlapping
      scale = 0.85;
      opacity = 0.95;
      translateX = position > 0 ? 150 : -150;
      translateZ = -50;
      rotateY = position > 0 ? -18 : 18;
      zIndex = 40;
    } else if (absPosition === 2) {
      // Outer cards - more rotation, still visible
      scale = 0.65;
      opacity = 0.9;
      translateX = position > 0 ? 250 : -250;
      translateZ = -120;
      rotateY = position > 0 ? -28 : 28;
      zIndex = 30;
    } else {
      // Far cards - hidden
      scale = 0.5;
      opacity = 0;
      translateX = position > 0 ? 350 : -350;
      translateZ = -180;
      rotateY = position > 0 ? -35 : 35;
      zIndex = 20;
    }

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex,
      pointerEvents: (opacity > 0 ? 'auto' : 'none') as const, // 只有可见的卡片才能点击
      transformStyle: 'preserve-3d' as const
    };
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <div className="text-lime-500 text-sm font-medium tracking-widest mb-4">
          EXPLORE MORE
        </div>
        <h2 className="text-white font-bold text-5xl mb-4" style={{ fontFamily: 'Array, sans-serif' }}>
          {t.title}
        </h2>
        <p className="text-zinc-400 text-sm max-w-md mx-auto">
          {t.subtitle}
        </p>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative h-[400px] w-full max-w-6xl mx-auto px-6"
        style={{ 
          perspective: '1200px',
          perspectiveOrigin: 'center center'
        }}
      >
        <div 
          className="absolute inset-0 flex items-center justify-center" 
          style={{ transformStyle: 'preserve-3d' }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {t.cards.map((card, index) => {
            const style = getCardStyle(index);
            const isCenter = index === currentIndex;
            const Icon = card.icon;
            const colors = colorMap[card.color as keyof typeof colorMap];
            
            return (
              <div
                key={index}
                className={`absolute transition-all duration-700 ease-out`}
                style={style as React.CSSProperties}
              >
                <div 
                  className={`w-[260px] h-[360px] rounded-2xl p-6 transition-all duration-700 border cursor-pointer ${
                    isCenter 
                      ? 'bg-[rgba(26,26,26,1)] border-emerald-500/40 shadow-[0_10px_15px_rgba(0,0,0,0.3)]' 
                      : 'bg-[rgba(26,26,26,0.8)] border-zinc-800/50 hover:border-zinc-700/70'
                  }`}
                  onClick={(e) => handleCardClick(index, e)}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-all duration-700 ${
                    isCenter 
                      ? colors.bg + ' ' + colors.border
                      : 'bg-zinc-800/30 border-zinc-700/30'
                  }`}>
                    <Icon className={`w-6 h-6 transition-all duration-700 ${
                      isCenter ? colors.icon : 'text-zinc-600'
                    }`} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className={`font-semibold text-lg mb-4 leading-tight transition-all duration-700 ${
                    isCenter ? 'text-white' : 'text-zinc-500'
                  }`}>
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-6 transition-all duration-700 ${
                    isCenter ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    {card.desc}
                  </p>

                  {/* Learn More Link */}
                  <div className="absolute bottom-6 left-6">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(index, e as any);
                      }}
                      className={`inline-flex items-center gap-2 text-sm font-normal transition-all duration-300 group ${
                        isCenter 
                          ? 'text-lime-500 hover:text-lime-400' 
                          : 'text-zinc-700'
                      }`}
                    >
                      {t.learnMore}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-3 mt-16">
        {t.cards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-6 h-2 bg-lime-500'
                : 'w-2 h-2 bg-zinc-700 hover:bg-zinc-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
