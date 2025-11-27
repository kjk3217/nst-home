import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Skull, Baby, Activity } from 'lucide-react'; // 더 직관적인 아이콘 사용

const MotionDiv = motion.div as any;

const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* 배경에 깔리는 은은한 경고 텍스트 (타이포그래피 효과) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none select-none opacity-[0.03]">
        <div className="text-[20vw] font-black text-red-600 leading-none whitespace-nowrap absolute -top-10 -left-10 rotate-12">
          DANGER
        </div>
        <div className="text-[20vw] font-black text-gray-900 leading-none whitespace-nowrap absolute bottom-0 right-0 -rotate-12">
          WARNING
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* 헤더: 강렬한 메시지 전달 */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-1.5 rounded-full font-bold text-sm mb-6 border border-red-200"
          >
            <AlertTriangle size={16} fill="currentColor" />
            <span>긴급 점검이 필요합니다</span>
          </MotionDiv>
          
          <MotionDiv
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
              설레는 새 집이<br className="md:hidden" /> 
              <span className="relative inline-block px-2">
                <span className="absolute inset-0 bg-red-500/10 -skew-x-6 transform"></span>
                <span className="relative text-red-600">가족의 건강을 위협!</span>
              </span>

            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed break-keep">
              새 가구와 자재에서 뿜어져 나오는 <span className="font-bold text-slate-900 underline decoration-red-400 decoration-2 underline-offset-4">1급 발암물질</span>.
              <br className="hidden md:block"/>
              보이지 않기에 더 치명적이며, 특히 면역력이 약한 아이들에게는 독이 됩니다.
            </p>
          </MotionDiv>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: 시각적 충격 (이미지 영역) */}
          <MotionDiv 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* 이미지 프레임: 경고 테두리 느낌 */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200 h-[500px] group">
              {/* [이미지 교체 요청] 
                  여기에 'problem_visual_new.jpg' 같은 조금 더 심각한 이미지를 넣어주세요.
                  현재는 기존 이미지를 흑백+노이즈 처리하여 분위기를 맞췄습니다.
              */}
              <img 
                src="/images/problem/visual.png" 
                alt="새집증후군의 공포" 
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* 덮어씌우는 붉은 필터 효과 */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-transparent to-transparent opacity-80"></div>

              {/* 이미지 위 플로팅 카드 1: 수치 강조 */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-l-4 border-red-500">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-full text-red-600 shrink-0">
                    <Skull size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-red-600 text-lg mb-1">침묵의 암살자,<br/>폼알데하이드</h4>
                    <p className="text-sm text-slate-600 leading-snug">
                      기준치의 최대 <span className="font-black text-slate-900 text-base">5배 이상</span> 초과 검출.<br/>
                      환기만으로는 절대 사라지지 않습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>

          {/* Right: 구체적인 피해 사실 (카드 리스트) */}
          <div className="space-y-6">
            
            {/* Card 1 */}
            <MotionDiv
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-start gap-5 hover:shadow-lg transition-shadow hover:border-red-100 group"
            >
              <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-red-500 group-hover:text-white transition-colors shrink-0">
                <Activity size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-red-600 transition-colors">지속적인 유해물질 방출</h3>
                <p className="text-slate-600 leading-relaxed">
                  건축 자재 및 붙박이장 내부에서 폼알데하이드와 VOCs가 
                  <span className="font-bold text-slate-800 bg-yellow-100 px-1 mx-1">최대 5년간</span> 
                  지속적으로 뿜어져 나와 호흡기를 공격합니다.
                </p>
              </div>
            </MotionDiv>

            {/* Card 2 */}
            <MotionDiv
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-start gap-5 hover:shadow-lg transition-shadow hover:border-red-100 group"
            >
              <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-red-500 group-hover:text-white transition-colors shrink-0">
                <AlertTriangle size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-red-600 transition-colors">원인 모를 신체 이상 증상</h3>
                <p className="text-slate-600 leading-relaxed">
                  이유 없는 두통, 눈 따가움, 만성 피로. 
                  단순한 컨디션 난조가 아닌 <span className="font-bold text-slate-800">몸이 보내는 위험 신호</span>일 수 있습니다.
                </p>
              </div>
            </MotionDiv>

            {/* Card 3 */}
            <MotionDiv
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-start gap-5 hover:shadow-lg transition-shadow hover:border-red-100 group"
            >
              <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-red-500 group-hover:text-white transition-colors shrink-0">
                <Baby size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-red-600 transition-colors">우리 아이에게 가장 치명적</h3>
                <p className="text-slate-600 leading-relaxed">
                  바닥 생활을 많이 하고 호흡량이 많은 영유아에게는 성인보다 
                  <span className="font-bold text-slate-800 bg-yellow-100 px-1 mx-1">2배 이상 치명적</span>이며, 
                  평생 가는 아토피 질환의 원인이 됩니다.
                </p>
              </div>
            </MotionDiv>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
