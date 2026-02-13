export interface FooterTranslation {
  about: string;
  aboutDesc: string;
  quickLinks: string;
  links: string[];
  contact: string;
  legal: string;
  legalLinks: string[];
  copyright: string;
}

export const footerTranslations: Record<string, FooterTranslation> = {
  vi: {
    about: 'Về Chúng Tôi',
    aboutDesc: 'Chúng tôi cam kết xây dựng hệ sinh thái Web4 phi tập trung, cung cấp trải nghiệm kỹ thuật số an toàn, hiệu quả và thông minh cho người dùng',
    quickLinks: 'Liên Kết Nhanh',
    links: ['Trang Chủ', 'Tài Nguyên', 'Công Cụ', 'Cộng Đồng'],
    contact: 'Liên Hệ',
    legal: 'Pháp Lý',
    legalLinks: ['Chính Sách Bảo Mật', 'Điều Khoản Dịch Vụ', 'Chính Sách Cookie'],
    copyright: '© 2026 W/A Trung Tâm Tài Nguyên. Đã đăng ký bản quyền'
  },
  en: {
    about: 'About Us',
    aboutDesc: 'We are committed to building a decentralized Web4 ecosystem, providing users with secure, efficient, and intelligent digital experiences',
    quickLinks: 'Quick Links',
    links: ['Home', 'Resources', 'Tools', 'Community'],
    contact: 'Contact Us',
    legal: 'Legal',
    legalLinks: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
    copyright: '© 2026 W/A Resource Hub. All rights reserved'
  },
  id: {
    about: 'Tentang Kami',
    aboutDesc: 'Kami berkomitmen untuk membangun ekosistem Web4 terdesentralisasi, memberikan pengguna pengalaman digital yang aman, efisien, dan cerdas',
    quickLinks: 'Tautan Cepat',
    links: ['Beranda', 'Sumber Daya', 'Alat', 'Komunitas'],
    contact: 'Hubungi Kami',
    legal: 'Hukum',
    legalLinks: ['Kebijakan Privasi', 'Ketentuan Layanan', 'Kebijakan Cookie'],
    copyright: '© 2026 W/A Pusat Sumber Daya. Hak cipta dilindungi'
  },
  th: {
    about: 'เกี่ยวกับเรา',
    aboutDesc: 'เรามุ่งมั่นในการสร้างระบบนิเวศ Web4 แบบกระจายอำนาจ มอบประสบการณ์ดิจิทัลที่ปลอดภัย มีประสิทธิภาพ และชาญฉลาดให้กับผู้ใช้',
    quickLinks: 'ลิงก์ด่วน',
    links: ['หน้าหลัก', 'ทรัพยากร', 'เครื่องมือ', 'ชุมชน'],
    contact: 'ติดต่อเรา',
    legal: 'ข้อกฎหมาย',
    legalLinks: ['นโยบายความเป็นส่วนตัว', 'ข้อกำหนดการใช้บริการ', 'นโยบายคุกกี้'],
    copyright: '© 2026 W/A ศูนย์ทรัพยากร. สงวนลิขสิทธิ์'
  },
  ko: {
    about: '회사 소개',
    aboutDesc: '우리는 분산형 Web4 생태계를 구축하여 사용자에게 안전하고 효율적이며 지능적인 디지털 경험을 제공하는 데 전념하고 있습니다',
    quickLinks: '빠른 링크',
    links: ['홈', '리소스', '도구', '커뮤니티'],
    contact: '문의하기',
    legal: '법적 정보',
    legalLinks: ['개인정보 보호정책', '서비스 약관', '쿠키 정책'],
    copyright: '© 2026 W/A 리소스 허브. All rights reserved'
  },
  ja: {
    about: '私たちについて',
    aboutDesc: '分散型Web4エコシステムの構築に取り組み、ユーザーに安全で効率的でインテリジェントなデジタル体験を提供します',
    quickLinks: 'クイックリンク',
    links: ['ホーム', 'リソース', 'ツール', 'コミュニティ'],
    contact: 'お問い合わせ',
    legal: '法的情報',
    legalLinks: ['プライバシーポリシー', '利用規約', 'Cookieポリシー'],
    copyright: '© 2026 W/A リソースハブ. All rights reserved'
  },
  zh: {
    about: '关于我们',
    aboutDesc: '我们致力于构建去中心化的 Web4 生态系统，为用户提供安全、高效、智能的数字体验',
    quickLinks: '快速链接',
    links: ['首页', '资料库', '工具', '社区'],
    contact: '联系我们',
    legal: '法律信息',
    legalLinks: ['隐私政策', '服务条款', 'Cookie 政策'],
    copyright: '© 2026 W/A 中文资料库. 保留所有权利'
  }
};
