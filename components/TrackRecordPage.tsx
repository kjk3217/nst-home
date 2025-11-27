import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Trophy, ArrowLeft } from 'lucide-react';
import { ASSETS } from '../constants';

const MotionDiv = motion.div as any;

const TrackRecordPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      
       {/* Hero Section */}
       <div className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ASSETS.reason2})` }} // 아파트 건설 현장 느낌
        >
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row-reverse items-center gap-12">
           <MotionDiv 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl shrink-0 bg-white"
           >
             <img src="/images/reason/02_active.jpg" alt="Construction Bird" className="w-full h-full object-cover" />
           </MotionDiv>
           <div className="text-white text-center md:text-right">
             <div className="inline-block bg-yellow-500 text-nst-dark px-4 py-1 rounded-full text-sm font-bold mb-4">STEP 02</div>
             <h1 className="text-4xl md:text-6xl font-bold mb-6">대형 건설사가<br/>선택한 이유</h1>
             <p className="text-lg opacity-90">개별 시공? 아닙니다.<br/>아파트 단지 전체를 책임지는 <span className="text-nst-teal font-bold">압도적 스케일</span>입니다.</p>
           </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <button onClick={onBack} className="mb-12 flex items-center gap-2 text-gray-500 hover:text-nst-dark font-bold">
            <ArrowLeft size={20} /> 메인으로 돌아가기
        </button>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
                <Building2 size={40} className="mx-auto text-nst-teal mb-4" />
                <h3 className="text-4xl font-bold text-nst-dark mb-2">1,018+</h3>
                <p className="text-gray-500">누적 시공 단지 수</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
                <Users size={40} className="mx-auto text-blue-500 mb-4" />
                <h3 className="text-4xl font-bold text-nst-dark mb-2">57,000+</h3>
                <p className="text-gray-500">누적 시공 세대 수</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
                <Trophy size={40} className="mx-auto text-yellow-500 mb-4" />
                <h3 className="text-4xl font-bold text-nst-dark mb-2">No.1</h3>
                <p className="text-gray-500">국내 유일 전세대 일괄시공</p>
            </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-nst-dark mb-8 text-center">왜 '전세대 일괄 시공' 실적이 중요할까요?</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-700">
                        <span className="font-bold text-nst-teal text-xl">"까다로운 검증 통과"</span><br/>
                        건설사가 아파트 전 세대에 특정 공법을 도입하려면, 매우 엄격한 성능 테스트와 안전성 검사를 통과해야 합니다.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                        <span className="font-bold text-blue-600 text-xl">"표준화된 품질"</span><br/>
                        한두 집만 잘하는 것이 아니라, 수천 세대를 동일한 퀄리티로 시공할 수 있는 시스템과 인력을 갖췄다는 증거입니다.
                    </p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md">
                    <img src={ASSETS.awards} alt="Awards" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TrackRecordPage;
