import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Sun, 
  Scissors, 
  Magnet, 
  Zap, 
  CheckCircle2, 
  FlaskConical,
  Timer
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
      
      {/* 1. Hero Section: S100 Identity */}
      <section className="relative h-[50vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        {/* Background - 전문적인 연구소 느낌 */}
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

            {/* Section 2-1: Mechanism (Image 1 기반 시각화) */}
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
                    {/* Visual Diagram Area */}
                    <MotionDiv 
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className="bg-blue-50 rounded-3xl p-8 relative overflow-hidden min-h-[400px] flex flex-col justify-center"
                    >
                        {/* Concept Visual representing S100-1.jpg */}
                        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-600 border border-blue-100">
                            Mechanism
                        </div>

                        {/* Animation Concept */}
                        <div className="relative z-10 space-y-8">
                            {/* Step 1: Adsorption */}
                            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                                <div className="bg-slate-100 p-3 rounded-full text-slate-600">
                                    <Magnet size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-nst-dark">1단계: 강력한 흡착</h4>
                                    <p className="text-sm text-gray-500">벽면 코팅층이 공기 중 유해물질(VOCs)을 자석처럼 끌어당김</p>
                                </div>
                            </div>
                            
                            {/* Arrow */}
                            <div className="flex justify-center text-blue-300">
                                <Zap size={24} className="animate-bounce" />
                            </div>

                            {/* Step 2: Decomposition */}
                            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                                <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                                    <Scissors size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-nst-dark">2단계: 분해 (가위 효과)</h4>
                                    <p className="text-sm text-gray-500">활성산소와 수산화라디칼이 유해물질 구조를 절단하여 무해화</p>
                                </div>
                            </div>

                            {/* Result */}
                            <div className="flex justify-between text-center px-4 pt-4 border-t border-blue-200/50">
                                <div>
                                    <div className="text-xs text-gray-400 mb-1">유해물질</div>
                                    <div className="font-bold text-red-500">HCHO</div>
                                </div>
                                <div className="text-gray-400">→</div>
                                <div>
                                    <div className="text-xs text-gray-400 mb-1">분해 후</div>
                                    <div className="font-bold text-green-500">CO₂ + H₂O</div>
                                </div>
                            </div>
                        </div>
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

            {/* Section 2-2: Data Evidence (Image 2 기반 차트) */}
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

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Chart Visualization */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                        <div className="flex items-end justify-around h-64 gap-4 pb-4 border-b border-gray-100">
                            {/* Bar 1: 초기 */}
                            <div className="w-1/4 flex flex-col items-center justify-end h-full group">
                                <div className="text-lg font-bold text-red-500 mb-2">25</div>
                                <div className="w-full bg-red-100 h-full rounded-t-lg relative overflow-hidden">
                                     <motion.div 
                                        initial={{ height: 0 }} 
                                        whileInView={{ height: '100%' }} 
                                        transition={{ duration: 1 }}
                                        className="absolute bottom-0 w-full bg-red-500" 
                                     />
                                </div>
                                <div className="text-sm font-bold text-gray-600 mt-3">초기 농도</div>
                                <div className="text-xs text-gray-400">ppm</div>
                            </div>

                            {/* Bar 2: 흡착 */}
                            <div className="w-1/4 flex flex-col items-center justify-end h-full group">
                                <div className="text-lg font-bold text-green-600 mb-2">15</div>
                                <div className="w-full bg-green-100 h-[60%] rounded-t-lg relative overflow-hidden">
                                    <motion.div 
                                        initial={{ height: 0 }} 
                                        whileInView={{ height: '100%' }} 
                                        transition={{ duration: 1, delay: 0.2 }}
                                        className="absolute bottom-0 w-full bg-green-600" 
                                    />
                                </div>
                                <div className="text-sm font-bold text-gray-600 mt-3">1단계: 흡착</div>
                                <div className="text-xs text-green-600 font-medium">30분 후</div>
                            </div>

                             {/* Bar 3: 분해 */}
                             <div className="w-1/4 flex flex-col items-center justify-end h-full group">
                                <div className="text-lg font-bold text-blue-500 mb-2">10</div>
                                <div className="w-full bg-blue-100 h-[40%] rounded-t-lg relative overflow-hidden">
                                     <motion.div 
                                        initial={{ height: 0 }} 
                                        whileInView={{ height: '100%' }} 
                                        transition={{ duration: 1, delay: 0.4 }}
                                        className="absolute bottom-0 w-full bg-blue-500" 
                                     />
                                </div>
                                <div className="text-sm font-bold text-gray-600 mt-3">2단계: 분해</div>
                                <div className="text-xs text-blue-500 font-medium">1~2시간</div>
                            </div>

                             {/* Bar 4: 완료 */}
                             <div className="w-1/4 flex flex-col items-center justify-end h-full group">
                                <div className="text-lg font-bold text-nst-dark mb-2">0</div>
                                <div className="w-full bg-gray-100 h-[2px] rounded-t-lg relative"></div>
                                <div className="text-sm font-bold text-gray-600 mt-3">지속 반응</div>
                                <div className="text-xs text-gray-500">95% 이상 저감</div>
                            </div>
                        </div>
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

            {/* Section 2-3: Visual Experiment (Image 3 기반 타임라인) */}
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
                    {/* Connection Line */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-500/20 via-blue-500/50 to-transparent -z-10 transform -translate-y-1/2"></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Time 1 */}
                        <MotionDiv 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center"
                        >
                            <div className="mb-4 bg-slate-800 text-white px-3 py-1 rounded-full text-sm font-bold">Start</div>
                            <div className="w-40 h-40 rounded-full bg-blue-600 flex items-center justify-center mb-6 shadow-inner ring-4 ring-blue-100 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                                <span className="text-white font-bold text-xl relative z-10">진한 청색</span>
                            </div>
                            <h3 className="font-bold text-lg text-gray-800">실험 초기</h3>
                            <p className="text-sm text-gray-500 mt-2 text-center">지표물질(MB 5ppm) 투입</p>
                        </MotionDiv>

                        {/* Time 2 */}
                        <MotionDiv 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center"
                        >
                             <div className="mb-4 bg-slate-800 text-white px-3 py-1 rounded-full text-sm font-bold flex gap-2">
                                <Timer size={16} /> 3 Hours
                             </div>
                            <div className="w-40 h-40 rounded-full bg-blue-300 flex items-center justify-center mb-6 shadow-inner ring-4 ring-blue-100 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
                                <span className="text-white font-bold text-xl relative z-10 drop-shadow-md">색상 옅어짐</span>
                            </div>
                            <h3 className="font-bold text-lg text-gray-800">반응 진행 중</h3>
                            <p className="text-sm text-gray-500 mt-2 text-center">실내 LED 조명 하 반응</p>
                        </MotionDiv>

                         {/* Time 3 */}
                         <MotionDiv 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center relative overflow-hidden"
                        >
                             {/* Shine Effect */}
                             <div className="absolute top-0 right-0 p-4">
                                <FlaskConical className="text-green-500 animate-pulse" size={24} />
                             </div>

                             <div className="mb-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold flex gap-2">
                                <Timer size={16} /> 7 Hours
                             </div>
                            <div className="w-40 h-40 rounded-full bg-blue-50 flex items-center justify-center mb-6 shadow-inner ring-4 ring-green-100 border-2 border-green-500 relative overflow-hidden">
                                <div className="absolute inset-0 bg-white/50"></div>
                                <span className="text-gray-400 font-bold text-xl relative z-10">투명</span>
                            </div>
                            <h3 className="font-bold text-lg text-green-600">분해 완료</h3>
                            <p className="text-sm text-gray-500 mt-2 text-center">용액이 투명해짐 (완전 분해)</p>
                        </MotionDiv>
                    </div>
                    
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
