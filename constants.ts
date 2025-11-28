import { AlertTriangle, ShieldCheck, Zap, Phone, Search, SprayCan, Sparkles, Layers, Building2, CheckCircle2 } from 'lucide-react';
import { NavItem, StatItem, StepItem, PortfolioItem, FeatureItem, ProcessStep, FaqItem, HistoryItem, ReasonItem, BranchRegion } from './types';

// =================================================================
// ASSET MANAGEMENT
// Images are now managed locally in the public/images directory
// =================================================================

export const ASSETS = {
  // Hero Section
  heroBg: "/images/hero/bg.jpg",
  mascot: "/images/hero/mascot.png", 
  
  // Common / Effectiveness
  awards: "/images/common/awards.jpg",
  videoThumb: "/images/common/video-thumb.jpg", 
  
  // Method Steps
  step1: "/images/method/step01.jpg",
  step2: "/images/method/step02.jpg",
  step3: "/images/method/step03.jpg",

  // Portfolio
  port1: "/images/portfolio/01.jpg",
  port2: "/images/portfolio/02.jpg",
  port3: "/images/portfolio/03.jpg",
  port4: "/images/portfolio/04.jpg",
  port5: "/images/portfolio/05.jpg",
  port6: "/images/portfolio/06.jpg",

  // Reason Backgrounds
  reason1: "/images/reason/01.jpg", 
  reason2: "/images/reason/02.jpg", 
  reason3: "/images/reason/03.jpg", 
};

export const VIDEO_ID = "dQw4w9WgXcQ"; 

export const NAV_ITEMS: NavItem[] = [
  { label: 'NST 공법 소개', href: '#method' },
  { label: '시공 절차', href: '#process' },
  { label: '회사 소개', href: '#about' },
  { label: '시공 실적', href: '#portfolio' },
  { label: '상담 문의', href: '#contact' },
];

export const STATS: StatItem[] = [
  { value: '57,000+', label: '누적 시공량', subLabel: '대형 건설사 시공 완료' },
  { value: '30+', label: '지점', subLabel: 'NST 공법 전문 시공' },
  { value: '20', label: '업력', subLabel: '20년 축적된 현장 노하우' },
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

export const BLOG_MAIN_URL = "https://blog.naver.com/nst-pro";

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { 
    id: 1, 
    category: 'Seoul', 
    image: ASSETS.port1, 
    title: '경기도 철원군 석미아데나 퍼스티어',
    url: 'https://blog.naver.com/nst-pro/224036720678 ' // [수정필요] 해당 시공사례 블로그 주소
  },
  { 
    id: 2, 
    category: 'Busan', 
    image: ASSETS.port2, 
    title: '경기도 인스빌 1단지',
    url: 'https://blog.naver.com/nst-pro/224038632490' // [수정필요]
  },
  { 
    id: 3, 
    category: 'Incheon', 
    image: ASSETS.port3, 
    title: '경기도 쌍용예가 충무',
    url: 'https://blog.naver.com/nst-pro/224063385367' // [수정필요]
  },
  { 
    id: 4, 
    category: 'Seoul', 
    image: ASSETS.port4, 
    title: '경기도 180평 단독주택',
    url: 'https://blog.naver.com/nst-pro/224090590196' // [수정필요]
  },
  { 
    id: 5, 
    category: 'Seoul', 
    image: ASSETS.port5, 
    title: '서울 아파트',
    url: 'https://blog.naver.com/nst-pro/224090590196' // [수정필요]
  },
  { 
    id: 6, 
    category: 'Busan', 
    image: ASSETS.port6, 
    title: '부산 아파트',
    url: 'https://blog.naver.com/nst-pro/224090590196' // [수정필요]
  },
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
    activeImage: "/images/reason/01_active.jpg", // 오타 수정: .jpg1 -> .jpg
    colorOverlay: 'bg-gradient-to-br from-teal-500/60 to-emerald-600/60', // Green/Teal
  },
  {
    title: '압도적인 대형 건설사 시공 실적',
    description: '1,018개 단지 이상, 대형 건설사가 선택한 검증된 기술력입니다',
    icon: Building2,
    image: ASSETS.reason2,
    activeImage: "/images/reason/02_active.jpg", // 오타 수정: .jpg1 -> .jpg
    colorOverlay: 'bg-gradient-to-br from-[#1a4a5e]/60 to-[#0f2940]/60', // Deep Teal/Blue
  },
  {
    title: '20년 노하우의 현장 맞춤형 기술',
    description: '보여주기식 시공이 아닌, 과학적인 3단계 공법으로 유해물질을 차단합니다',
    icon: CheckCircle2,
    image: ASSETS.reason3,
    activeImage: "/images/reason/03_active.jpg", // 오타 수정: .jpg1 -> .jpg
    colorOverlay: 'bg-gradient-to-br from-yellow-600/60 to-yellow-500/60', // Yellow/Ochre
  }
];

export const BRANCH_REGIONS: BranchRegion[] = [
  {
    region: '서울',
    count: 4,
    colorTheme: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    items: [
      { 
        name: '네오하우스', 
        location: '도봉구', 
        representative: '이수익', 
        contact: '010-2224-5366', 
        items: '새집증후군, 입주청소, 줄눈, 나노코팅, 커튼' 
      },
      { 
        name: '이온크린', 
        location: '용산구', 
        representative: '윤승병', 
        contact: '010-8819-0526', 
        items: '새집증후군, 준공청소, 줄눈, 나노코팅, 방충망' 
      },
      { 
        name: '이삭엔에스티', 
        location: '송파구', 
        representative: '장양순', 
        contact: '010-6321-3217', 
        items: '새집증후군' 
      },
      { 
        name: '파란공간', 
        location: '강남구', 
        representative: '김민우', 
        contact: '010-3199-7859', 
        items: '새집증후군, 입주청소' 
      },
    ]
  },
  {
    region: '경기',
    count: 10,
    colorTheme: 'bg-blue-100 text-blue-800 border-blue-200',
    items: [
      { 
        name: 'NST힐링하우스', 
        location: '남양주시', 
        representative: '윤홍규', 
        contact: '010-5653-3789', 
        items: '새집증후군, 방충망, 음식물처리기' 
      },
      { 
        name: '네오홈디자인', 
        location: '남양주시', 
        representative: '-', 
        contact: '010-2275-1165', 
        items: '새집증후군, 입주청소' 
      },
      { 
        name: '온케어 홈케어', 
        location: '의왕시', 
        representative: '김지혜', 
        contact: '010-4941-2600', 
        items: '새집증후군, 입주청소' 
      },
      { 
        name: 'THE CLASS', 
        location: '시흥시', 
        representative: '김주희', 
        contact: '010-7608-4116', 
        items: '새집증후군, 입주청소, 나노코팅' 
      },
      { 
        name: '성실깔끄미', 
        location: '김포시', 
        representative: '고승환', 
        contact: '010-9275-5421', 
        items: '새집증후군, 입주청소, 줄눈, 나노코팅' 
      },
      { 
        name: '숲속이야기(경기)', 
        location: '파주시', 
        representative: '정용호', 
        contact: '010-7257-0422', 
        items: '새집증후군, 입주청소' 
      },
      { 
        name: '스토리샵', 
        location: '남양주시', 
        representative: '임창호', 
        contact: '010-6215-2476', 
        items: '새집증후군, 방역(먼지다듬이 등)' 
      },
      { 
        name: '아이앤아이', 
        location: '오산시', 
        representative: '남기윤', 
        contact: '010-3177-6159', 
        items: '새집증후군, 음식물처리기' 
      },
      { 
        name: '(주)영우', 
        location: '의정부시', 
        representative: '김환', 
        contact: '010-9187-9128', 
        items: '새집증후군, 음식물처리기' 
      },
      { 
        name: '청소남자 C&M', 
        location: '파주시', 
        representative: '민경수, 임성혁', 
        contact: '010-8186-0027, 010-6689-4180', 
        items: '새집증후군, 입주청소, 줄눈, 코팅' 
      },
    ]
  },
  {
    region: '인천',
    count: 2,
    colorTheme: 'bg-teal-100 text-teal-800 border-teal-200',
    items: [
      { 
        name: 'PK CLASS', 
        location: '서구', 
        representative: '박수지', 
        contact: '010-6598-8801', 
        items: '새집증후군, 입주청소, 나노코팅, 방역' 
      },
      { 
        name: '감성홈케어', 
        location: '서구', 
        representative: '이희숙', 
        contact: '010-4301-5511', 
        items: '새집증후군, 입주청소, 줄눈' 
      },
    ]
  },
  {
    region: '충북/충남/세종/대전',
    count: 5,
    colorTheme: 'bg-green-100 text-green-800 border-green-200',
    items: [
      { 
        name: '네오그린', 
        location: '충북 청주시', 
        representative: '본사 직영', 
        contact: '010-9540-1035', 
        items: '새집증후군' 
      },
      { 
        name: '슈퍼빗자루', 
        location: '충북 청주시', 
        representative: '이천희', 
        contact: '010-9417-4044', 
        items: '새집증후군, 입주청소, 줄눈, 탄성, 나노코팅, 커튼' 
      },
      { 
        name: '별별청소', 
        location: '충남 서산시', 
        representative: '최솔아', 
        contact: '010-9852-5279', 
        items: '새집증후군, 방충망, 음식물처리기' 
      },
      { 
        name: '에코그린', 
        location: '세종시', 
        representative: '윤용훈', 
        contact: '010-2676-1444', 
        items: '새집증후군, 커튼' 
      },
      { 
        name: '더그린', 
        location: '대전 동구', 
        representative: '김성중', 
        contact: '010-8525-8270', 
        items: '새집증후군, 입주청소, 커튼' 
      },
    ]
  },
  {
    region: '경북/대구/울산',
    count: 2,
    colorTheme: 'bg-orange-100 text-orange-800 border-orange-200',
    items: [
      { 
        name: '숲속이야기', 
        location: '경북 구미시', 
        representative: '조은숙', 
        contact: '010-4112-7386', 
        items: '새집증후군, 입주청소, 방역(먼지다듬이 등)' 
      },
      { 
        name: '클린868', 
        location: '대구 달서구', 
        representative: '김진영', 
        contact: '010-9165-7026', 
        items: '새집증후군, 입주청소, 줄눈' 
      },
    ]
  },
  {
    region: '경남/부산',
    count: 1,
    colorTheme: 'bg-red-100 text-red-800 border-red-200',
    items: [
      { 
        name: 'ERUDA C//W 부산해운대점', 
        location: '부산 해운대구', 
        representative: '김회상(지점장)', 
        contact: '010-8924-6030', 
        items: '새집증후군, 입주청소' 
      },
    ]
  },
  {
    region: '전북/전남/광주',
    count: 1,
    colorTheme: 'bg-purple-100 text-purple-800 border-purple-200',
    items: [
      { 
        name: '태양홈케어', 
        location: '전북 군산시', 
        representative: '고영민', 
        contact: '010-3676-7363', 
        items: '새집증후군, 방충망' 
      },
    ]
  },
];
