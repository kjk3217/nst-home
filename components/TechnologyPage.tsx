import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Sun, ArrowLeft } from 'lucide-react';
import { ASSETS } from '../constants';

const MotionDiv = motion.div as any;

const TechnologyPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="pt-20 bg-white min-h-screen">
      
       {/* Hero Section */}
       <div className="relative h-[60vh] overflow-hidden flex items-center justify-center bg-gradient-to-br from-green-50 to-teal-100">
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
           <MotionDiv 
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ type: "spring" }}
             className="w-72 h-72 md:w-96 md:h-96 shrink-0"
           >
             <img src="/images/reason/03_active.jpg" alt="Technology Bird" className="w-full h-full object-contain drop-shadow-2xl" />
           </MotionDiv>
           <div className="text-center md:text-left">
             <div className="inline-block bg-white text-nst-teal border border-nst-teal px-4 py-1 rounded-full text-sm font-bold mb-4">STEP 03</div>
             <h1 className="text-4xl md:text-6xl font-bold mb-6 text-nst-dark">20년 노하우의<br/><span className="text-nst-teal">3단계 철벽 방어</span></h1>
             <p className="text-lg text-gray-600">보여주기식 시공은 그만!<br/>과학적으로 입증된 NST만의 3중 케어 솔루션입니다.</p>
           </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <button onClick={onBack} className="mb-12 flex items-center gap-2 text-gray-500 hover:text-nst-dark font-bold">
            <ArrowLeft size={20} /> 메인으로 돌아가기
        </button>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <MotionDiv whileHover={{ y: -10 }} className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg">
                <div className="h-48 bg-gray-100 overflow-hidden relative">
                     <img src={ASSETS.step1} alt="S100" className="w-full h-full object-cover" />
                     <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md">
                         <Sun className="text-orange-500" />
                     </div>
                </div>
                <div className="p-8">
                    <h3 className="text-2xl font-bold text-nst-dark mb-2">NST-S100</h3>
                    <p className="text-orange-500 font-bold text-sm mb-4">유해물질 지속 분해</p>
                    <p className="text-gray-600 leading-relaxed">
                        특허받은 가시광촉매 기술로 빛이 있는 곳에서도, 없는 곳에서도 유해물질을 끝까지 추적하여 분해합니다.
                    </p>
                </div>
            </MotionDiv>

             {/* Card 2 */}
             <MotionDiv whileHover={{ y: -10 }} className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg">
                <div className="h-48 bg-gray-100 overflow-hidden relative">
                     <img src={ASSETS.step2} alt="S200" className="w-full h-full object-cover" />
                     <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md">
                         <ShieldCheck className="text-nst-teal" />
                     </div>
                </div>
                <div className="p-8">
                    <h3 className="text-2xl font-bold text-nst-dark mb-2">NST-S200</h3>
                    <p className="text-nst-teal font-bold text-sm mb-4">유해물질 원천 차단</p>
                    <p className="text-gray-600 leading-relaxed">
                        가구의 절단면과 구멍 등 유해물질이 뿜어져 나오는 통로를 전용 차폐재로 완벽하게 막아버립니다.
                    </p>
                </div>
            </MotionDiv>

             {/* Card 3 */}
             <MotionDiv whileHover={{ y: -10 }} className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg">
                <div className="h-48 bg-gray-100 overflow-hidden relative">
                     <img src={ASSETS.step3} alt="F100" className="w-full h-full object-cover" />
                     <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md">
                         <Sparkles className="text-green-500" />
                     </div>
                </div>
                <div className="p-8">
                    <h3 className="text-2xl font-bold text-nst-dark mb-2">NST-F100</h3>
                    <p className="text-green-500 font-bold text-sm mb-4">흡착/탈취/살균 케어</p>
                    <p className="text-gray-600 leading-relaxed">
                        시공이 어려운 틈새 공간까지 피톤치드 성분으로 케어하여 잔류 유해물질을 제거하고 숲속 향기를 입힙니다.
                    </p>
                </div>
            </MotionDiv>

        </div>

        {/* Bottom Logic */}
        <div className="mt-24 text-center bg-gray-50 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-nst-dark mb-6">NST의 완벽한 공식</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-xl md:text-2xl font-bold text-gray-500">
                <div className="bg-white px-8 py-4 rounded-xl shadow-sm border border-gray-200">
                    이미 나온 물질 제거 (S100)
                </div>
                <div className="text-nst-teal">+</div>
                <div className="bg-white px-8 py-4 rounded-xl shadow-sm border border-gray-200">
                    나올 물질 원천 차단 (S200)
                </div>
                <div className="text-nst-teal">=</div>
                <div className="bg-nst-teal text-white px-8 py-4 rounded-xl shadow-lg">
                    새집증후군 완벽 해결
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
