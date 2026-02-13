export interface HomeTranslation {
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
  visionCards: {
    title: string;
    desc: string;
    tag: string;
  }[];
  resourcesTitle: string;
  resourcesDesc: string;
  resources: {
    title: string;
    desc: string;
  }[];
  learnMore: string;
}

export const homeTranslations: Record<string, HomeTranslation> = {
  vi: {
    badge: 'Chào Mừng Đến Tương Lai',
    hero: {
      line1: 'Trao Quyền Thương Hiệu',
      line2: 'Qua Giải Pháp Sáng Tạo',
      quote: 'Xây dựng thế giới phi tập trung kết nối liền mạch với hệ sinh thái Web4'
    },
    buttons: {
      primary: 'Sách Trắng',
      secondary: 'Liên Hệ'
    },
    stats: ['Người Dùng Hoạt Động', 'Tăng Trưởng Doanh Thu', 'Đối Tác', 'Hỗ Trợ Kỹ Thuật'],
    visionCards: [
      {
        title: 'Web4 Bản Địa Liền Mạch',
        desc: 'Đăng nhập liền mạch qua ví tiền điện tử, bảo vệ quyền riêng tư người dùng trong khi xác minh ví kỹ thuật số. Hệ thống xác thực thông minh đảm bảo truy cập an toàn.',
        tag: 'Web4'
      },
      {
        title: 'Lợi Nhuận Thực (~30%+)',
        desc: 'Đạt được lên đến 30%+ doanh thu lưu lượng qua Google AdSense. Cổ tức sáng tạo + doanh thu quảng cáo tạo lợi nhuận bền vững.',
        tag: '30%+'
      },
      {
        title: 'Hệ Sinh Thái Phi Tập Trung',
        desc: 'Xây dựng hệ sinh thái phi tập trung và trao quyền cho thành viên thông qua các mô-đun kinh doanh đa dạng.',
        tag: '∞'
      }
    ],
    resourcesTitle: 'Tài Nguyên Cốt Lõi',
    resourcesDesc: 'Khám phá nền tảng, công nghệ và cộng đồng của chúng tôi',
    resources: [
      { title: 'Sách Trắng', desc: 'Tài liệu toàn diện về tầm nhìn, công nghệ và lộ trình nền tảng của chúng tôi.' },
      { title: 'Câu Hỏi Thường Gặp', desc: 'Câu hỏi phổ biến và câu trả lời nhanh cho đối tác và thành viên cộng đồng.' },
      { title: 'Kênh Xã Hội', desc: 'Kết nối với chúng tôi qua Telegram, Twitter, Discord và YouTube.' }
    ],
    learnMore: 'Tìm Hiểu Thêm'
  },
  en: {
    badge: 'Welcome to the Future',
    hero: {
      line1: 'Empowering Brands',
      line2: 'Through Creative Solutions',
      quote: 'Building a seamlessly connected decentralized world with Web4 ecosystem'
    },
    buttons: {
      primary: 'Whitepaper',
      secondary: "Let's Talk"
    },
    stats: ['Active Users', 'Revenue Growth', 'Partners', 'Tech Support'],
    visionCards: [
      {
        title: 'Seamless Web4 Native',
        desc: 'Seamless login through crypto wallets, protecting user privacy while verifying digital wallets. Smart authentication system ensures secure access.',
        tag: 'Web4'
      },
      {
        title: 'Real Yield (~30%+)',
        desc: 'Achieve up to 30%+ traffic revenue through Google AdSense. Creative dividends + ad revenue create sustainable returns for users.',
        tag: '30%+'
      },
      {
        title: 'Decentralized Ecosystem',
        desc: 'Build a decentralized and member-empowered ecosystem through diversified business modules. Community-driven governance ensures fairness and transparency.',
        tag: '∞'
      }
    ],
    resourcesTitle: 'Core Resources',
    resourcesDesc: 'Explore our platform, technology and community',
    resources: [
      { title: 'Whitepaper', desc: 'Comprehensive documentation of our platform vision, technology and roadmap.' },
      { title: 'FAQ', desc: 'Common questions and quick answers for partners and community members.' },
      { title: 'Social Channels', desc: 'Stay connected with us via Telegram, Twitter, Discord and YouTube.' }
    ],
    learnMore: 'Learn More'
  },
  id: {
    badge: 'Selamat Datang di Masa Depan',
    hero: {
      line1: 'Memberdayakan Merek',
      line2: 'Melalui Solusi Kreatif',
      quote: 'Membangun dunia terdesentralisasi yang terhubung mulus dengan ekosistem Web4'
    },
    buttons: {
      primary: 'Whitepaper',
      secondary: 'Mari Bicara'
    },
    stats: ['Pengguna Aktif', 'Pertumbuhan Pendapatan', 'Mitra', 'Dukungan Teknis'],
    visionCards: [
      {
        title: 'Web4 Native Mulus',
        desc: 'Login mulus melalui dompet kripto, melindungi privasi pengguna sambil memverifikasi dompet digital. Sistem autentikasi pintar memastikan akses aman.',
        tag: 'Web4'
      },
      {
        title: 'Hasil Nyata (~30%+)',
        desc: 'Capai hingga 30%+ pendapatan lalu lintas melalui Google AdSense. Dividen kreatif + pendapatan iklan menciptakan pengembalian berkelanjutan.',
        tag: '30%+'
      },
      {
        title: 'Ekosistem Terdesentralisasi',
        desc: 'Bangun ekosistem terdesentralisasi dan diberdayakan anggota melalui modul bisnis yang beragam.',
        tag: '∞'
      }
    ],
    resourcesTitle: 'Sumber Daya Inti',
    resourcesDesc: 'Jelajahi platform, teknologi, dan komunitas kami',
    resources: [
      { title: 'Kertas Putih', desc: 'Dokumentasi komprehensif tentang visi, teknologi, dan roadmap platform kami.' },
      { title: 'FAQ', desc: 'Pertanyaan umum dan jawaban cepat untuk mitra dan anggota komunitas.' },
      { title: 'Saluran Sosial', desc: 'Tetap terhubung dengan kami melalui Telegram, Twitter, Discord, dan YouTube.' }
    ],
    learnMore: 'Pelajari Lebih Lanjut'
  },
  th: {
    badge: 'ยินดีต้อนรับสู่อนาคต',
    hero: {
      line1: 'เสริมพลังแบรนด์',
      line2: 'ผ่านโซลูชันสร้างสรรค์',
      quote: 'สร้างโลกแบบกระจายอำนาจที่เชื่อมต่ออย่างราบรื่นด้วยระบบนิเวศ Web4'
    },
    buttons: {
      primary: 'ไวท์เปเปอร์',
      secondary: 'มาพูดคุยกัน'
    },
    stats: ['ผู้ใช้ที่ใช้งานอยู่', 'การเติบโตของรายได้', 'พันธมิตร', 'การสนับสนุนด้านเทคนิค'],
    visionCards: [
      {
        title: 'Web4 Native ที่ราบรื่น',
        desc: 'เข้าสู่ระบบอย่างราบรื่นผ่านกระเป๋าเงินคริปโต ปกป้องความเป็นส่วนตัวของผู้ใช้ในขณะที่ตรวจสอบกระเป๋าเงินดิจิทัล ระบบการรับรองความถูกต้องอัจฉริยะรับประกันการเข้าถึงที่ปลอดภัย',
        tag: 'Web4'
      },
      {
        title: 'ผลตอบแทนจริง (~30%+)',
        desc: 'บรรลุรายได้จากการเข้าชมสูงสุด 30%+ ผ่าน Google AdSense เงินปันผลสร้างสรรค์ + รายได้จากโฆษณาสร้างผลตอบแทนที่ยั่งยืน',
        tag: '30%+'
      },
      {
        title: 'ระบบนิเวศแบบกระจายอำนาจ',
        desc: 'สร้างระบบนิเวศแบบกระจายอำนาจและเสริมพลังสมาชิกผ่านโมดูลธุรกิจที่หลากหลาย',
        tag: '∞'
      }
    ],
    resourcesTitle: 'ทรัพยากรหลัก',
    resourcesDesc: 'สำรวจแพลตฟอร์ม เทคโนโลยี และชุมชนของเรา',
    resources: [
      { title: 'เอกสารไวท์เปเปอร์', desc: 'เอกสารที่ครอบคลุมเกี่ยวกับวิสัยทัศน์ เทคโนโลยี และแผนงานของแพลตฟอร์มของเรา' },
      { title: 'คำถามที่พบบ่อย', desc: 'คำถามทั่วไปและคำตอบที่รวดเร็วสำหรับพันธมิตรและสมาชิกในชุมชน' },
      { title: 'ช่องทางโซเชียล', desc: 'เชื่อมต่อกับเราผ่าน Telegram, Twitter, Discord และ YouTube' }
    ],
    learnMore: 'เรียนรู้เพิ่มเติม'
  },
  ko: {
    badge: '미래에 오신 것을 환영합니다',
    hero: {
      line1: '브랜드 강화',
      line2: '창의적인 솔루션을 통해',
      quote: 'Web4 생태계로 원활하게 연결된 분산형 세계 구축'
    },
    buttons: {
      primary: '백서',
      secondary: '이야기하기'
    },
    stats: ['활성 사용자', '수익 증가', '파트너', '기술 지원'],
    visionCards: [
      {
        title: '원활한 Web4 네이티브',
        desc: '암호화폐 지갑을 통한 원활한 로그인으로 디지털 지갑을 검증하면서 사용자 개인정보를 보호합니다. 스마트 인증 시스템이 안전한 액세스를 보장합니다.',
        tag: 'Web4'
      },
      {
        title: '실제 수익률 (~30%+)',
        desc: 'Google AdSense를 통해 최대 30%+의 트래픽 수익 달성. 크리에이티브 배당 + 광고 수익으로 지속 가능한 수익 창출.',
        tag: '30%+'
      },
      {
        title: '분산형 생태계',
        desc: '다양한 비즈니스 모듈을 통해 분산화되고 회원이 권한을 부여받는 생태계를 구축합니다.',
        tag: '∞'
      }
    ],
    resourcesTitle: '핵심 리소스',
    resourcesDesc: '우리의 플랫폼, 기술 및 커뮤니티 탐색',
    resources: [
      { title: '백서', desc: '우리 플랫폼의 비전, 기술 및 로드맵에 대한 포괄적인 문서.' },
      { title: 'FAQ', desc: '파트너 및 커뮤니티 회원을 위한 일반적인 질문과 빠른 답변.' },
      { title: '소셜 채널', desc: 'Telegram, Twitter, Discord 및 YouTube를 통해 우리와 연결하세요.' }
    ],
    learnMore: '자세히 알아보기'
  },
  ja: {
    badge: '未来へようこそ',
    hero: {
      line1: 'ブランドを強化',
      line2: 'クリエイティブなソリューションで',
      quote: 'Web4エコシステムでシームレスに接続された分散型世界を構築'
    },
    buttons: {
      primary: 'ホワイトペーパー',
      secondary: 'お話ししましょう'
    },
    stats: ['アクティブユーザー', '収益成長', 'パートナー', 'テクニカルサポート'],
    visionCards: [
      {
        title: 'シームレスなWeb4ネイティブ',
        desc: '暗号ウォレットを介したシームレスなログイン、デジタルウォレットを検証しながらユーザーのプライバシーを保護します。スマート認証システムが安全なアクセスを保証します。',
        tag: 'Web4'
      },
      {
        title: 'リアルイールド (~30%+)',
        desc: 'Google AdSenseを通じて最大30%+のトラフィック収益を達成。クリエイティブ配当+広告収入で持続可能なリターンを創出。',
        tag: '30%+'
      },
      {
        title: '分散型エコシステム',
        desc: '多様化されたビジネスモジュールを通じて、分散化されメンバーに力を与えるエコシステムを構築します。',
        tag: '∞'
      }
    ],
    resourcesTitle: 'コアリソース',
    resourcesDesc: '当社のプラットフォーム、技術、コミュニティを探る',
    resources: [
      { title: 'ホワイトペーパー', desc: '当社のプラットフォームのビジョン、技術、ロードマップの包括的なドキュメント。' },
      { title: 'よくある質問', desc: 'パートナーとコミュニティメンバーのための一般的な質問と迅速な回答。' },
      { title: 'ソーシャルチャンネル', desc: 'Telegram、Twitter、Discord、YouTubeを通じて私たちとつながりましょう。' }
    ],
    learnMore: '詳しく見る'
  },
  zh: {
    badge: '欢迎来到未来',
    hero: {
      line1: '赋能品牌',
      line2: '创造卓越体验',
      quote: '通过 Web4 生态系统构建无缝连接的去中心化世界'
    },
    buttons: {
      primary: '白皮书',
      secondary: '项目介绍'
    },
    stats: ['活跃用户', '收益增长', '合作伙伴', '技术支持'],
    visionCards: [
      {
        title: '无缝 Web4 原生',
        desc: '通过加密钱包实现无缝登录，保护用户隐私的同时验证数字钱包。智能身份验证系统，确保安全访问。',
        tag: 'Web4'
      },
      {
        title: '真实收益 (~30%+)',
        desc: 'Google AdSense 实现高达 30%+ 的流量收益。创意分红 + 广告收入，为用户创造持续收益。',
        tag: '30%+'
      },
      {
        title: '去中心化生态系统',
        desc: '通过多样化的业务模块，构建去中心化且会员赋能的生态系统。社区驱动的治理模式，确保公平透明。',
        tag: '∞'
      }
    ],
    resourcesTitle: '核心资源',
    resourcesDesc: '深入了解我们的平台、技术和社区',
    resources: [
      { title: '白皮书', desc: '全面记录我们平台的愿景、技术和路线图。' },
      { title: '百问百答', desc: '面向合作伙伴与社区成员的常见问题与快速解答。' },
      { title: '社交渠道', desc: '通过 Telegram、Twitter、Discord 和 YouTube 与我们保持联系。' }
    ],
    learnMore: '了解更多'
  }
};
