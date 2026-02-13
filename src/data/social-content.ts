export interface SocialTranslation {
  title: string;
  subtitle: string;
  backToHome: string;
  joinCommunity: string;
  follow: string;
  subscribe: string;
  members: string;
  followers: string;
  channels: {
    telegram: {
      name: string;
      desc: string;
      link: string;
    };
    twitter: {
      name: string;
      desc: string;
      link: string;
    };
    discord: {
      name: string;
      desc: string;
      link: string;
    };
    youtube: {
      name: string;
      desc: string;
      link: string;
    };
  };
}

export const socialTranslations: Record<string, SocialTranslation> = {
  en: {
    title: 'Social Channels',
    subtitle: 'Connect with us on Telegram, Twitter, Discord, and YouTube',
    backToHome: 'Back to Home',
    joinCommunity: 'Join Community',
    follow: 'Follow',
    subscribe: 'Subscribe',
    members: 'members',
    followers: 'followers',
    channels: {
      telegram: {
        name: 'Telegram',
        desc: 'Join our official Telegram group for real-time updates and community discussions',
        link: 'Join Group'
      },
      twitter: {
        name: 'Twitter',
        desc: 'Follow us on Twitter for the latest news, announcements, and insights',
        link: 'Follow Us'
      },
      discord: {
        name: 'Discord',
        desc: 'Connect with our community on Discord for support and collaboration',
        link: 'Join Server'
      },
      youtube: {
        name: 'YouTube',
        desc: 'Subscribe to our YouTube channel for tutorials, updates, and educational content',
        link: 'Subscribe'
      }
    }
  },
  zh: {
    title: '社交渠道',
    subtitle: '通过 Telegram、Twitter、Discord 和 YouTube 与我们保持联系',
    backToHome: '返回首页',
    joinCommunity: '加入社区',
    follow: '关注',
    subscribe: '订阅',
    members: '成员',
    followers: '关注者',
    channels: {
      telegram: {
        name: 'Telegram',
        desc: '加入我们的官方 Telegram 群组，获取实时更新和社区讨论',
        link: '加入群组'
      },
      twitter: {
        name: 'Twitter',
        desc: '在 Twitter 上关注我们，获取最新资讯、公告和见解',
        link: '关注我们'
      },
      discord: {
        name: 'Discord',
        desc: '在 Discord 上与我们的社区连接，获取支持和协作',
        link: '加入服务器'
      },
      youtube: {
        name: 'YouTube',
        desc: '订阅我们的 YouTube 频道，观看教程、更新和教育内容',
        link: '订阅频道'
      }
    }
  },
  id: {
    title: 'Saluran Sosial',
    subtitle: 'Terhubung dengan kami di Telegram, Twitter, Discord, dan YouTube',
    backToHome: 'Kembali ke Beranda',
    joinCommunity: 'Gabung Komunitas',
    follow: 'Ikuti',
    subscribe: 'Berlangganan',
    members: 'anggota',
    followers: 'pengikut',
    channels: {
      telegram: {
        name: 'Telegram',
        desc: 'Bergabunglah dengan grup Telegram resmi kami untuk pembaruan real-time dan diskusi komunitas',
        link: 'Gabung Grup'
      },
      twitter: {
        name: 'Twitter',
        desc: 'Ikuti kami di Twitter untuk berita terbaru, pengumuman, dan wawasan',
        link: 'Ikuti Kami'
      },
      discord: {
        name: 'Discord',
        desc: 'Terhubung dengan komunitas kami di Discord untuk dukungan dan kolaborasi',
        link: 'Gabung Server'
      },
      youtube: {
        name: 'YouTube',
        desc: 'Berlangganan saluran YouTube kami untuk tutorial, pembaruan, dan konten edukatif',
        link: 'Berlangganan'
      }
    }
  },
  th: {
    title: 'ช่องทางโซเชียล',
    subtitle: 'เชื่อมต่อกับเราบน Telegram, Twitter, Discord และ YouTube',
    backToHome: 'กลับสู่หน้าหลัก',
    joinCommunity: 'เข้าร่วมชุมชน',
    follow: 'ติดตาม',
    subscribe: 'สมัครสมาชิก',
    members: 'สมาชิก',
    followers: 'ผู้ติดตาม',
    channels: {
      telegram: {
        name: 'Telegram',
        desc: 'เข้าร่วมกลุ่ม Telegram อย่างเป็นทางการของเราสำหรับการอัปเดตแบบเรียลไทม์และการสนทนาในชุมชน',
        link: 'เข้าร่วมกลุ่ม'
      },
      twitter: {
        name: 'Twitter',
        desc: 'ติดตามเราบน Twitter สำหรับข่าวสาร ประกาศ และข้อมูลเชิงลึกล่าสุด',
        link: 'ติดตามเรา'
      },
      discord: {
        name: 'Discord',
        desc: 'เชื่อมต่อกับชุมชนของเราบน Discord เพื่อรับการสนับสนุนและความร่วมมือ',
        link: 'เข้าร่วมเซิร์ฟเวอร์'
      },
      youtube: {
        name: 'YouTube',
        desc: 'สมัครสมาชิกช่อง YouTube ของเราสำหรับบทช่วยสอน การอัปเดต และเนื้อหาการศึกษา',
        link: 'สมัครสมาชิก'
      }
    }
  },
  vi: {
    title: 'Kênh Xã Hội',
    subtitle: 'Kết nối với chúng tôi trên Telegram, Twitter, Discord và YouTube',
    backToHome: 'Về Trang Chủ',
    joinCommunity: 'Tham Gia Cộng Đồng',
    follow: 'Theo Dõi',
    subscribe: 'Đăng Ký',
    members: 'thành viên',
    followers: 'người theo dõi',
    channels: {
      telegram: {
        name: 'Telegram',
        desc: 'Tham gia nhóm Telegram chính thức của chúng tôi để nhận cập nhật theo thời gian thực và thảo luận cộng đồng',
        link: 'Tham Gia Nhóm'
      },
      twitter: {
        name: 'Twitter',
        desc: 'Theo dõi chúng tôi trên Twitter để biết tin tức, thông báo và thông tin chi tiết mới nhất',
        link: 'Theo Dõi Chúng Tôi'
      },
      discord: {
        name: 'Discord',
        desc: 'Kết nối với cộng đồng của chúng tôi trên Discord để được hỗ trợ và cộng tác',
        link: 'Tham Gia Máy Chủ'
      },
      youtube: {
        name: 'YouTube',
        desc: 'Đăng ký kênh YouTube của chúng tôi để xem hướng dẫn, cập nhật và nội dung giáo dục',
        link: 'Đăng Ký'
      }
    }
  },
  ko: {
    title: '소셜 채널',
    subtitle: 'Telegram, Twitter, Discord 및 YouTube에서 우리와 연결하세요',
    backToHome: '홈으로',
    joinCommunity: '커뮤니티 가입',
    follow: '팔로우',
    subscribe: '구독',
    members: '멤버',
    followers: '팔로워',
    channels: {
      telegram: {
        name: 'Telegram',
        desc: '실시간 업데이트 및 커뮤니티 토론을 위해 공식 Telegram 그룹에 가입하세요',
        link: '그룹 가입'
      },
      twitter: {
        name: 'Twitter',
        desc: '최신 뉴스, 공지사항 및 인사이트를 보려면 Twitter에서 팔로우하세요',
        link: '팔로우하기'
      },
      discord: {
        name: 'Discord',
        desc: '지원 및 협업을 위해 Discord에서 커뮤니티와 연결하세요',
        link: '서버 가입'
      },
      youtube: {
        name: 'YouTube',
        desc: '튜토리얼, 업데이트 및 교육 콘텐츠를 보려면 YouTube 채널을 구독하세요',
        link: '구독하기'
      }
    }
  },
  ja: {
    title: 'ソーシャルチャンネル',
    subtitle: 'Telegram、Twitter、Discord、YouTubeで私たちとつながりましょう',
    backToHome: 'ホームに戻る',
    joinCommunity: 'コミュニティに参加',
    follow: 'フォロー',
    subscribe: '登録',
    members: 'メンバー',
    followers: 'フォロワー',
    channels: {
      telegram: {
        name: 'Telegram',
        desc: 'リアルタイムの更新とコミュニティディスカッションのために公式Telegramグループに参加してください',
        link: 'グループに参加'
      },
      twitter: {
        name: 'Twitter',
        desc: '最新ニュース、お知らせ、インサイトのためにTwitterでフォローしてください',
        link: 'フォローする'
      },
      discord: {
        name: 'Discord',
        desc: 'サポートとコラボレーションのためにDiscordでコミュニティとつながりましょう',
        link: 'サーバーに参加'
      },
      youtube: {
        name: 'YouTube',
        desc: 'チュートリアル、更新、教育コンテンツのためにYouTubeチャンネルを登録してください',
        link: '登録する'
      }
    }
  }
};

export const socialChannels = [
  {
    id: 'telegram',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    hoverBorder: 'hover:border-blue-500/50',
    stats: '50K+'
  },
  {
    id: 'twitter',
    color: 'from-sky-500 to-blue-500',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/30',
    hoverBorder: 'hover:border-sky-500/50',
    stats: '30K+'
  },
  {
    id: 'discord',
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/30',
    hoverBorder: 'hover:border-indigo-500/50',
    stats: '20K+'
  },
  {
    id: 'youtube',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    hoverBorder: 'hover:border-red-500/50',
    stats: '15K+'
  }
];
