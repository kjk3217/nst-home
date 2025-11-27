import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Microscope, 
  Coins, 
  ShieldCheck, 
  Factory, 
  CheckCircle2 
} from 'lucide-react';
import { ASSETS } from '../constants';

const MotionDiv = motion.div as any;
const MotionH2 = motion.h2 as any;
const MotionP = motion.p as any;

const OneStopPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white min-h-screen relative overflow-x-hidden">
      
      {/* 1. New Hero Section with Parallax Feel */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
          style={{ backgroundImage: `url(${ASSETS.reason1})` }} 
        >
          <div className="absolute inset-0 bg-nst-dark/80 backdrop-blur-[2px]" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
            <MotionDiv
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span className="inline-block py-1 px-3 rounded-full bg-nst-teal/20 text-nst-teal border border-nst-teal/50 font-bold text-sm mb-4 backdrop-blur-sm">
                    NST SYSTEM 01
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    원료부터 시공까지<br />
                    <span className="text-nst-teal">완벽한 원스톱 시스템</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                    엔에스티는 실내공기질 개선을 위한 모든 과정을<br className="hidden md:block" />
                    <span className="text-white font-medium">직접 수행하여 고객에게 최고의 가치를 제공합니다.</span>
                </p>
            </MotionDiv>
        </div>
      </section>

      {/* 2. Main Content Section */}
      <section className="py-20 bg-gray-50 -mt-10 rounded-t-[2.5rem] relative z-20">
        <div className="container mx-auto px-6">
            
            {/* Navigation Back Button */}
            <button 
                onClick={onBack} 
                className="group flex items-center gap-2 text-gray-500 hover:text-nst-dark font-bold mb-12 transition-colors"
            >
                <div className="p-2 bg-white rounded-full shadow-sm group-hover:bg-nst-teal group-hover:text-white transition-all">
                    <ArrowLeft size={20} />
                </div>
                <span>메인으로 돌아가기</span>
            </button>

            {/* Process Flow Visualization (PDF 상단의 흐름도 개념 시각화) */}
            <div className="mb-24">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-nst-dark">
                        중간 유통 없는 <span className="text-nst-teal">다이렉트 프로세스</span>
                    </h2>
                </div>
                
                <MotionDiv 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {[
                        { title: "원료 관리", icon: Microscope, step: "01" },
                        { title: "연구 개발", icon: Factory, step: "02" },
                        { title: "제품 생산", icon: CheckCircle2, step: "03" },
                        { title: "책임 시공", icon: ShieldCheck, step: "04" }
                    ].map((item, idx) => (
                        <MotionDiv 
                            key={idx}
                            variants={itemVariants}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center relative overflow-hidden group hover:shadow-md transition-shadow"
                        >
                            <div className="absolute top-0 right-0 p-3 opacity-10 font-black text-4xl text-gray-300 group-hover:text-nst-teal transition-colors">
                                {item.step}
                            </div>
                            <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center text-nst-teal mb-4 group-hover:scale-110 transition-transform">
                                <item.icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-bold text-gray-800">{item.title}</h3>
                            {idx < 3 && (
                                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10 text-gray-300">
                                    ▶
                                </div>
                            )}
                        </MotionDiv>
                    ))}
                </MotionDiv>
            </div>

            {/* 3. Detailed Benefits Cards (PDF 핵심 내용 반영) */}
            <div className="space-y-8 md:space-y-12 max-w-5xl mx-auto">
                
                {/* Card 1: 품질 관리 */}
                <MotionDiv 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100"
                >
                    <div className="md:w-1/3 bg-nst-dark p-8 flex flex-col justify-center items-center text-white text-center">
                        <Microscope size={64} className="mb-6 text-nst-teal opacity-80" />
                        <h3 className="text-2xl font-bold mb-2">철저한<br/>품질 관리</h3>
                        <p className="text-white/60 text-sm">Perfect Quality Control</p>
                    </div>
                    <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                        <h4 className="text-xl font-bold text-nst-dark mb-4 border-b border-gray-100 pb-4">
                            모든 과정을 직접 관리하여 최고 수준 보장
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                            제품 원료 확보부터 개발, 그리고 생산에 이르기까지 모든 과정을 
                            <span className="font-bold text-nst-dark"> 엔에스티가 직접 관리</span>하여 
                            최고 수준의 품질을 보장합니다. 이는 고객 만족으로 이어지는 핵심적 요소입니다.
                        </p>
                    </div>
                </MotionDiv>

                {/* Card 2: 비용 효율성 */}
                <MotionDiv 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row-reverse bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100"
                >
                    <div className="md:w-1/3 bg-teal-600 p-8 flex flex-col justify-center items-center text-white text-center">
                        <Coins size={64} className="mb-6 text-yellow-300 opacity-90" />
                        <h3 className="text-2xl font-bold mb-2">뛰어난<br/>비용 효율성</h3>
                        <p className="text-white/80 text-sm">Cost Efficiency</p>
                    </div>
                    <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center text-right md:text-left">
                        <h4 className="text-xl font-bold text-nst-dark mb-4 border-b border-gray-100 pb-4">
                            중간 유통 거품을 뺀 합리적 가격
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                            모든 원료를 직접 관리하고 중간 유통 과정 없이 
                            <span className="font-bold text-teal-600 bg-teal-50 px-1"> 직접 연구개발 및 생산/공급</span>하여
                            불필요한 비용을 절감합니다. 합리적 비용으로 고품질 새집증후군 개선 서비스를 경험하실 수 있습니다.
                        </p>
                    </div>
                </MotionDiv>

                {/* Card 3: 책임감 있는 서비스 */}
                <MotionDiv 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100"
                >
                    <div className="md:w-1/3 bg-gray-800 p-8 flex flex-col justify-center items-center text-white text-center">
                        <ShieldCheck size={64} className="mb-6 text-green-400 opacity-90" />
                        <h3 className="text-2xl font-bold mb-2">책임감 있는<br/>서비스</h3>
                        <p className="text-white/60 text-sm">Responsible Service</p>
                    </div>
                    <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                        <h4 className="text-xl font-bold text-nst-dark mb-4 border-b border-gray-100 pb-4">
                            '내 집처럼' 케어하는 본사 직영 시스템
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                            본사와 직접 계약한 사업자만 NST공법 시공을 하기 때문에 품질 관리가 수월하고 
                            <span className="font-bold text-red-500 bg-red-50 px-1"> 문제 발생 시 신속한 대응</span>이 가능합니다. 
                            제품 개발부터 생산, 시공까지 고객님의 소중한 공간을 책임집니다.
                        </p>
                    </div>
                </MotionDiv>

            </div>

            {/* Bottom Badge Section (PDF 우측 하단 뱃지 형상화) */}
            <MotionDiv 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-20 text-center"
            >
                <div className="inline-block bg-white p-8 rounded-full shadow-xl border-4 border-green-100 relative">
                    <div className="absolute inset-0 rounded-full border border-green-500 animate-pulse"></div>
                    <img src="/images/hero/mascot.png" alt="NST Mascot" className="w-32 h-32 object-contain mx-auto mb-4" /> {/* 마스코트 이미지 활용 */}
                    <h3 className="text-xl font-bold text-green-600">실내공기질개선 시공</h3>
                    <p className="text-gray-500 text-sm mt-1">유해공기분해/정화 & 유해물질 방출차단</p>
                    <div className="text-2xl font-black text-nst-dark mt-2 tracking-widest">NST 공법</div>
                </div>
            </MotionDiv>

        </div>
      </section>
    </div>
  );
};

export default OneStopPage;
