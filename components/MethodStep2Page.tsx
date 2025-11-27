import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Shield, 
  Lock, 
  Ban, 
  Layers, 
  Brush, 
  TestTube2,
  CheckCircle2
} from 'lucide-react';
import { ASSETS } from '../constants';

const MotionDiv = motion.div as any;

const MethodStep2Page: React.FC<{ onBack: () => void }> = ({ onBack }) => {

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative h-[50vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        {/* Background - 가구/목재의 따뜻함 + 기술적 차가움의 조화 */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ASSETS.reason2})` }} 
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-slate-900/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center pt-10">
            <MotionDiv
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-2 bg-white/10 border border-teal-400/50 text-teal-300 px-4 py-1.5 rounded-full font-bold text-sm mb-6 backdrop-blur-md">
                    <Shield size={16} />
                    <span>NST SYSTEM STEP 02</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                    유해물질 원천 봉쇄<br />
                    <span className="text-teal-400">NST-S200 차폐제</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                    가구 깊숙한 곳에서 뿜어져 나오는 유해물질.<br/>
                    표면을 덮는 것이 아니라, <span className="text-white font-bold">기공을 채워 완벽하게 가둡니다.</span>
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
                <div className="p-2 bg-white rounded-full shadow-sm group-hover:bg-teal-500 group-hover:text-white transition-all border border-gray-100">
                    <ArrowLeft size={20} />
                </div>
                <span>메인으로 돌아가기</span>
            </button>

            {/* Section 2-1: Mechanism (S200-1.jpg 시각화) */}
            <div className="mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-nst-dark mb-4">
                        숨 쉬는 구멍까지 막는 <span className="text-teal-600">3단계 기공 봉쇄 기술</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        NST-S200은 단순 코팅이 아닙니다. 액상 형태의 차폐재가 목재 내부로 침투하여<br/>
                        젤(Gel)화 되며 유해물질이 나오는 통로를 원천적으로 막아버립니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Visual Diagram Area - 침투 및 봉쇄 과정을 그래픽으로 표현 */}
                    <MotionDiv 
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className="bg-gray-50 rounded-3xl p-8 relative overflow-hidden min-h-[400px] flex flex-col justify-center border border-gray-100"
                    >
                        {/* Simulation Graphic */}
                        <div className="relative w-full max-w-sm mx-auto aspect-square bg-white rounded-xl shadow-inner border-2 border-amber-200 overflow-hidden">
                            {/* Wood Texture Background */}
                            <div className="absolute inset-0 bg-[#e6cba5] opacity-50 pattern-dots"></div>
                            
                            {/* Pores (기공) */}
                            <div className="absolute bottom-0 w-full h-1/2 flex justify-around items-end px-4">
                                <div className="w-8 h-16 bg-[#c4a484] rounded-t-full border-x border-t border-[#a68b6c]"></div>
                                <div className="w-10 h-20 bg-[#c4a484] rounded-t-full border-x border-t border-[#a68b6c]"></div>
                                <div className="w-6 h-12 bg-[#c4a484] rounded-t-full border-x border-t border-[#a68b6c]"></div>
                            </div>

                            {/* Coating Layer Animation */}
                            <motion.div 
                                initial={{ height: 0 }}
                                whileInView={{ height: '60%' }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="absolute bottom-0 w-full bg-teal-500/80 backdrop-blur-sm border-t-4 border-teal-400 z-10 flex items-end justify-center pb-4"
                            >
                                <span className="text-white font-bold drop-shadow-md">NST-S200 Penetration</span>
                            </motion.div>

                            {/* Lock Icons Appearing */}
                            <div className="absolute bottom-4 w-full flex justify-around z-20">
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.2, type: "spring" }}
                                    className="bg-white p-1 rounded-full shadow-lg"
                                >
                                    <Lock size={16} className="text-teal-600" />
                                </motion.div>
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.4, type: "spring" }}
                                    className="bg-white p-1 rounded-full shadow-lg"
                                >
                                    <Lock size={16} className="text-teal-600" />
                                </motion.div>
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.6, type: "spring" }}
                                    className="bg-white p-1 rounded-full shadow-lg"
                                >
                                    <Lock size={16} className="text-teal-600" />
                                </motion.div>
                            </div>
                        </div>
                        
                        <div className="mt-6 text-center">
                            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Cross-section View</p>
                        </div>
                    </MotionDiv>

                    {/* Steps Description */}
                    <MotionDiv 
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className="space-y-8"
                    >
                        <div className="flex gap-4">
                            <div className="bg-teal-100 p-3 h-fit rounded-xl text-teal-600">
                                <Brush size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-nst-dark mb-2">1. 침투 및 흡수</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    가구 및 목재 표면에 S200을 시공하면 표면에 머무르지 않고 
                                    소재 내부로 깊숙이 스며듭니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="bg-teal-100 p-3 h-fit rounded-xl text-teal-600">
                                <Layers size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-nst-dark mb-2">2. 퍼짐 및 젤(Gel)화</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    내부로 침투한 용액이 넓게 퍼지면서 젤 형태로 변화하여 
                                    빈 공간(기공)을 빈틈없이 채웁니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="bg-teal-100 p-3 h-fit rounded-xl text-teal-600">
                                <Lock size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-nst-dark mb-2">3. 기공 봉쇄 및 경화</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    <span className="bg-yellow-100 px-1 font-bold text-gray-800">약 2시간 내 표면 보호막</span>을 형성하고, 
                                    <span className="bg-yellow-100 px-1 font-bold text-gray-800">3일 후 완전 경화</span>되어 
                                    유해물질 재방출을 원천적으로 차단합니다.
                                </p>
                            </div>
                        </div>
                    </MotionDiv>
                </div>
            </div>

            {/* Section 2-2: Data Evidence (S200-2.jpg 기반 차트) */}
            <div className="mb-24">
                <div className="bg-nst-dark rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full blur-[100px] opacity-20"></div>
                    
                    <div className="flex flex-col md:flex-row gap-12 relative z-10">
                        {/* Text Info */}
                        <div className="md:w-1/3">
                            <div className="inline-block bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                                KSM 1998:2022 표준 시험
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                데이터가 증명하는<br/>
                                <span className="text-teal-400">완벽한 차단력</span>
                            </h2>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                소형 챔버법을 이용한 정밀 분석 결과, 
                                1급 발암물질인 톨루엔과 포름알데히드에 대해 
                                놀라운 저감 효과를 입증했습니다.
                            </p>
                            
                            <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                                <div className="flex items-center gap-2 mb-2">
                                    <TestTube2 className="text-teal-400" size={20} />
                                    <span className="font-bold">시험 조건</span>
                                </div>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li>• 온도: 25℃ / 습도: 50%</li>
                                    <li>• 붓질 2회 시공 기준</li>
                                    <li>• 분석 방법: GC/MS 정량 분석</li>
                                </ul>
                            </div>
                        </div>

                        {/* Chart Area */}
                        <div className="md:w-2/3 bg-white text-gray-800 rounded-3xl p-8 shadow-2xl">
                            
                            {/* Comparison 1: Toluene */}
                            <div className="mb-8 pb-8 border-b border-gray-100">
                                <div className="flex justify-between items-end mb-4">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                        톨루엔 (Toluene)
                                    </h3>
                                    <span className="text-red-500 font-black text-2xl">100% 제거</span>
                                </div>
                                
                                <div className="relative h-12 bg-gray-100 rounded-full overflow-hidden flex">
                                    {/* Uncoated */}
                                    <div className="w-1/2 h-full relative border-r border-white">
                                        <div className="absolute top-1/2 left-4 -translate-y-1/2 text-xs font-bold z-10 text-gray-500">
                                            미코팅 (0.001)
                                        </div>
                                        <div className="bg-red-200 w-full h-full"></div>
                                    </div>
                                    
                                    {/* Coated */}
                                    <div className="w-1/2 h-full relative">
                                        <div className="absolute top-1/2 left-4 -translate-y-1/2 text-sm font-bold z-10 text-teal-700 flex items-center gap-1">
                                            NST-S200 시공 <span className="bg-teal-600 text-white px-2 py-0.5 rounded text-xs ml-2">불검출</span>
                                        </div>
                                        <div className="bg-teal-100 w-full h-full opacity-50"></div> {/* Zero bar representation */}
                                    </div>
                                </div>
                            </div>

                            {/* Comparison 2: Formaldehyde */}
                            <div>
                                <div className="flex justify-between items-end mb-4">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                        포름알데히드 (HCHO)
                                    </h3>
                                    <span className="text-red-500 font-black text-2xl">94.8% 감소</span>
                                </div>
                                
                                <div className="relative h-40 flex items-end gap-8 pl-4 border-l-2 border-gray-100">
                                    {/* Bar 1 */}
                                    <div className="w-1/2 h-full flex flex-col justify-end group">
                                        <div className="text-center font-bold text-gray-500 mb-2">0.097</div>
                                        <motion.div 
                                            initial={{ height: 0 }}
                                            whileInView={{ height: '100%' }}
                                            className="w-full bg-red-400 rounded-t-xl relative"
                                        >
                                            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm font-bold">미코팅</span>
                                        </motion.div>
                                    </div>

                                    {/* Bar 2 */}
                                    <div className="w-1/2 h-full flex flex-col justify-end group">
                                        <div className="text-center font-bold text-teal-600 mb-2">0.005</div>
                                        <motion.div 
                                            initial={{ height: 0 }}
                                            whileInView={{ height: '5%' }} // 5% height relative to 100%
                                            transition={{ delay: 0.3 }}
                                            className="w-full bg-teal-500 rounded-t-xl relative"
                                        >
                                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-teal-600 font-bold whitespace-nowrap">
                                                ▼ 1/20 수준
                                            </span>
                                        </motion.div>
                                        <div className="bg-teal-50 text-center py-2 text-sm font-bold text-teal-700 mt-1 rounded-b-xl">
                                            NST-S200
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2-3: Bottom Summary */}
            <div className="text-center pb-12">
                <div className="inline-flex items-center gap-2 bg-gray-100 px-5 py-2 rounded-full mb-6">
                    <CheckCircle2 className="text-teal-600" size={20} />
                    <span className="font-bold text-gray-600">안전성 검증 완료</span>
                </div>
                <h3 className="text-2xl font-bold text-nst-dark mb-4">
                    "가장 확실한 방법은 <br className="md:hidden"/>나오지 못하게 막는 것입니다."
                </h3>
                <p className="text-gray-500">
                    S200은 가구의 숨구멍을 막아 유해물질의 방출 경로를 완전히 차단합니다.
                </p>
            </div>

        </div>
      </section>
    </div>
  );
};

export default MethodStep2Page;
