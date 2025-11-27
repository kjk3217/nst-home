import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Sun, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  FlaskConical,
  Layers
} from 'lucide-react';
import { ASSETS } from '../constants';

const MotionDiv = motion.div as any;

const TechnologyPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      
      {/* 1. Hero Section: 20년 노하우 & 표준 기술 강조 */}
      <section className="relative h-[55vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ASSETS.reason3})` }} 
        >
           {/* Amber/Yellow Tint for 'Gold Standard' feel */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-slate-900/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center pt-16">
            <MotionDiv
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-2 bg-white/10 border border-amber-400/50 text-amber-400 px-4 py-1.5 rounded-full font-bold text-sm mb-6 backdrop-blur-md">
                    <FlaskConical size={16} />
                    <span>NST SYSTEM 03</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                    20년 현장 노하우의 결정체<br />
                    <span className="text-amber-400">3단계 맞춤형 표준 기술</span>
                </h1>
                <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                    단순한 시공이 아닙니다.<br className="md:hidden"/>
                    20년간 축적된 데이터로 완성된<br className="hidden md:block"/>
                    <span className="text-white font-bold"> 가장 안전하고 확실한 새집증후군 해결 공식</span>입니다.
                </p>
            </MotionDiv>
        </div>
      </section>

      {/* 2. Main Content */}
      <section className="pb-24 -mt-10 relative z-20">
        <div className="container mx-auto px-6">
            
            <button 
                onClick={onBack} 
                className="group flex items-center gap-2 text-gray-500 hover:text-nst-dark font-bold mb-12 transition-colors relative z-30"
            >
                <div className="p-2 bg-white rounded-full shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-all border border-gray-100">
                    <ArrowLeft size={20} />
                </div>
                <span>메인으로 돌아가기</span>
            </button>

            {/* Section 2-1: The Logic (Comic Content Reinterpreted) */}
            {/* "왜 3단계여야 할까요?" - 기존/미래 발생 오염물질 논리 시각화 */}
            <div className="mb-24">
                 <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-nst-dark mb-4">
                        왜 <span className="text-amber-500 underline decoration-4 decoration-amber-200 underline-offset-4">3단계 복합 시공</span>이어야 할까요?
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        한 번의 시공으로 끝나는 것이 아닙니다. <br/>
                        유해물질의 특성을 정확히 파악해야 근본적인 해결이 가능합니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Problem: 지속 방출 */}
                    <MotionDiv 
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className="bg-red-50 p-8 rounded-3xl border border-red-100 relative overflow-hidden"
                    >
                        <AlertTriangle className="text-red-400 w-12 h-12 mb-4" />
                        <h3 className="text-xl font-bold text-red-900 mb-3">숨어있는 "암살자"</h3>
                        <p className="text-red-800/80 leading-relaxed text-sm">
                            "입주청소를 했는데도 눈이 따갑나요?"<br/><br/>
                            가구와 자재 깊숙한 곳에 숨어있는 유해물질은 
                            <span className="font-bold border-b border-red-300"> 수년간 지속적으로 방출</span>됩니다. 
                            단순 환기만으로는 절대 해결되지 않습니다.
                        </p>
                    </MotionDiv>

                    {/* Solution Formula Graphic */}
                    <MotionDiv 
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className="md:col-span-2 bg-white p-8 rounded-3xl border border-gray-200 shadow-lg flex flex-col justify-center"
                    >
                        <h3 className="text-lg font-bold text-gray-400 mb-6 uppercase tracking-wider text-center">NST Perfect Solution Formula</h3>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                            
                            {/* Variable A */}
                            <div className="text-center">
                                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 text-gray-500">
                                    <Layers size={32} />
                                </div>
                                <div className="font-bold text-gray-700">이미 방출된<br/>오염 제거</div>
                            </div>

                            <div className="text-2xl font-bold text-gray-300">+</div>

                            {/* Variable B */}
                            <div className="text-center">
                                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 text-amber-600">
                                    <ShieldCheck size={32} />
                                </div>
                                <div className="font-bold text-gray-700">앞으로 나올<br/>오염 차단</div>
                            </div>

                            <div className="text-2xl font-bold text-gray-300">=</div>

                            {/* Result */}
                            <div className="text-center relative">
                                <div className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-bounce">
                                    Perfect!
                                </div>
                                <div className="w-24 h-24 bg-nst-teal rounded-full flex items-center justify-center mx-auto mb-3 text-white shadow-xl shadow-teal-200">
                                    <CheckCircle2 size={40} />
                                </div>
                                <div className="font-bold text-nst-teal text-lg">새집증후군<br/>완벽 해결</div>
                            </div>
                        </div>
                    </MotionDiv>
                </div>
            </div>

            {/* Section 2-2: The 3 Steps Detail (PDF Content) */}
            <div className="space-y-24">
                
                {/* Step 1: S100 */}
                <MotionDiv 
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                    className="flex flex-col md:flex-row items-center gap-12"
                >
                    <div className="md:w-1/2 relative group">
                        <div className="absolute -inset-4 bg-orange-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                             {/* [IMAGE_PLACEHOLDER] tech_step_01.jpg (S100 벽면 분사) */}
                            <img src={ASSETS.step1} alt="S100 Application" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-sm">
                                <span className="font-black text-orange-500 text-xl">STEP 01</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 space-y-6">
                        <div className="inline-block p-3 rounded-2xl bg-orange-50 text-orange-600 mb-2">
                            <Sun size={32} />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-nst-dark">
                            빛으로 분해하다<br/>
                            <span className="text-orange-500">NST-S100</span>
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            "빛을 받으면 유해물질을 제거하는 가시광촉매 기술입니다."
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-gray-700">
                                <CheckCircle2 className="text-orange-500 shrink-0 mt-1" size={18} />
                                <span>벽지, 천장 등 집안 전체 면적에 코팅막 형성</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-700">
                                <CheckCircle2 className="text-orange-500 shrink-0 mt-1" size={18} />
                                <span>이미 방출된 공기 중 유해물질 지속적 분해/제거</span>
                            </li>
                        </ul>
                    </div>
                </MotionDiv>

                {/* Step 2: S200 (Emphasized as Core Tech) */}
                <MotionDiv 
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                    className="flex flex-col md:flex-row-reverse items-center gap-12"
                >
                    <div className="md:w-1/2 relative group">
                         <div className="absolute -inset-4 bg-teal-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                         <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                            {/* [IMAGE_PLACEHOLDER] tech_step_02.jpg (S200 가구 붓칠) - portfolio/03.jpg 사용 추천 */}
                            <img src="/images/portfolio/03.jpg" alt="S200 Application" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-sm">
                                <span className="font-black text-nst-teal text-xl">STEP 02</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 space-y-6 text-right md:text-left"> {/* Mobile: Right align slightly awkward, keep consistent? Let's force left for content, but layout reversed. */}
                        <div className="flex md:block justify-end md:justify-start">
                             <div className="inline-block p-3 rounded-2xl bg-teal-50 text-nst-teal mb-2">
                                <ShieldCheck size={32} />
                            </div>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-nst-dark">
                            원인을 차단하다<br/>
                            <span className="text-nst-teal">NST-S200</span>
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            "가구 및 선반 등의 목재 내부에서 유해물질이 대량 방출된다는 사실, 알고 계셨나요?"<br/>
                            유해물질을 대량 방출하는 원인을 찾아 원천 차단합니다.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-gray-700 md:flex-row-reverse md:text-right justify-end md:justify-start">
                                <span className="order-2 md:order-1">가구 절단면, 구멍 등 유해물질 방출 통로 차폐</span>
                                <CheckCircle2 className="text-nst-teal shrink-0 mt-1 order-1 md:order-2" size={18} />
                            </li>
                            <li className="flex items-start gap-3 text-gray-700 md:flex-row-reverse md:text-right justify-end md:justify-start">
                                <span className="order-2 md:order-1">앞으로 발생될 오염물질까지 사전 예방</span>
                                <CheckCircle2 className="text-nst-teal shrink-0 mt-1 order-1 md:order-2" size={18} />
                            </li>
                        </ul>
                    </div>
                </MotionDiv>

                {/* Step 3: F100 */}
                <MotionDiv 
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                    className="flex flex-col md:flex-row items-center gap-12"
                >
                    <div className="md:w-1/2 relative group">
                        <div className="absolute -inset-4 bg-green-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                            {/* [IMAGE_PLACEHOLDER] tech_step_03.jpg (F100 서랍 내부 분사) */}
                            <img src={ASSETS.step3} alt="F100 Application" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                             <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-sm">
                                <span className="font-black text-green-600 text-xl">STEP 03</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 space-y-6">
                        <div className="inline-block p-3 rounded-2xl bg-green-50 text-green-600 mb-2">
                            <Sparkles size={32} />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-nst-dark">
                            향기를 입히다<br/>
                            <span className="text-green-600">NST-F100</span>
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            "작업이 어려운 틈새 공간까지 유해물질을 제거하고 숲속 향기를 더해드립니다."
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-gray-700">
                                <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={18} />
                                <span>가구 안쪽, 서랍장 뒤편 등 사각지대 케어</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-700">
                                <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={18} />
                                <span>즉각적인 탈취 효과와 살균 작용</span>
                            </li>
                        </ul>
                    </div>
                </MotionDiv>

            </div>

             {/* 3. Bottom Conclusion */}
             <MotionDiv 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="mt-24 p-8 md:p-12 bg-slate-900 rounded-3xl text-center relative overflow-hidden"
             >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-nst-teal to-green-500"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    그게 바로 20년 노하우가 집약된<br/>
                    <span className="text-nst-teal">NST 공법이 해답입니다.</span>
                </h3>
                <p className="text-gray-400 mb-8">
                    안전성 + 현장 노하우 + 기술력 = 새집증후군 개선 맞춤형 '표준기술'
                </p>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="bg-white text-nst-dark hover:bg-nst-teal hover:text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    무료 견적 상담받기
                </button>
             </MotionDiv>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;
