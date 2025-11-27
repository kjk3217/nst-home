import React from 'react';
import { motion } from 'framer-motion';
import { ASSETS } from '@/constants';
import { ArrowDown, Award, Home, CheckCircle } from 'lucide-react';

const MotionDiv = motion.div as any;

interface HeroProps {
  onNavigateRecruit: () => void;
  onNavigateBranches: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigateRecruit, onNavigateBranches }) => {
  return (
    <section className="relative w-full h-[100dvh] min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      {/* [수정] 배경 그라디언트를 더 부드럽고 넓게 조정하여 텍스트 가독성 확보 */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ASSETS.heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 md:bg-gradient-to-r md:from-[#0f2940] md:via-[#0f2940]/70 md:to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10 grid md:grid-cols-2 gap-12 items-center h-full pt-20 pb-10">
        
        {/* Left: Text Content */}
        <MotionDiv 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white flex flex-col justify-center h-full md:block pl-2 md:pl-0"
        >
          {/* Badge & Sublabel */}
          {/* [수정] 뱃지와 텍스트 사이 간격 조정 */}
          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <span className="bg-amber-500 text-white font-bold px-4 py-1.5 rounded-full text-xs md:text-sm shadow-lg tracking-wide uppercase">
              Since 2009
            </span>
            <span className="text-yellow-400 font-bold tracking-tight text-base md:text-lg drop-shadow-sm">
              새집증후군 개선 토탈 솔루션
            </span>
          </div>

          {/* Main Headline */}
          {/* [수정] 폰트 사이즈 키우고 줄간격(leading) 조정, 여백(mb) 증가 */}
          <h1 className="text-5xl md:text-7xl font-black leading-[1.15] mb-8 md:mb-10 tracking-tight drop-shadow-md">
            대형 건설사가<br />
            검증하고<br />
            선택한, NST
          </h1>
          
          {/* Sub Headline with Colors */}
          {/* [수정] 서브 헤드라인 여백 증가 및 강조 */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-100 mb-8 md:mb-10 leading-snug">
            <span className="text-[#4ade80]">20년 노하우</span>의<br className="md:hidden" /> 
             친환경 <span className="text-amber-400 border-b-4 border-amber-400/30 pb-1">NST 공법</span>
          </h2>

          {/* Description */}
          {/* [수정] 설명글 폰트 두께 상향(font-medium) 및 줄간격(leading-relaxed) 확보 */}
          <p className="text-gray-300 text-base md:text-xl max-w-lg mb-10 md:mb-12 leading-loose font-normal md:font-medium opacity-90 break-keep">
            새집증후군 개선의 원조 기술이자 표준 기술.<br />
            NST가 고객님의 건강하고 쾌적한 주거 환경을 설계합니다.
          </p>

          {/* Buttons Area */}
          {/* [수정] 버튼 사이 간격(gap) 확대 및 디자인 다듬기 */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto mt-2 md:mt-0">
            <button 
              onClick={onNavigateRecruit}
              className="w-full md:w-auto bg-nst-teal hover:bg-teal-600 text-white font-bold py-4 px-10 rounded-lg shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl text-center text-lg flex items-center justify-center gap-2 group"
            >
              신규 사업자 모집
              {/* 화살표 아이콘 추가로 행동 유도 */}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button 
              onClick={onNavigateBranches}
              className="w-full md:w-auto border-2 border-white/30 bg-white/5 hover:bg-white hover:text-nst-dark text-white font-bold py-4 px-10 rounded-lg shadow-lg transition-all text-center text-lg backdrop-blur-sm"
            >
              전국 시공 지사 안내
            </button>
          </div>
        </MotionDiv>

        {/* Right: Floating Badges (Desktop Only) */}
        {/* [수정] 오른쪽 카드들의 간격과 디자인을 조금 더 세련되게 다듬음 */}
        <MotionDiv 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex flex-col items-end gap-8 mt-12"
        >
          <MotionDiv 
            whileHover={{ x: -10 }} 
            className="bg-white/10 backdrop-blur-md border-l-4 border-yellow-500 p-6 rounded-r-xl w-full max-w-sm shadow-lg hover:bg-white/15 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-5 text-white">
              <div className="bg-yellow-500/20 p-3 rounded-full">
                <Award className="text-yellow-400 w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">2025 Winner</h3>
                <p className="text-sm text-gray-300 font-medium">대한민국 환경 대상 수상</p>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv 
            whileHover={{ x: -10 }} 
            className="bg-white/10 backdrop-blur-md border-l-4 border-nst-teal p-6 rounded-r-xl w-full max-w-sm shadow-lg hover:bg-white/15 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-5 text-white">
              <div className="bg-nst-teal/20 p-3 rounded-full">
                <Home className="text-nst-teal w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">1,018+</h3>
                <p className="text-sm text-gray-300 font-medium">대형건설사 시공 검증</p>
              </div>
            </div>
          </MotionDiv>

           <MotionDiv 
            whileHover={{ x: -10 }} 
            className="bg-white/10 backdrop-blur-md border-l-4 border-green-500 p-6 rounded-r-xl w-full max-w-sm shadow-lg hover:bg-white/15 transition-all cursor-pointer"
           >
            <div className="flex items-center gap-5 text-white">
              <div className="bg-green-500/20 p-3 rounded-full">
                <CheckCircle className="text-green-500 w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">친환경</h3>
                <p className="text-sm text-gray-300 font-medium">환경부 교차 검증 완료</p>
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
        <div className="flex flex-col items-center text-white/60 animate-bounce">
          <span className="text-[10px] md:text-xs tracking-[0.3em] mb-3 font-light uppercase">Scroll Down</span>
          <ArrowDown size={24} strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
