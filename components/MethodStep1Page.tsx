import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Sun, 
  CheckCircle2, 
} from 'lucide-react';
import { ASSETS } from '../constants';

const MotionDiv = motion.div as any;

const MethodStep1Page: React.FC<{ onBack: () => void }> = ({ onBack }) => {

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative h-[50vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ASSETS.reason1})` }} 
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center pt-10">
            <MotionDiv
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-2 bg-white/10 border border-blue-400/50 text-blue-300 px-4 py-1.5 rounded-full font-bold text-sm mb-6 backdrop-blur-md">
                    <Sun size={16} className="animate-spin-slow" />
                    <span>NST SYSTEM STEP 01</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                    빛으로 완성하는 공기 정화<br />
                    <span className="text-blue-400">NST-S100 가시광촉매</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                    단순히 덮는 것이 아닙니다.<br/>
                    유해물질을 <span className="text-white font-bold">흡착하고, 분해하여</span> 근본적으로 제거합니다.
                </p>
            </MotionDiv>
        </div>
      </section>

      {/* 2. Main Content */}
      <section className="py-20 bg-white -mt-10 rounded-t-[2.5rem] relative z-20 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-6">
            
            {/* Back Button */}
            <button 
                onClick={onBack} 
                className="group flex items-center gap-2 text-gray-500 hover:text-nst-dark font-bold mb-16 transition-colors"
            >
                <div className="p-2 bg-white rounded-full shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-all border border-gray-100">
                    <ArrowLeft size={20} />
                </div>
                <span>메인으로 돌아가기</span>
            </button>

            {/* [수정됨] Section 2-1: Mechanism Image */}
            <div className="mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-nst-dark mb-4">
                        <span className="text-blue-600">흡착</span>하고 <span className="text-blue-600">분해</span>하는 듀얼 액션
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        NST-S100은 일반적인 코팅제가 아닙니다. <br/>
                        빛(LED/자연광)을 에너지원으로 사용하여 유해물질의 화학 구조를 끊어버립니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* [이미지 교체 영역 1] S100 메커니즘 이미지 */}
                    <MotionDiv 
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className="rounded-3xl overflow-hidden shadow-lg border border-gray-100"
                    >
                        {/* 여기에 준비하신 'S100 이미지 영역.png' 같은 파일을 넣으세요 */}
                        <img 
                            src="/images/methodstep/step01_mechanism.png" 
                            alt="S100 듀얼 액션 메커니즘" 
                            className="w-full h-auto object-cover"
                        />
                    </MotionDiv>

                    {/* Text Description */}
                    <MotionDiv 
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-nst-dark leading-snug">
                            "유해물질의 연결고리를<br/>
                            <span className="text-blue-600 bg-blue-50 px-1">가위처럼 잘라냅니다</span>"
                        </h3>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                NST-S100은 벽면, 천장 등 집안 전체 면적에 코팅막을 형성합니다. 
                                이 코팅막은 공기 중에 떠다니는 포름알데히드, 톨루엔 등 유해물질을 
                                지속적으로 끌어당깁니다(흡착).
                            </p>
                            <p>
                                이후 실내 조명(LED)이나 햇빛을 받으면 표면에서 강력한 산화 반응이 일어납니다. 
                                마치 가위로 종이를 자르듯 유해물질의 분자 구조를 분해하여 
                                인체에 무해한 <strong>이산화탄소와 물로 변환</strong>시킵니다.
                            </p>
                        </div>
                        <ul className="space-y-2 pt-4">
                             <li className="flex items-center gap-2 text-nst-dark font-medium">
                                <CheckCircle2 size={18} className="text-green-500" />
                                <span>한 번 시공으로 반영구적 효과 지속</span>
                             </li>
                             <li className="flex items-center gap-2 text-nst-dark font-medium">
                                <CheckCircle2 size={18} className="text-green-500" />
                                <span>오염물질 흡착 및 광분해 반복 순환</span>
                             </li>
                        </ul>
                    </MotionDiv>
                </div>
            </div>

            {/* [수정됨] Section 2-2: Data Evidence Image */}
            <div className="mb-24 bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
                 <div className="flex flex-col md:flex-row items-end gap-4 mb-10">
                    <div>
                        <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Performance Test</div>
                        <h2 className="text-3xl font-bold text-nst-dark">가스백 저감 성능 테스트</h2>
                    </div>
                    <div className="text-sm text-gray-500 md:ml-auto pb-1">
                        * 공정시험기준 준용 가스백법 시료채취 및 정량 분석
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* [이미지 교체 영역 2] 가스백 테스트 그래프 이미지 */}
                    <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-white">
                         <img 
                            src="/images/methodstep/step01_chart.png" 
                            alt="가스백 저감 성능 그래프" 
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Interpretation */}
                    <div className="space-y-6 flex flex-col justify-center">
                        <div className="flex gap-4">
                            <div className="bg-white p-3 h-fit rounded-lg shadow-sm border border-gray-100 text-green-600 font-bold min-w-[60px] text-center">
                                30분
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">빠른 초기 반응 (공간 정화 개시)</h4>
                                <p className="text-sm text-gray-600">
                                    시공 직후 30분 만에 40% 이상의 유해물질을 즉각적으로 흡착하여 농도를 낮춥니다.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-white p-3 h-fit rounded-lg shadow-sm border border-gray-100 text-blue-500 font-bold min-w-[60px] text-center">
                                2시간
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">산화 라디칼 분해 효과</h4>
                                <p className="text-sm text-gray-600">
                                    흡착된 오염물질을 빛 에너지로 분해하여 지속적인 정화 가능성을 입증하였습니다.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-nst-dark p-3 h-fit rounded-lg shadow-sm border border-gray-100 text-white font-bold min-w-[60px] text-center">
                                지속
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">반복 반응으로 공기질 유지</h4>
                                <p className="text-sm text-gray-600">
                                    단발성 제거가 아닌, 흡착/광분해의 무한 반복 사이클로 청정 상태를 유지합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* [수정됨] Section 2-3: Visual Experiment Image */}
            <div className="mb-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-nst-dark mb-4">
                        "특수 조명(UV)이 아닌 <span className="text-amber-500">일반 실내 조명</span>에서도 강력합니다"
                    </h2>
                    <p className="text-gray-600">
                        메틸렌블루(MB) 용액의 투명도 변화 실험을 통해 실내 LED 조명만으로도 작동함을 입증했습니다.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* [이미지 교체 영역 3] 실험 결과 타임라인 이미지 */}
                     <MotionDiv 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white"
                    >
                        <img 
                            src="/images/methodstep/step01_experiment.png" 
                            alt="메틸렌블루 투명도 변화 실험" 
                            className="w-full h-auto object-cover"
                        />
                    </MotionDiv>
                    
                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-400">
                            * 메틸렌블루(MB): 광촉매 반응에 탈색되는 특성이 있어 성능 평가에 활용되는 대표적 지표 물질
                        </p>
                    </div>
                </div>
            </div>

        </div>
      </section>
    </div>
  );
};

export default MethodStep1Page;
