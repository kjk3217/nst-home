import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { REASONS } from '../constants';
import { ChevronDown, RefreshCw } from 'lucide-react';
import { PageType } from '../types'; // PageType import 확인

const MotionH2 = motion.h2 as any;
const MotionP = motion.p as any;
const MotionDiv = motion.div as any;

// [수정] onNavigate prop 추가
interface ReasonSectionProps {
  onNavigate: (page: PageType) => void;
}

const ReasonSection: React.FC<ReasonSectionProps> = ({ onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // [수정] 카드 클릭 핸들러: 단순히 active 상태만 바꾸는 게 아니라 페이지 이동 처리
  const handleCardClick = (index: number) => {
    // 0: 원스톱, 1: 실적, 2: 기술
    if (index === 0) onNavigate('one-stop');
    if (index === 1) onNavigate('track-record');
    if (index === 2) onNavigate('technology');
  };

  return (
    <section id="reason" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <MotionH2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-nst-dark mb-4"
          >
            왜 NST 공법인가?
          </MotionH2>
          <MotionP 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-gray-600 text-lg"
          >
            차별화된 기술력과 안전성으로 압도적인 실내공기질 개선 효과를 약속합니다.
            <br className="md:hidden" />
            <span className="text-sm text-nst-teal mt-2 inline-block font-medium">
              * 카드를 클릭하면 상세 페이지로 이동합니다.
            </span>
          </MotionP>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REASONS.map((reason, index) => {
            const isActive = activeIndex === index;

            return (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                onClick={() => handleCardClick(index)}
                className={`group relative h-[450px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2`}
              >
                {/* Background Image - 평소엔 기본, 호버시 active 이미지 살짝 보여주기 등 연출 가능하지만 여기선 기본 이미지만 사용하거나 activeImage 사용 */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                  style={{ 
                    // 카드가 '활성' 상태가 아니더라도 호버 시 active 이미지를 보여줄 수도 있음
                    backgroundImage: `url(${reason.activeImage || reason.image})` 
                  }}
                />
                
                {/* Color Overlay */}
                <div className={`absolute inset-0 transition-all duration-500 opacity-60 group-hover:opacity-40 ${reason.colorOverlay}`} />

                {/* Content Layout */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                  
                  {/* Top Row */}
                  <div className="flex justify-between items-start">
                    <div className="backdrop-blur-md p-4 rounded-2xl bg-white/20 group-hover:bg-nst-teal/90 transition-colors duration-300">
                      <reason.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold leading-tight break-keep drop-shadow-md">
                      {reason.title}
                    </h3>
                    <div className="h-0.5 w-12 bg-white/50 group-hover:bg-nst-teal transition-colors" />
                    <p className="text-white/90 leading-relaxed font-light break-keep text-sm md:text-base drop-shadow-md">
                      {reason.description}
                    </p>
                    <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 font-bold text-sm">
                        상세보기 <RefreshCw size={16} />
                    </div>
                  </div>

                </div>
              </MotionDiv>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ReasonSection;
