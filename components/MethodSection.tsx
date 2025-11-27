import React from 'react';
import { motion } from 'framer-motion';
import { STEPS } from '../constants';
import { PageType } from '../types';
import { RefreshCw } from 'lucide-react'; // 아이콘 추가

const MotionH2 = motion.h2 as any;
const MotionP = motion.p as any;
const MotionDiv = motion.div as any;

// [수정] Props 인터페이스 정의
interface MethodSectionProps {
  onNavigate?: (page: PageType) => void;
}

const MethodSection: React.FC<MethodSectionProps> = ({ onNavigate }) => {

  // [수정] 클릭 핸들러 추가
  const handleCardClick = (index: number) => {
    if (!onNavigate) return;
    if (index === 0) onNavigate('method-step1');
    if (index === 1) onNavigate('method-step2');
    if (index === 2) onNavigate('method-step3');
  };

  return (
    <section id="method" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <MotionH2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-nst-dark mb-4"
          >
            NST 공법 <span className="text-nst-teal">3단계 맞춤 시공</span>
          </MotionH2>
          <MotionP 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-gray-600 text-lg"
          >
            단순 코팅이 아닌, 공기를 설계하는 과학적인 3단계 메커니즘입니다.
            <br className="md:hidden" />
            <span className="text-sm text-nst-teal mt-2 inline-block font-medium">
              * 카드를 클릭하면 상세 원리를 확인하실 수 있습니다.
            </span>
          </MotionP>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onClick={() => handleCardClick(index)} // 클릭 이벤트 연결
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-nst-teal shadow-md text-xl">
                  {step.step}
                </div>
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white font-bold border border-white/50 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                        상세보기 <RefreshCw size={16} />
                    </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="text-sm font-bold text-nst-teal mb-2 block">{step.subTitle}</span>
                <h3 className="text-xl font-bold text-nst-dark mb-4 break-keep">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm break-keep">
                  {step.description}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MethodSection;
