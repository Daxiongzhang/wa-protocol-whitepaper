export interface ToolsTranslation {
  title: string;
  subtitle: string;
  tools: {
    name: string;
    desc: string;
    icon: string;
  }[];
  calculatorTitle: string;
  investmentLabel: string;
  periodLabel: string;
  rateLabel: string;
  calculateBtn: string;
  resultLabel: string;
  totalLabel: string;
  underDevelopment: string;
}

export const toolsTranslations: Record<string, ToolsTranslation> = {
  zh: {
    title: '开发工具',
    subtitle: '强大的工具助力您的 Web4 开发',
    tools: [
      { name: 'ROI 计算器', desc: '计算您的投资回报率', icon: 'calculator' },
      { name: '智能合约生成器', desc: '快速生成安全的智能合约', icon: 'code' },
      { name: 'Gas 费用优化器', desc: '优化交易手续费', icon: 'zap' },
      { name: '收益分析器', desc: '分析和预测收益趋势', icon: 'trending' },
    ],
    calculatorTitle: 'ROI 计算器',
    investmentLabel: '投资金额',
    periodLabel: '投资周期（月）',
    rateLabel: '预期年化收益率 (%)',
    calculateBtn: '计算',
    resultLabel: '预期收益',
    totalLabel: '总计',
    underDevelopment: '该工具正在开发中...'
  },
  en: {
    title: 'Development Tools',
    subtitle: 'Powerful tools to boost your Web4 development',
    tools: [
      { name: 'ROI Calculator', desc: 'Calculate your return on investment', icon: 'calculator' },
      { name: 'Smart Contract Generator', desc: 'Quickly generate secure smart contracts', icon: 'code' },
      { name: 'Gas Fee Optimizer', desc: 'Optimize transaction fees', icon: 'zap' },
      { name: 'Yield Analyzer', desc: 'Analyze and predict yield trends', icon: 'trending' },
    ],
    calculatorTitle: 'ROI Calculator',
    investmentLabel: 'Investment Amount',
    periodLabel: 'Investment Period (months)',
    rateLabel: 'Expected Annual Yield (%)',
    calculateBtn: 'Calculate',
    resultLabel: 'Expected Return',
    totalLabel: 'Total',
    underDevelopment: 'This tool is under development...'
  },
  id: {
    title: 'Alat Pengembangan',
    subtitle: 'Alat yang kuat untuk meningkatkan pengembangan Web4 Anda',
    tools: [
      { name: 'Kalkulator ROI', desc: 'Hitung pengembalian investasi Anda', icon: 'calculator' },
      { name: 'Generator Kontrak Pintar', desc: 'Buat kontrak pintar yang aman dengan cepat', icon: 'code' },
      { name: 'Pengoptimal Biaya Gas', desc: 'Optimalkan biaya transaksi', icon: 'zap' },
      { name: 'Penganalisis Hasil', desc: 'Analisis dan prediksi tren hasil', icon: 'trending' },
    ],
    calculatorTitle: 'Kalkulator ROI',
    investmentLabel: 'Jumlah Investasi',
    periodLabel: 'Periode Investasi (bulan)',
    rateLabel: 'Hasil Tahunan yang Diharapkan (%)',
    calculateBtn: 'Hitung',
    resultLabel: 'Pengembalian yang Diharapkan',
    totalLabel: 'Total',
    underDevelopment: 'Alat ini sedang dalam pengembangan...'
  },
  th: {
    title: 'เครื่องมือพัฒนา',
    subtitle: 'เครื่องมือที่มีประสิทธิภาพเพื่อเพิ่มการพัฒนา Web4 ของคุณ',
    tools: [
      { name: 'เครื่องคำนวณ ROI', desc: 'คำนวณผลตอบแทนจากการลงทุนของคุณ', icon: 'calculator' },
      { name: 'ตัวสร้างสัญญาอัจฉริยะ', desc: 'สร้างสัญญาอัจฉริยะที่ปลอดภัยอย่างรวดเร็ว', icon: 'code' },
      { name: 'ตัวเพิ่มประสิทธิภาพค่าธรรมเนียม Gas', desc: 'เพิ่มประสิทธิภาพค่าธรรมเนียมการทำธุรกรรม', icon: 'zap' },
      { name: 'ตัววิเคราะห์ผลตอบแทน', desc: 'วิเคราะห์และคาดการณ์แนวโน้มผลตอบแทน', icon: 'trending' },
    ],
    calculatorTitle: 'เครื่องคำนวณ ROI',
    investmentLabel: 'จำนวนเงินลงทุน',
    periodLabel: 'ระยะเวลาการลงทุน (เดือน)',
    rateLabel: 'ผลตอบแทนรายปีที่คาดหวัง (%)',
    calculateBtn: 'คำนวณ',
    resultLabel: 'ผลตอบแทนที่คาดหวัง',
    totalLabel: 'รวม',
    underDevelopment: 'เครื่องมือนี้อยู่ระหว่างการพัฒนา...'
  },
  vi: {
    title: 'Công Cụ Phát Triển',
    subtitle: 'Công cụ mạnh mẽ để thúc đẩy phát triển Web4 của bạn',
    tools: [
      { name: 'Máy Tính ROI', desc: 'Tính toán lợi nhuận đầu tư của bạn', icon: 'calculator' },
      { name: 'Trình Tạo Hợp Đồng Thông Minh', desc: 'Tạo hợp đồng thông minh an toàn nhanh chóng', icon: 'code' },
      { name: 'Trình Tối Ưu Phí Gas', desc: 'Tối ưu hóa phí giao dịch', icon: 'zap' },
      { name: 'Trình Phân Tích Lợi Nhuận', desc: 'Phân tích và dự đoán xu hướng lợi nhuận', icon: 'trending' },
    ],
    calculatorTitle: 'Máy Tính ROI',
    investmentLabel: 'Số Tiền Đầu Tư',
    periodLabel: 'Thời Gian Đầu Tư (tháng)',
    rateLabel: 'Lợi Nhuận Hàng Năm Dự Kiến (%)',
    calculateBtn: 'Tính Toán',
    resultLabel: 'Lợi Nhuận Dự Kiến',
    totalLabel: 'Tổng Cộng',
    underDevelopment: 'Công cụ này đang được phát triển...'
  },
  ko: {
    title: '개발 도구',
    subtitle: 'Web4 개발을 강화하는 강력한 도구',
    tools: [
      { name: 'ROI 계산기', desc: '투자 수익률 계산', icon: 'calculator' },
      { name: '스마트 계약 생성기', desc: '안전한 스마트 계약을 빠르게 생성', icon: 'code' },
      { name: 'Gas 수수료 최적화 도구', desc: '거래 수수료 최적화', icon: 'zap' },
      { name: '수익 분석기', desc: '수익 추세 분석 및 예측', icon: 'trending' },
    ],
    calculatorTitle: 'ROI 계산기',
    investmentLabel: '투자 금액',
    periodLabel: '투자 기간 (개월)',
    rateLabel: '예상 연간 수익률 (%)',
    calculateBtn: '계산',
    resultLabel: '예상 수익',
    totalLabel: '합계',
    underDevelopment: '이 도구는 개발 중입니다...'
  },
  ja: {
    title: '開発ツール',
    subtitle: 'Web4開発を強化する強力なツール',
    tools: [
      { name: 'ROI計算機', desc: '投資収益率を計算', icon: 'calculator' },
      { name: 'スマートコントラクトジェネレーター', desc: '安全なスマートコントラクトを迅速に生成', icon: 'code' },
      { name: 'Gas手数料最適化ツール', desc: '取引手数料を最適化', icon: 'zap' },
      { name: '収益アナライザー', desc: '収益トレンドを分析・予測', icon: 'trending' },
    ],
    calculatorTitle: 'ROI計算機',
    investmentLabel: '投資額',
    periodLabel: '投資期間（月）',
    rateLabel: '予想年間利回り (%)',
    calculateBtn: '計算',
    resultLabel: '予想収益',
    totalLabel: '合計',
    underDevelopment: 'このツールは開発中です...'
  }
};
