import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Sparkles, 
  Trees, 
  Wind, 
  Grip, 
  Box, 
  CheckCircle2, 
  SprayCan
} from 'lucide-react';
import { ASSETS } from '../constants';

const MotionDiv = motion.div as any;

const MethodStep3Page: React.FC<{ onBack: () => void }> = ({ onBack }) => {

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
          style={{ backgroundImage: `url(${ASSETS.reason3})` }} 
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-slate-900/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center pt-10">
            <MotionDiv
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-2 bg-white/10 border border-green-400/50 text-green-300 px-4 py-1.5 rounded-full font-bold text-sm mb-6 backdrop-blur-md">
                    <Sparkles size={16} />
                    <span>NST SYSTEM STEP 03</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                    자연을 담은 완벽한 마무리<br />
                    <span className="text-green-400">NST-F100 피톤치드 케어</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                    시공이 어려운 틈새 공간까지 놓치지 않습니다.<br/>
                    <span className="text-white font-bold">키토산 성분</span>으로 유해물질을 잡고, <span className="text-white font-bold">숲의 향기</span>를 채웁니다.
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
                <div className="p-2 bg-white rounded-full shadow-sm group-hover:bg-green-500 group-hover:text-white transition-all border border-gray-100">
                    <ArrowLeft size={20} />
                </div>
                <span>메인으로 돌아가기</span>
            </button>

            {/* [수정됨] Section 2-1: Mechanism Image */}
            <div className="mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-nst-dark mb-4">
                        유해물질을 꽉 잡는 <span className="text-green-600">키토산 고정화 기술</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        공기 중에 떠다니는 포름알데히드를 단순히 덮는 것이 아닙니다.<br/>
                        그물망 구조의 키토산 성분이 오염물질을 포획(Fixation)하여 꼼꼼하게 제거합니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* [이미지 교체 영역 1] 키토산 포획 원리 이미지 */}
                    <MotionDiv 
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className="bg-green-50 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center border border-green-100"
                    >
                         {/* 여기에 준비하신 'F100 이미지 영역.png' 같은 파일을 넣으세요 */}
                         <img 
                            src="/images/methodstep/step03_mechanism.png" 
                            alt="F100 키토산 고정화 기술" 
                            className="w-full h-auto object-contain rounded-xl shadow-md bg-white"
                        />
                    </MotionDiv>

                    {/* Description */}
                    <MotionDiv 
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className="space-y-8"
                    >
                        <div className="flex gap-4">
                            <div className="bg-green-100 p-3 h-fit rounded-xl text-green-600">
                                <Grip size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-nst-dark mb-2">화학적 고정화 (Fixation)</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    NST-F100의 키토산 성분은 그물망 같은 분자 구조를 가지고 있습니다. 
                                    이 구조가 공기 중의 <span className="font-bold text-gray-800 bg-green-100 px-1">포름알데히드를 흡착하여 꽉 잡아둠</span>으로써 
                                    다시 배출되지 않도록 고정합니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="bg-green-100 p-3 h-fit rounded-xl text-green-600">
                                <Box size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-nst-dark mb-2">사각지대 없는 케어</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    붓이나 롤러가 닿기 힘든 <span className="font-bold text-gray-800">서랍장 안쪽, 옷장 깊은 곳, 선반 위</span> 등 
                                    밀폐되고 협소한 공간까지 침투하여 잔류 유해물질을 제거합니다.
                                </p>
                            </div>
                        </div>
                    </MotionDiv>
                </div>
            </div>

            {/* Section 2-2: Three Key Features */}
            <div className="mb-24">
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Card 1: Removal */}
                    <MotionDiv 
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform"
                    >
                        <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-600 mb-6">
                            <SprayCan size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-nst-dark mb-3">유해오염물질 제거</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            실내 공기 중에 부유하는 포름알데히드(HCHO) 등 유해 성분을 
                            키토산 성분이 강력하게 흡착하여 제거합니다.
                        </p>
                    </MotionDiv>

                    {/* Card 2: Scent (Highlight) */}
                    <MotionDiv 
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.1 }}
                         className="bg-green-600 p-8 rounded-3xl shadow-xl shadow-green-200 text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Trees size={100} />
                        </div>
                        <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center text-white mb-6">
                            <Wind size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">천연 솔(숲)향 조성</h3>
                        <p className="text-green-50 text-sm leading-relaxed">
                            인공적인 향이 아닌, 자극 없는 천연 솔향(Pine Scent)으로 
                            시공 후 마치 숲속에 온 듯한 상쾌한 잔향을 유지합니다.
                        </p>
                    </MotionDiv>

                    {/* Card 3: Convenience */}
                    <MotionDiv 
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.2 }}
                         className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform"
                    >
                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
                            <CheckCircle2 size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-nst-dark mb-3">제품 사용 편의성</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            수납장 내부, 옷장 속, 선반 위 등 닫힌 공간 어디든 
                            간편하게 분사하여 적용할 수 있어 시공 효율이 뛰어납니다.
                        </p>
                    </MotionDiv>
                </div>
            </div>

            {/* Section 2-3: Bottom Summary */}
            <div className="bg-gray-50 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-nst-dark mb-6 relative z-10">
                    "가장 쾌적한 입주를 위한<br/>
                    <span className="text-green-600">NST의 마지막 선물입니다."</span>
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto relative z-10 mb-8">
                    S100의 분해, S200의 차단, 그리고 F100의 탈취 케어까지.<br/>
                    NST의 3단계 공법은 완벽한 시너지로 고객님의 공간을 가장 안전하게 만듭니다.
                </p>
                <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-nst-dark text-white px-8 py-4 rounded-full font-bold hover:bg-nst-teal transition-colors shadow-lg relative z-10"
                >
                    무료 견적 상담받기
                </button>
            </div>

        </div>
      </section>
    </div>
  );
};

export default MethodStep3Page;
