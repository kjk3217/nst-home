import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Building2, 
  Trophy, 
  Users, 
  FileCheck, 
  Handshake, 
  Quote 
} from 'lucide-react';
import { ASSETS } from '../constants'; //

const MotionDiv = motion.div as any;

const TrackRecordPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      
      {/* 1. Hero Section [디자인 통일 완료] */}
      <section className="relative h-[55vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ASSETS.reason2})` }} 
        >
           {/* 배경 오버레이: TechnologyPage와 동일하게 어두운 톤 적용 */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center pt-10">
             <MotionDiv
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
            >
                {/* 뱃지 스타일: Glassmorphism (유리 효과) 적용 */}
                <div className="inline-flex items-center gap-2 bg-white/10 border border-yellow-400/50 text-yellow-400 px-4 py-1.5 rounded-full font-bold text-sm mb-6 backdrop-blur-md">
                    <Trophy size={16} />
                    <span>NST SYSTEM 02</span>
                </div>

                {/* 텍스트 색상: 흰색으로 변경 */}
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                    대형 건설사가 선택한<br />
                    <span className="text-nst-teal">전세대 일괄 시공 기술</span>
                </h1>

                <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                    국내 주요 건설사들과의 긴밀한 협력을 통해<br className="hidden md:block"/>
                    수많은 대규모 프로젝트에서 <span className="text-white font-bold">업계 표준</span>을 만들어왔습니다.
                </p>
            </MotionDiv>
        </div>
      </section>

      {/* 2. Main Content */}
      <section className="py-20 bg-white -mt-10 rounded-t-[2.5rem] relative z-20 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-6">
            
            {/* 뒤로가기 버튼 */}
            <button 
                onClick={onBack} 
                className="group flex items-center gap-2 text-gray-500 hover:text-nst-dark font-bold mb-12 transition-colors relative z-30"
            >
                <div className="p-2 bg-white rounded-full shadow-sm group-hover:bg-nst-teal group-hover:text-white transition-all border border-gray-100">
                    <ArrowLeft size={20} />
                </div>
                <span>메인으로 돌아가기</span>
            </button>

            {/* Section 2-1: Definition & Value */}
            <div className="mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-nst-dark mb-4">
                        왜 <span className="text-nst-teal">'전세대 일괄 시공'</span>이 중요할까요?
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        단순히 많이 하는 것이 아닙니다. 기술력과 신뢰가 없으면 불가능한 영역입니다.
                    </p>
                </div>

                <MotionDiv 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {/* Card 1: 검증된 객관적 성능 (Blue Theme) */}
                    {/* [수정] border-t-4 border-blue-500 추가 */}
                     <MotionDiv variants={itemVariants} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 border-t-4 border-t-blue-500 hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                            <FileCheck size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-nst-dark mb-3">검증된 객관적 성능</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            신축 아파트 전 세대에 일괄 시공되었다는 것은, 까다로운 실내공기질 관리 기준에 따라 공정 시험법으로 유해물질 제거 성능을 <span className="font-bold text-blue-600">객관적으로 입증</span>받았음을 의미합니다.
                        </p>
                    </MotionDiv>
                    
                    {/* Card 2: 압도적 신뢰와 전문성 (Teal Theme - Main) */}
                    {/* 기존 border-t-4 border-nst-teal 유지 */}
                     <MotionDiv variants={itemVariants} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 border-t-4 border-t-nst-teal hover:-translate-y-2 transition-transform duration-300 relative">
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Quote size={60} />
                        </div>
                        <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-nst-teal mb-6">
                            <Trophy size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-nst-dark mb-3">압도적 신뢰와 전문성</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            수십 년간 축적된 엔에스티의 기술력과 대규모 프로젝트 관리 능력은 건설사들에게 높은 평가를 받으며, 이는 곧 <span className="font-bold text-nst-teal">건축물의 가치 상승</span>과 입주민 만족도로 이어집니다.
                        </p>
                    </MotionDiv>

                    {/* Card 3: 강력한 파트너십 (Orange Theme) */}
                    {/* [수정] border-t-4 border-orange-500 추가 */}
                    <MotionDiv variants={itemVariants} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 border-t-4 border-t-orange-500 hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                            <Handshake size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-nst-dark mb-3">강력한 파트너십</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            대형 건설사들이 성공적으로 시공을 완료했다는 사실은, NST공법이 새집증후군 개선의 <span className="font-bold text-orange-600">업계 표준(Standard)</span>임을 입증하는 가장 강력한 근거입니다.
                        </p>
                    </MotionDiv>
                </MotionDiv>
            </div>
            
             {/* Section 2-2: Project Reference Banner */}
             <div className="mb-24 bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-nst-teal opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2 space-y-8">
                        <div>
                            <span className="text-nst-teal font-bold tracking-widest text-sm uppercase mb-2 block">Project Reference</span>
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                현장이 증명하는<br/>
                                <span className="text-white/50">NST의 존재감</span>
                            </h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            "청주시 최초 실내공기질 개선", "친환경 주거명작"...<br/>
                            건설 현장 외벽에 당당히 걸린 NST 시공 현수막들은 
                            우리의 기술력이 입주민에게 약속하는 <span className="text-white font-bold underline decoration-nst-teal underline-offset-4">품질 보증서</span>와 같습니다.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
                            <div>
                                <div className="text-4xl font-bold text-white mb-1">57,000<span className="text-nst-teal text-2xl">+</span></div>
                                <div className="text-gray-400 text-sm">누적 시공량</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-white mb-1">Top<span className="text-nst-teal text-2xl">Tier</span></div>
                                <div className="text-gray-400 text-sm">대형 건설사 파트너</div>
                            </div>
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div className="md:w-1/2 grid grid-cols-2 gap-4">
                        <div className="bg-white/10 rounded-2xl h-48 md:h-64 overflow-hidden border border-white/10 relative group">
                            {/* [수정] 현수막 이미지 경로 실제 파일로 연결 */}
                            <img src="/images/reason/track_banner_01.jpg" alt="Building Banner 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                            <div className="absolute bottom-4 left-4 font-bold text-sm bg-black/50 px-2 py-1 rounded backdrop-blur-sm">시공 현장 전경</div>
                        </div>
                        <div className="bg-white/10 rounded-2xl h-48 md:h-64 overflow-hidden border border-white/10 relative group mt-8">
                            <img src={ASSETS.step1} alt="Building Banner 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                            <div className="absolute bottom-4 left-4 font-bold text-sm bg-black/50 px-2 py-1 rounded backdrop-blur-sm">NST 시공 인증</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2-3: Bottom Features */}
            <div className="grid md:grid-cols-2 gap-6">
                <MotionDiv 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-green-50 p-8 rounded-3xl border border-green-100 flex items-start gap-4"
                >
                    <div className="bg-green-100 p-3 rounded-full text-green-700 shrink-0 mt-1">
                        <Building2 size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-green-900 mb-2">대규모 프로젝트 일괄 시공 완료</h4>
                        <p className="text-green-800/80 text-sm leading-relaxed">
                            주요 건설사 신축아파트 전세대 시공 프로젝트를 성황리에 마무리하며 
                            NST공법의 기술력과 대규모 시공 능력을 입증하였습니다.
                        </p>
                    </div>
                </MotionDiv>

                <MotionDiv 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-teal-50 p-8 rounded-3xl border border-teal-100 flex items-start gap-4"
                >
                    <div className="bg-teal-100 p-3 rounded-full text-nst-teal shrink-0 mt-1">
                        <Users size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-teal-900 mb-2">업계 시공 표준, NST 공법</h4>
                        <p className="text-teal-800/80 text-sm leading-relaxed">
                            친환경 NST공법을 통해 전세대에 맞춤형 실내공기질 개선 솔루션을 
                            일괄 시공하여 쾌적하고 건강한 주거 환경을 제공하였습니다.
                        </p>
                    </div>
                </MotionDiv>
            </div>

        </div>
      </section>
    </div>
  );
};

export default TrackRecordPage;
