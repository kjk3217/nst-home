import React from 'react';
import { motion } from 'framer-motion';
import { PROBLEMS } from '../constants';
// Search 아이콘 import 제거

const MotionDiv = motion.div as any;

const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Left: Decorative / Context */}
          <div className="w-full md:w-1/3 relative">
            <MotionDiv 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-nst-dark leading-snug">
                설레는 새 보금자리,<br />
                <span className="text-nst-teal">과연 안전할까요?</span>
              </h2>
              <p className="text-gray-600">
                가구와 벽지 속 숨어있는 유해물질, '침묵의 암살자' 새집증후군을 유발합니다.
              </p>
              
              {/* Abstract decorative graphic */}
              <div className="relative mt-12 h-64 w-full">
                 {/* 배경 Blob 효과는 유지하여 은은한 분위기 연출 */}
                 <div className="absolute top-10 left-10 w-40 h-40 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                 <div className="absolute top-10 right-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                 <div className="absolute -bottom-8 left-20 w-40 h-40 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                 
                 {/* 돋보기 아이콘 삭제 및 이미지로 대체 */}
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {/* [CHECK] 준비된 이미지 경로로 src를 수정해주세요.
                       예: src="/images/problem_visual.png" 또는 constants의 ASSETS.mascot 등
                    */}
                    <img 
                      src="/images/problem/visual.png" 
                      alt="새집증후군 문제 인식" 
                      className="w-96 h-auto object-contain drop-shadow-2xl relative z-10"
                    />
                 </div>
              </div>
            </MotionDiv>
          </div>

          {/* Right: Problem Cards */}
          <div className="w-full md:w-2/3 space-y-6">
            {PROBLEMS.map((problem, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="bg-gray-50 p-4 rounded-full shrink-0">
                  <problem.icon className="w-8 h-8 text-nst-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-nst-dark mb-2">{problem.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                </div>
              </MotionDiv>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
