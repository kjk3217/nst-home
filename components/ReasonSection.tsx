{
type: uploaded file
fileName: kjk3217/nst-home/nst-home-e5ce3404496c9d567ed05467249202fc7c99f87e/components/ReasonSection.tsx
fullContent:
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { REASONS } from '../constants';
import { ChevronDown, RefreshCw } from 'lucide-react'; // [아이콘 추가] 상태 복귀를 나타내는 아이콘(선택사항)

const MotionH2 = motion.h2 as any;
const MotionP = motion.p as any;
const MotionDiv = motion.div as any;

const ReasonSection: React.FC = () => {
  // [수정 1] 활성화된(클릭된) 카드의 인덱스를 저장하는 State
  // null이면 아무것도 클릭되지 않은 초기 상태
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // [수정 2] 클릭 핸들러: 이미 활성화된 카드를 누르면 초기화(null), 아니면 해당 인덱스로 설정
  const handleCardClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
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
              * 카드를 클릭하면 상세 이미지를 확인할 수 있습니다.
            </span>
          </MotionP>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REASONS.map((reason, index) => {
            // [수정 3] 현재 카드가 활성화 상태인지 확인
            const isActive = activeIndex === index;

            return (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                onClick={() => handleCardClick(index)} // 클릭 이벤트 연결
                className={`group relative h-[450px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                  isActive ? 'ring-4 ring-nst-teal ring-opacity-50' : ''
                }`}
              >
                {/* Background Image */}
                {/* [수정 4] 활성화 시 activeImage가 있으면 그것을 보여주고, 없으면 원래 image 유지 */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                  style={{ 
                    backgroundImage: `url(${isActive && reason.activeImage ? reason.activeImage : reason.image})`,
                    transform: isActive ? 'scale(1.05)' : 'scale(1)' // 클릭 시 살짝 확대 효과 유지
                  }}
                />
                
                {/* Color Overlay */}
                {/* [수정 5] 활성화 되면 배경을 투명(bg-transparent/0)하게 변경 */}
                <div 
                  className={`absolute inset-0 transition-all duration-500 ${
                    isActive ? 'bg-black/10' : reason.colorOverlay
                  }`} 
                />

                {/* Content Layout */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                  
                  {/* Top Row: Icon and Chevron */}
                  <div className="flex justify-between items-start">
                    <div className={`backdrop-blur-md p-4 rounded-2xl transition-colors duration-300 ${isActive ? 'bg-nst-teal/90' : 'bg-white/20'}`}>
                      <reason.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className={`p-2 rounded-full transition-all duration-300 ${isActive ? 'bg-nst-teal text-white rotate-180' : 'bg-white/20 opacity-60 group-hover:opacity-100'}`}>
                       {isActive ? <RefreshCw className="w-5 h-5" /> : <ChevronDown className="w-5 h-5 text-white" />}
                    </div>
                  </div>

                  {/* Bottom Row: Text Content */}
                  {/* [수정 6] 활성화 되어 배경이 투명해지면, 글자가 잘 안보일 수 있으므로 텍스트 그림자(drop-shadow) 추가 및 불투명도 조절 */}
                  <div className={`space-y-4 transition-opacity duration-300 ${isActive ? 'opacity-0 md:opacity-100 md:drop-shadow-lg' : 'opacity-100'}`}>
                    <h3 className="text-2xl font-bold leading-tight break-keep drop-shadow-md">
                      {reason.title}
                    </h3>
                    <div className={`h-0.5 w-12 transition-colors ${isActive ? 'bg-nst-teal' : 'bg-white/50'}`} />
                    <p className="text-white/90 leading-relaxed font-light break-keep text-sm md:text-base drop-shadow-md">
                      {reason.description}
                    </p>
                  </div>
                  
                  {/* 모바일 등에서 활성화 시 텍스트가 사라지게 하고 싶다면 위 opacity-0 등을 조정하세요. 
                      현재는 텍스트 가독성을 위해 drop-shadow를 추가하여 유지했습니다. */}

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
}
