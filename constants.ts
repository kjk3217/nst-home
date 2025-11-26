import { AlertTriangle, ShieldCheck, Zap, Phone, Search, SprayCan, Sparkles, Layers, Building2, CheckCircle2 } from 'lucide-react';
import { NavItem, StatItem, StepItem, PortfolioItem, FeatureItem, ProcessStep, FaqItem, HistoryItem, ReasonItem, BranchRegion } from './types';

// =================================================================
// ASSET MANAGEMENT
// Replace these URLs with your local assets in the public folder
// =================================================================

export const ASSETS = {
  heroBg: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  mascot: "https://picsum.photos/id/10/400/500", // Replace with the Blue Bird mascot
  awards: "https://picsum.photos/id/106/800/600",
  videoThumb: "https://picsum.photos/id/20/800/450",
  
  // Method Steps
  step1: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
  step2: "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?auto=format&fit=crop&w=600&q=80",
  step3: "https://images.unsplash.com/photo-1581092921461-eab62e97a783?auto=format&fit=crop&w=600&q=80",

  // Portfolio
  port1: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80",
  port2: "https://images.unsplash.com/photo-1556912173-3db996349126?auto=format&fit=crop&w=600&q=80",
  port3: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
  port4: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=600&q=80",
  port5: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
  port6: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=600&q=80",

  // Reason Backgrounds
  reason1: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80", // Lab/Science
  reason2: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80", // Building
  reason3: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80", // Worker
};

export const VIDEO_ID = "dQw4w9WgXcQ"; // Replace with your actual YouTube Video ID

export const NAV_ITEMS: NavItem[] = [
  { label: 'NST 공법 소개', href: '#method' },
  { label: '시공 절차', href: '#process' },
  { label: '회사 소개', href: '#about' },
  { label: '시공 실적', href: '#portfolio' },
  { label: '상담 문의', href: '#contact' },
];

export const STATS: StatItem[] = [
  { value: '1,018+', label: 'COMPLEXES', subLabel: '대형 건설사 시공 완료' },
  { value: '50+', label: 'TEAMS', subLabel: 'NST 공법 전문 시공' },
  { value: '20', label: 'YEARS', subLabel: '축적된 현장 노하우' },
];

export const PROBLEMS: FeatureItem[] = [
  {
    title: '지속적인 유해물질 방출',
    description: '건축 자재 및 가구 내부에서 폼알데하이드와 VOCs가 수년간 지속적으로 방출되어 건강을 위협합니다.',
    icon: Zap,
  },
  {
    title: '새집증후군 주요 증상',
    description: '두통, 눈 따가움, 피부 가려움(아토피), 호흡기 질환 등 다양한 신체 이상 증상을 유발할 수 있습니다.',
    icon: AlertTriangle,
  },
  {
    title: '면역력이 약한 가족에게 치명적',
    description: '면역 체계가 완성되지 않은 영유아나 노약자에게는 실내 공기 오염이 더욱 치명적일 수 있습니다.',
    icon: ShieldCheck,
  },
];

export const STEPS: StepItem[] = [
  {
    step: '01',
    title: 'Decomposition 유해물질 분해/제거',
    subTitle: 'NST-S100',
    description: '가시광촉매 기술로 빛이 있는 곳과 없는 곳 모두에서 유해물질을 지속적으로 분해 및 흡착 제거합니다.',
    image: ASSETS.step1,
  },
  {
    step: '02',
    title: 'Blocking 유해물질 침투/차단',
    subTitle: 'NST-S200',
    description: '가구 및 목재 내부 기공 깊숙이 침투하여 유해물질을 밀어내고 방출을 원천 차단합니다.',
    image: ASSETS.step2,
  },
  {
    step: '03',
    title: 'Adsorption 흡착/탈취/살균 케어',
    subTitle: 'NST-F100',
    description: '시공 취약 공간까지 케어하며, 은은한 숲속 향기와 함께 잔류 유해물질을 흡착하여 제거합니다.',
    image: ASSETS.step3,
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, category: 'Seoul', image: ASSETS.port1, title: '서울 반포 래미안' },
  { id: 2, category: 'Busan', image: ASSETS.port2, title: '부산 해운대 아이파크' },
  { id: 3, category: 'Incheon', image: ASSETS.port3, title: '인천 송도 더샵' },
  { id: 4, category: 'Seoul', image: ASSETS.port4, title: '서울 한남 더힐' },
  { id: 5, category: 'Seoul', image: ASSETS.port5, title: '강남 시그니엘' },
  { id: 6, category: 'Busan', image: ASSETS.port6, title: '부산 LCT' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { step: 1, title: '상담 및 예약', desc: '전화 또는 온라인', icon: Phone },
  { step: 2, title: '현장 정밀 진단', desc: '오염도 측정', icon: Search },
  { step: 3, title: 'NST 맞춤 시공', desc: '3단계 공법 적용', icon: SprayCan },
  { step: 4, title: '시공 완료', desc: '사후 관리 안내', icon: Sparkles },
];

export const FAQS: FaqItem[] = [
  { q: '언제 시공하는 게 좋나요?', a: '입주 청소 후, 이사 들어가기 2-3일 전에 시공하는 것이 가장 효과적입니다. 시공 후 충분한 환기와 건조 시간이 필요하기 때문입니다.' },
  { q: '시공 시간은 얼마나 걸리나요?', a: '30평대 기준으로 약 4~5시간 정도 소요됩니다. 현장 상황과 오염도에 따라 다소 차이가 있을 수 있습니다.' },
  { q: '아이에게 안전한가요?', a: '네, NST 공법은 인체에 무해한 천연 유래 성분과 친환경 광촉매를 사용합니다. 환경부 안전 기준을 모두 통과한 안전한 제품입니다.' },
];

export const HISTORY: HistoryItem[] = [
  { year: '2025', title: '기업부설연구소 설립 / 대한민국 환경대상', desc: '환경부 후원 2025 대한민국 환경대상 수상 및 연구소 설립 완료' },
  { year: '2021', title: "'에어그린' 상표 등록", desc: '자체 브랜드 가치 제고 및 상표권 확보' },
  { year: '2011', title: 'NST 핵심 기술 특허 등록', desc: 'NST-S100(가시광촉매) 및 S200(차단재) 특허 기술 획득' },
  { year: '2009', title: '주식회사 엔에스티 설립', desc: '새집증후군 전문 법인 설립 및 본격적인 사업 개시' },
];

export const REASONS: ReasonItem[] = [
  {
    title: '원료·개발·생산 원스톱 시스템',
    description: '원료 확보부터 시공까지 본사가 직접 관리하여 최상의 품질을 보장합니다',
    icon: Layers,
    image: ASSETS.reason1,
    colorOverlay: 'bg-gradient-to-br from-teal-500/90 to-emerald-600/90', // Green/Teal
  },
  {
    title: '압도적인 대형 건설사 시공 실적',
    description: '1,018개 단지 이상, 대형 건설사가 선택한 검증된 기술력입니다',
    icon: Building2,
    image: ASSETS.reason2,
    colorOverlay: 'bg-gradient-to-br from-[#1a4a5e]/90 to-[#0f2940]/90', // Deep Teal/Blue
  },
  {
    title: '20년 노하우의 현장 맞춤형 기술',
    description: '보여주기식 시공이 아닌, 과학적인 3단계 공법으로 유해물질을 차단합니다',
    icon: CheckCircle2,
    image: ASSETS.reason3,
    colorOverlay: 'bg-gradient-to-br from-yellow-600/90 to-yellow-500/80', // Yellow/Ochre
  }
];

export const BRANCH_REGIONS: BranchRegion[] = [
  {
    region: '서울',
    count: 4,
    colorTheme: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    items: [
      { name: '네오하우스', location: '도봉구' },
      { name: '이온크린', location: '용산구' },
      { name: '이삭엔에스티', location: '송파구' },
      { name: '파란공간', location: '강남구' },
    ]
  },
  {
    region: '인천',
    count: 2,
    colorTheme: 'bg-teal-100 text-teal-800 border-teal-200',
    items: [
      { name: 'PKCLASS', location: '서구' },
      { name: '감성홈케어', location: '서구' },
    ]
  },
  {
    region: '충북/충남/세종/대전',
    count: 5,
    colorTheme: 'bg-green-100 text-green-800 border-green-200',
    items: [
      { name: '네오그린', location: '충북 청주시' },
      { name: '슈퍼빗자루', location: '충북 청주시' },
      { name: '에코그린', location: '세종시' },
      { name: '청소PRO', location: '대전시' },
      { name: '별별청소', location: '충남 서산시' },
    ]
  },
  {
    region: '전북/전남/광주',
    count: 1,
    colorTheme: 'bg-purple-100 text-purple-800 border-purple-200',
    items: [
      { name: '태양홈케어', location: '전북 군산시' },
    ]
  },
  {
    region: '경기',
    count: 10,
    colorTheme: 'bg-blue-100 text-blue-800 border-blue-200',
    items: [
      { name: 'NST힐링하우스', location: '남양주' },
      { name: '스토리샵', location: '남양주' },
      { name: '네오홈디자인', location: '남양주' },
      { name: '온케어 홈케어', location: '의왕시' },
      { name: 'THE CLASS', location: '시흥시' },
      { name: '성실깔끄미', location: '김포시' },
      { name: '숲속이야기(경기)', location: '파주시' },
      { name: '청소남자', location: '파주시' },
      { name: '아이앤아이', location: '오산시' },
      { name: '(주)영우', location: '의정부시' },
    ]
  },
  {
    region: '경북/대구/울산',
    count: 2,
    colorTheme: 'bg-orange-100 text-orange-800 border-orange-200',
    items: [
      { name: '숲속이야기', location: '경북 구미' },
      { name: '클린868', location: '대구 달서구' },
    ]
  },
  {
    region: '경남/부산',
    count: 1,
    colorTheme: 'bg-red-100 text-red-800 border-red-200',
    items: [
      { name: 'ERUDA', location: '부산 해운대' },
    ]
  },
];