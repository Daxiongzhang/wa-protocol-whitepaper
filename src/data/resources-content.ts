export interface ResourcesTranslation {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  categories: string[];
  resources: {
    title: string;
    desc: string;
    category: string;
    views: number;
    downloads: number;
  }[];
  viewsLabel: string;
  downloadsLabel: string;
  downloadBtn: string;
  viewBtn: string;
}

export const resourcesTranslations: Record<string, ResourcesTranslation> = {
  zh: {
    title: '资料库',
    subtitle: '探索我们的知识库和文档',
    searchPlaceholder: '搜索资料...',
    categories: ['全部', '白皮书', '技术文档', '教程', '宣发资料'],
    resources: [
      { title: 'Web4 技术白皮书', desc: '详细介绍 Web4 的核心技术和架构', category: '白皮书', views: 1234, downloads: 567 },
      { title: '智能合约开发指南', desc: '从入门到精通的完整教程', category: '教程', views: 2341, downloads: 892 },
      { title: 'DeFi 生态系统分析', desc: '深入分析去中心化金融的现状和未来', category: '宣发资料', views: 987, downloads: 345 },
      { title: 'API 技术文档', desc: '完整的 API 接口说明和示例代码', category: '技术文档', views: 3456, downloads: 1234 },
      { title: '安全最佳实践', desc: 'Web4 应用安全开发指南', category: '技术文档', views: 1567, downloads: 678 },
      { title: '成功案例：DApp 开发', desc: '真实项目的开发经验分享', category: '宣发资料', views: 2109, downloads: 789 },
    ],
    viewsLabel: '浏览',
    downloadsLabel: '下载',
    downloadBtn: '下载',
    viewBtn: '查看'
  },
  en: {
    title: 'Resources',
    subtitle: 'Explore our knowledge base and documentation',
    searchPlaceholder: 'Search resources...',
    categories: ['All', 'Whitepaper', 'Technical Docs', 'Tutorials', 'Marketing Materials'],
    resources: [
      { title: 'Web4 Technical Whitepaper', desc: 'Detailed introduction to Web4 core technology and architecture', category: 'Whitepaper', views: 1234, downloads: 567 },
      { title: 'Smart Contract Development Guide', desc: 'Complete tutorial from beginner to advanced', category: 'Tutorials', views: 2341, downloads: 892 },
      { title: 'DeFi Ecosystem Analysis', desc: 'In-depth analysis of the present and future of decentralized finance', category: 'Marketing Materials', views: 987, downloads: 345 },
      { title: 'API Technical Documentation', desc: 'Complete API interface instructions and sample code', category: 'Technical Docs', views: 3456, downloads: 1234 },
      { title: 'Security Best Practices', desc: 'Web4 application security development guide', category: 'Technical Docs', views: 1567, downloads: 678 },
      { title: 'Success Story: DApp Development', desc: 'Real project development experience sharing', category: 'Marketing Materials', views: 2109, downloads: 789 },
    ],
    viewsLabel: 'views',
    downloadsLabel: 'downloads',
    downloadBtn: 'Download',
    viewBtn: 'View'
  },
  id: {
    title: 'Sumber Daya',
    subtitle: 'Jelajahi basis pengetahuan dan dokumentasi kami',
    searchPlaceholder: 'Cari sumber daya...',
    categories: ['Semua', 'Whitepaper', 'Dokumen Teknis', 'Tutorial', 'Materi Promosi'],
    resources: [
      { title: 'Whitepaper Teknis Web4', desc: 'Pengenalan rinci tentang teknologi inti dan arsitektur Web4', category: 'Whitepaper', views: 1234, downloads: 567 },
      { title: 'Panduan Pengembangan Smart Contract', desc: 'Tutorial lengkap dari pemula hingga mahir', category: 'Tutorial', views: 2341, downloads: 892 },
      { title: 'Analisis Ekosistem DeFi', desc: 'Analisis mendalam tentang masa kini dan masa depan keuangan terdesentralisasi', category: 'Materi Promosi', views: 987, downloads: 345 },
      { title: 'Dokumentasi Teknis API', desc: 'Instruksi lengkap antarmuka API dan kode contoh', category: 'Dokumen Teknis', views: 3456, downloads: 1234 },
      { title: 'Praktik Terbaik Keamanan', desc: 'Panduan pengembangan keamanan aplikasi Web4', category: 'Dokumen Teknis', views: 1567, downloads: 678 },
      { title: 'Kisah Sukses: Pengembangan DApp', desc: 'Berbagi pengalaman pengembangan proyek nyata', category: 'Materi Promosi', views: 2109, downloads: 789 },
    ],
    viewsLabel: 'tayangan',
    downloadsLabel: 'unduhan',
    downloadBtn: 'Unduh',
    viewBtn: 'Lihat'
  },
  th: {
    title: 'ทรัพยากร',
    subtitle: 'สำรวจฐานความรู้และเอกสารของเรา',
    searchPlaceholder: 'ค้นหาทรัพยากร...',
    categories: ['ทั้งหมด', 'ไวท์เปเปอร์', 'เอกสารทางเทคนิค', 'บทเรียน', 'เอกสารประชาสัมพันธ์'],
    resources: [
      { title: 'ไวท์เปเปอร์ทางเทคนิคของ Web4', desc: 'แนะนำเทคโนโลยีหลักและสถาปัตยกรรมของ Web4 โดยละเอียด', category: 'ไวท์เปเปอร์', views: 1234, downloads: 567 },
      { title: 'คู่มือการพัฒนา Smart Contract', desc: 'บทเรียนที่สมบูรณ์ตั้งแต่เริ่มต้นจนถึงขั้นสูง', category: 'บทเรียน', views: 2341, downloads: 892 },
      { title: 'การวิเคราะห์ระบบนิเวศ DeFi', desc: 'การวิเคราะห์เชิงลึกเกี่ยวกับปัจจุบันและอนาคตของการเงินแบบกระจายอำนาจ', category: 'เอกสารประชาสัมพันธ์', views: 987, downloads: 345 },
      { title: 'เอกสารทางเทคนิค API', desc: 'คำแนะนำอินเทอร์เฟซ API ที่สมบูรณ์และโค้ดตัวอย่าง', category: 'เอกสารทางเทคนิค', views: 3456, downloads: 1234 },
      { title: 'แนวทางปฏิบัติที่ดีที่สุดด้านความปลอดภัย', desc: 'คู่มือการพัฒนาความปลอดภัยของแอปพลิเคชัน Web4', category: 'เอกสารทางเทคนิค', views: 1567, downloads: 678 },
      { title: 'เรื่องราวความสำเร็จ: การพัฒนา DApp', desc: 'แบ่งปันประสบการณ์การพัฒนาโครงการจริง', category: 'เอกสารประชาสัมพันธ์', views: 2109, downloads: 789 },
    ],
    viewsLabel: 'การดู',
    downloadsLabel: 'ดาวน์โหลด',
    downloadBtn: 'ดาวน์โหลด',
    viewBtn: 'ดู'
  },
  vi: {
    title: 'Tài Nguyên',
    subtitle: 'Khám phá cơ sở kiến thức và tài liệu của chúng tôi',
    searchPlaceholder: 'Tìm kiếm tài nguyên...',
    categories: ['Tất Cả', 'Sách Trắng', 'Tài Liệu Kỹ Thuật', 'Hướng Dẫn', 'Tài Liệu Quảng Bá'],
    resources: [
      { title: 'Sách Trắng Kỹ Thuật Web4', desc: 'Giới thiệu chi tiết về công nghệ cốt lõi và kiến trúc của Web4', category: 'Sách Trắng', views: 1234, downloads: 567 },
      { title: 'Hướng Dẫn Phát Triển Hợp Đồng Thông Minh', desc: 'Hướng dẫn đầy đủ từ người mới bắt đầu đến nâng cao', category: 'Hướng Dẫn', views: 2341, downloads: 892 },
      { title: 'Phân Tích Hệ Sinh Thái DeFi', desc: 'Phân tích sâu về hiện tại và tương lai của tài chính phi tập trung', category: 'Tài Liệu Quảng Bá', views: 987, downloads: 345 },
      { title: 'Tài Liệu Kỹ Thuật API', desc: 'Hướng dẫn giao diện API đầy đủ và mã nguồn mẫu', category: 'Tài Liệu Kỹ Thuật', views: 3456, downloads: 1234 },
      { title: 'Thực Hành Tốt Nhất Về Bảo Mật', desc: 'Hướng dẫn phát triển bảo mật ứng dụng Web4', category: 'Tài Liệu Kỹ Thuật', views: 1567, downloads: 678 },
      { title: 'Câu Chuyện Thành Công: Phát Triển DApp', desc: 'Chia sẻ kinh nghiệm phát triển dự án thực tế', category: 'Tài Liệu Quảng Bá', views: 2109, downloads: 789 },
    ],
    viewsLabel: 'lượt xem',
    downloadsLabel: 'tải xuống',
    downloadBtn: 'Tải Xuống',
    viewBtn: 'Xem'
  },
  ko: {
    title: '리소스',
    subtitle: '지식 베이스와 문서를 탐색하세요',
    searchPlaceholder: '리소스 검색...',
    categories: ['전체', '백서', '기술 문서', '튜토리얼', '홍보 자료'],
    resources: [
      { title: 'Web4 기술 백서', desc: 'Web4의 핵심 기술과 아키텍처에 대한 상세한 소개', category: '백서', views: 1234, downloads: 567 },
      { title: '스마트 계약 개발 가이드', desc: '초보자부터 고급까지 완전한 튜토리얼', category: '튜토리얼', views: 2341, downloads: 892 },
      { title: 'DeFi 생태계 분석', desc: '탈중앙화 금융의 현재와 미래에 대한 심층 분석', category: '홍보 자료', views: 987, downloads: 345 },
      { title: 'API 기술 문서', desc: '완전한 API 인터페이스 지침 및 샘플 코드', category: '기술 문서', views: 3456, downloads: 1234 },
      { title: '보안 모범 사례', desc: 'Web4 애플리케이션 보안 개발 가이드', category: '기술 문서', views: 1567, downloads: 678 },
      { title: '성공 사례: DApp 개발', desc: '실제 프로젝트 개발 경험 공유', category: '홍보 자료', views: 2109, downloads: 789 },
    ],
    viewsLabel: '조회',
    downloadsLabel: '다운로드',
    downloadBtn: '다운로드',
    viewBtn: '보기'
  },
  ja: {
    title: 'リソース',
    subtitle: 'ナレッジベースとドキュメントを探索',
    searchPlaceholder: 'リソースを検索...',
    categories: ['すべて', 'ホワイトペーパー', '技術文書', 'チュートリアル', '広報資料'],
    resources: [
      { title: 'Web4技術ホワイトペーパー', desc: 'Web4のコア技術とアーキテクチャの詳細な紹介', category: 'ホワイトペーパー', views: 1234, downloads: 567 },
      { title: 'スマートコントラクト開発ガイド', desc: '初心者から上級者まで完全なチュートリアル', category: 'チュートリアル', views: 2341, downloads: 892 },
      { title: 'DeFiエコシステム分析', desc: '分散型金融の現在と未来の詳細な分析', category: '広報資料', views: 987, downloads: 345 },
      { title: 'API技術文書', desc: '完全なAPIインターフェース説明とサンプルコード', category: '技術文書', views: 3456, downloads: 1234 },
      { title: 'セキュリティのベストプラクティス', desc: 'Web4アプリケーションセキュリティ開発ガイド', category: '技術文書', views: 1567, downloads: 678 },
      { title: '成功事例：DApp開発', desc: '実際のプロジェクト開発経験の共有', category: '広報資料', views: 2109, downloads: 789 },
    ],
    viewsLabel: '閲覧',
    downloadsLabel: 'ダウンロード',
    downloadBtn: 'ダウンロード',
    viewBtn: '表示'
  }
};
