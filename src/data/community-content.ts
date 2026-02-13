export interface CommunityTranslation {
  title: string;
  subtitle: string;
  stats: {
    label: string;
    value: string;
  }[];
  channels: {
    name: string;
    desc: string;
    members: string;
    link: string;
  }[];
  eventsTitle: string;
  events: {
    title: string;
    date: string;
    time: string;
    type: string;
  }[];
  joinBtn: string;
  registerBtn: string;
  membersLabel: string;
}

export const communityTranslations: Record<string, CommunityTranslation> = {
  zh: {
    title: '加入社区',
    subtitle: '与全球 Web4 开发者和爱好者交流',
    stats: [
      { label: '社区成员', value: '10,000+' },
      { label: '每日活跃', value: '2,500+' },
      { label: '活动举办', value: '150+' }
    ],
    channels: [
      {
        name: 'Telegram',
        desc: '即时交流和技术讨论',
        members: '8,500+',
        link: 'https://t.me/example'
      },
      {
        name: 'Discord',
        desc: '深度技术交流社区',
        members: '6,200+',
        link: 'https://discord.gg/example'
      },
      {
        name: 'Twitter',
        desc: '最新动态和公告',
        members: '12,000+',
        link: 'https://twitter.com/example'
      },
      {
        name: 'YouTube',
        desc: '教程和直播内容',
        members: '5,300+',
        link: 'https://youtube.com/example'
      }
    ],
    eventsTitle: '即将举行的活动',
    events: [
      {
        title: 'Web4 技术分享会',
        date: '2026-02-15',
        time: '19:00 UTC+8',
        type: '线上活动'
      },
      {
        title: '智能合约开发工作坊',
        date: '2026-02-22',
        time: '14:00 UTC+8',
        type: '线上活动'
      },
      {
        title: '全球 Web4 开发者大会',
        date: '2026-03-10',
        time: '09:00 UTC+8',
        type: '线下活动'
      }
    ],
    joinBtn: '加入',
    registerBtn: '报名参加',
    membersLabel: '成员'
  },
  en: {
    title: 'Join Community',
    subtitle: 'Connect with Web4 developers and enthusiasts worldwide',
    stats: [
      { label: 'Community Members', value: '10,000+' },
      { label: 'Daily Active', value: '2,500+' },
      { label: 'Events Hosted', value: '150+' }
    ],
    channels: [
      {
        name: 'Telegram',
        desc: 'Instant communication and tech discussions',
        members: '8,500+',
        link: 'https://t.me/example'
      },
      {
        name: 'Discord',
        desc: 'In-depth technical community',
        members: '6,200+',
        link: 'https://discord.gg/example'
      },
      {
        name: 'Twitter',
        desc: 'Latest updates and announcements',
        members: '12,000+',
        link: 'https://twitter.com/example'
      },
      {
        name: 'YouTube',
        desc: 'Tutorials and live content',
        members: '5,300+',
        link: 'https://youtube.com/example'
      }
    ],
    eventsTitle: 'Upcoming Events',
    events: [
      {
        title: 'Web4 Tech Sharing Session',
        date: '2026-02-15',
        time: '19:00 UTC+8',
        type: 'Online Event'
      },
      {
        title: 'Smart Contract Development Workshop',
        date: '2026-02-22',
        time: '14:00 UTC+8',
        type: 'Online Event'
      },
      {
        title: 'Global Web4 Developer Conference',
        date: '2026-03-10',
        time: '09:00 UTC+8',
        type: 'Offline Event'
      }
    ],
    joinBtn: 'Join',
    registerBtn: 'Register',
    membersLabel: 'members'
  },
  id: {
    title: 'Bergabung dengan Komunitas',
    subtitle: 'Terhubung dengan pengembang dan penggemar Web4 di seluruh dunia',
    stats: [
      { label: 'Anggota Komunitas', value: '10,000+' },
      { label: 'Aktif Harian', value: '2,500+' },
      { label: 'Acara yang Diselenggarakan', value: '150+' }
    ],
    channels: [
      {
        name: 'Telegram',
        desc: 'Komunikasi instan dan diskusi teknologi',
        members: '8,500+',
        link: 'https://t.me/example'
      },
      {
        name: 'Discord',
        desc: 'Komunitas teknis mendalam',
        members: '6,200+',
        link: 'https://discord.gg/example'
      },
      {
        name: 'Twitter',
        desc: 'Pembaruan dan pengumuman terbaru',
        members: '12,000+',
        link: 'https://twitter.com/example'
      },
      {
        name: 'YouTube',
        desc: 'Tutorial dan konten langsung',
        members: '5,300+',
        link: 'https://youtube.com/example'
      }
    ],
    eventsTitle: 'Acara Mendatang',
    events: [
      {
        title: 'Sesi Berbagi Teknologi Web4',
        date: '2026-02-15',
        time: '19:00 UTC+8',
        type: 'Acara Online'
      },
      {
        title: 'Workshop Pengembangan Smart Contract',
        date: '2026-02-22',
        time: '14:00 UTC+8',
        type: 'Acara Online'
      },
      {
        title: 'Konferensi Pengembang Web4 Global',
        date: '2026-03-10',
        time: '09:00 UTC+8',
        type: 'Acara Offline'
      }
    ],
    joinBtn: 'Gabung',
    registerBtn: 'Daftar',
    membersLabel: 'anggota'
  },
  th: {
    title: 'เข้าร่วมชุมชน',
    subtitle: 'เชื่อมต่อกับนักพัฒนาและผู้ชื่นชอบ Web4 ทั่วโลก',
    stats: [
      { label: 'สมาชิกชุมชน', value: '10,000+' },
      { label: 'ใช้งานรายวัน', value: '2,500+' },
      { label: 'กิจกรรมที่จัด', value: '150+' }
    ],
    channels: [
      {
        name: 'Telegram',
        desc: 'การสื่อสารทันทีและการสนทนาทางเทคนิค',
        members: '8,500+',
        link: 'https://t.me/example'
      },
      {
        name: 'Discord',
        desc: 'ชุมชนทางเทคนิคเชิงลึก',
        members: '6,200+',
        link: 'https://discord.gg/example'
      },
      {
        name: 'Twitter',
        desc: 'การอัปเดตและประกาศล่าสุด',
        members: '12,000+',
        link: 'https://twitter.com/example'
      },
      {
        name: 'YouTube',
        desc: 'บทช่วยสอนและเนื้อหาสด',
        members: '5,300+',
        link: 'https://youtube.com/example'
      }
    ],
    eventsTitle: 'กิจกรรมที่กำลังจะมาถึง',
    events: [
      {
        title: 'เซสชันแบ่งปันเทคโนโลยี Web4',
        date: '2026-02-15',
        time: '19:00 UTC+8',
        type: 'กิจกรรมออนไลน์'
      },
      {
        title: 'เวิร์กช็อปการพัฒนา Smart Contract',
        date: '2026-02-22',
        time: '14:00 UTC+8',
        type: 'กิจกรรมออนไลน์'
      },
      {
        title: 'การประชุมนักพัฒนา Web4 ระดับโลก',
        date: '2026-03-10',
        time: '09:00 UTC+8',
        type: 'กิจกรรมออฟไลน์'
      }
    ],
    joinBtn: 'เข้าร่วม',
    registerBtn: 'ลงทะเบียน',
    membersLabel: 'สมาชิก'
  },
  vi: {
    title: 'Tham Gia Cộng Đồng',
    subtitle: 'Kết nối với các nhà phát triển và người đam mê Web4 trên toàn thế giới',
    stats: [
      { label: 'Thành Viên Cộng Đồng', value: '10,000+' },
      { label: 'Hoạt Động Hàng Ngày', value: '2,500+' },
      { label: 'Sự Kiện Đã Tổ Chức', value: '150+' }
    ],
    channels: [
      {
        name: 'Telegram',
        desc: 'Giao tiếp tức thì và thảo luận kỹ thuật',
        members: '8,500+',
        link: 'https://t.me/example'
      },
      {
        name: 'Discord',
        desc: 'Cộng đồng kỹ thuật chuyên sâu',
        members: '6,200+',
        link: 'https://discord.gg/example'
      },
      {
        name: 'Twitter',
        desc: 'Cập nhật và thông báo mới nhất',
        members: '12,000+',
        link: 'https://twitter.com/example'
      },
      {
        name: 'YouTube',
        desc: 'Hướng dẫn và nội dung trực tiếp',
        members: '5,300+',
        link: 'https://youtube.com/example'
      }
    ],
    eventsTitle: 'Sự Kiện Sắp Tới',
    events: [
      {
        title: 'Buổi Chia Sẻ Công Nghệ Web4',
        date: '2026-02-15',
        time: '19:00 UTC+8',
        type: 'Sự Kiện Trực Tuyến'
      },
      {
        title: 'Workshop Phát Triển Hợp Đồng Thông Minh',
        date: '2026-02-22',
        time: '14:00 UTC+8',
        type: 'Sự Kiện Trực Tuyến'
      },
      {
        title: 'Hội Nghị Nhà Phát Triển Web4 Toàn Cầu',
        date: '2026-03-10',
        time: '09:00 UTC+8',
        type: 'Sự Kiện Ngoại Tuyến'
      }
    ],
    joinBtn: 'Tham Gia',
    registerBtn: 'Đăng Ký',
    membersLabel: 'thành viên'
  },
  ko: {
    title: '커뮤니티 가입',
    subtitle: '전 세계 Web4 개발자 및 애호가와 연결',
    stats: [
      { label: '커뮤니티 회원', value: '10,000+' },
      { label: '일일 활성', value: '2,500+' },
      { label: '개최된 이벤트', value: '150+' }
    ],
    channels: [
      {
        name: 'Telegram',
        desc: '즉각적인 커뮤니케이션 및 기술 토론',
        members: '8,500+',
        link: 'https://t.me/example'
      },
      {
        name: 'Discord',
        desc: '심층 기술 커뮤니티',
        members: '6,200+',
        link: 'https://discord.gg/example'
      },
      {
        name: 'Twitter',
        desc: '최신 업데이트 및 공지사항',
        members: '12,000+',
        link: 'https://twitter.com/example'
      },
      {
        name: 'YouTube',
        desc: '튜토리얼 및 라이브 콘텐츠',
        members: '5,300+',
        link: 'https://youtube.com/example'
      }
    ],
    eventsTitle: '다가오는 이벤트',
    events: [
      {
        title: 'Web4 기술 공유 세션',
        date: '2026-02-15',
        time: '19:00 UTC+8',
        type: '온라인 이벤트'
      },
      {
        title: '스마트 계약 개발 워크샵',
        date: '2026-02-22',
        time: '14:00 UTC+8',
        type: '온라인 이벤트'
      },
      {
        title: '글로벌 Web4 개발자 컨퍼런스',
        date: '2026-03-10',
        time: '09:00 UTC+8',
        type: '오프라인 이벤트'
      }
    ],
    joinBtn: '가입',
    registerBtn: '등록',
    membersLabel: '멤버'
  },
  ja: {
    title: 'コミュニティに参加',
    subtitle: '世界中のWeb4開発者と愛好家とつながる',
    stats: [
      { label: 'コミュニティメンバー', value: '10,000+' },
      { label: '毎日のアクティブ', value: '2,500+' },
      { label: '開催されたイベント', value: '150+' }
    ],
    channels: [
      {
        name: 'Telegram',
        desc: '即座のコミュニケーションと技術的な議論',
        members: '8,500+',
        link: 'https://t.me/example'
      },
      {
        name: 'Discord',
        desc: '深い技術コミュニティ',
        members: '6,200+',
        link: 'https://discord.gg/example'
      },
      {
        name: 'Twitter',
        desc: '最新の更新とお知らせ',
        members: '12,000+',
        link: 'https://twitter.com/example'
      },
      {
        name: 'YouTube',
        desc: 'チュートリアルとライブコンテンツ',
        members: '5,300+',
        link: 'https://youtube.com/example'
      }
    ],
    eventsTitle: '今後のイベント',
    events: [
      {
        title: 'Web4技術共有セッション',
        date: '2026-02-15',
        time: '19:00 UTC+8',
        type: 'オンラインイベント'
      },
      {
        title: 'スマートコントラクト開発ワークショップ',
        date: '2026-02-22',
        time: '14:00 UTC+8',
        type: 'オンラインイベント'
      },
      {
        title: 'グローバルWeb4開発者会議',
        date: '2026-03-10',
        time: '09:00 UTC+8',
        type: 'オフラインイベント'
      }
    ],
    joinBtn: '参加',
    registerBtn: '登録',
    membersLabel: 'メンバー'
  }
};
