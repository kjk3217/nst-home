import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, ClipboardCheck, Truck, ArrowLeft } from 'lucide-react';
import { ASSETS } from '../constants';

const MotionDiv = motion.div as any;

const OneStopPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="pt-20 bg-white min-h-screen">
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ASSETS.reason1})` }} // 배경은 연구실 느낌
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
           <MotionDiv 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl shrink-0"
           >
             <img src="/images/reason/01_active.jpg" alt="Researcher Bird" className="w-full h-full object-cover" />
           </MotionDiv>
           <div className="text-white text-center md:text-left">
             <div className="inline-block bg-nst-teal px-4 py-1 rounded-full text-sm font-bold mb-4">STEP 01</div>
             <h1 className="text-4xl md:text-6xl font-bold mb-6">원료부터 시공까지<br/>직접 다~ 합니다!</h1>
             <p className="text-lg opacity-90">새지비가 안내하는 NST의 <span className="text-yellow-400 font-bold">원스톱 케어 시스템</span>을 확인하세요.</p>
           </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-24">
        <button onClick={onBack} className="mb-12 flex items-center gap-2 text-gray-500 hover:text-nst-dark font-bold">
            <ArrowLeft size={20} /> 메인으로 돌아가기
        </button>

        <div className="max-w-4xl mx-auto space-y-24">
            
            {/* Step 1 */}
            <MotionDiv 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
                <div className="bg-teal-50 p-6 rounded-3xl shrink-0">
                    <FlaskConical size={64} className="text-nst-teal" />
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-nst-dark mb-4">01. 철저한 원료 관리 및 연구</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        NST는 시공에 사용되는 모든 원료를 직접 수급하고 관리합니다. 기업부설연구소에서 끊임없는 테스트를 통해 최상의 배합 비율을 찾아냅니다.
                    </p>
                </div>
            </MotionDiv>

            {/* Step 2 */}
            <MotionDiv 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row-reverse gap-8 items-center"
            >
                <div className="bg-blue-50 p-6 rounded-3xl shrink-0">
                    <ClipboardCheck size={64} className="text-blue-600" />
                </div>
                <div className="text-right md:text-left"> {/* 모바일에서는 우측 정렬 유지 or 좌측 */}
                     <h3 className="text-3xl font-bold text-nst-dark mb-4">02. 직접 생산 및 품질 보증</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        OEM 방식이 아닙니다. 자체 생산 라인을 통해 제품을 직접 생산하므로, 품질의 균일성을 100% 보장할 수 있습니다.
                    </p>
                </div>
            </MotionDiv>

            {/* Step 3 */}
            <MotionDiv 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
                <div className="bg-yellow-50 p-6 rounded-3xl shrink-0">
                    <Truck size={64} className="text-yellow-600" />
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-nst-dark mb-4">03. 본사 직영 시공 서비스</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        중간 유통 마진을 걷어냈습니다. 생산자가 직접 고객님 댁으로 찾아가 시공하기 때문에 가장 합리적인 가격과 책임감 있는 서비스를 제공합니다.
                    </p>
                </div>
            </MotionDiv>

        </div>
      </div>
    </div>
  );
};

export default OneStopPage;
