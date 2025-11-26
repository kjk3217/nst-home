import React from 'react';
import { motion } from 'framer-motion';
import { ASSETS } from '../constants';
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
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ASSETS.heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 md:bg-gradient-to-r md:from-nst-dark/90 md:via-nst-dark/60 md:to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-6 z-10 grid md:grid-cols-2 gap-12 items-center h-full pt-20 pb-10">
        
        {/* Left: Text Content */}
        <MotionDiv 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white flex flex-col justify-center h-full md:block"
        >
          {/* Badge & Sublabel */}
          <div className="flex items-center gap-3 mb-8 md:mb-6">
            <span className="bg-amber-500 text-white font-bold px-3 py-1 rounded-full text-[11px] md:text-sm shadow-md tracking-wide">
              SINCE 2009
            </span>
            <span className="text-[#00a99d] md:text-nst-teal font-medium tracking-tight text-sm md:text-sm">
              새집증후군 개선 토탈 솔루션
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-6 md:mb-6 tracking-tight">
            대형 건설사가<br />
            검증하고<br />
            선택한, NST
          </h1>
          
          {/* Sub Headline with Colors */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 leading-snug">
            <span className="text-[#4ade80]">20년 노하우</span>의<br />
            친환경 <span className="text-amber-400 border-b-2 border-amber-400/50 pb-1">NST 공법</span>
          </h2>

          {/* Description */}
          <p className="text-gray-200 text-base md:text-xl max-w-lg mb-10 md:mb-10 leading-relaxed font-light opacity-90">
            새집증후군 개선의 원조 기술이자 표준 기술.<br />
            NST가 고객님의 건강하고 쾌적한 주거<br className="md:hidden" /> 환경을 설계합니다.
          </p>

          {/* Buttons Area */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-auto mt-4 md:mt-0">
            <button 
              onClick={onNavigateRecruit}
              className="w-full md:w-auto bg-nst-teal hover:bg-teal-600 text-white font-bold py-4 px-8 rounded md:rounded shadow-lg transition-transform transform hover:scale-105 text-center text-lg"
            >
              신규 사업자 모집
            </button>
            <button 
              onClick={onNavigateBranches}
              className="w-full md:w-auto border border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded md:rounded shadow-lg transition-colors text-center text-lg"
            >
              전국 시공 지사 안내
            </button>
          </div>
        </MotionDiv>

        {/* Right: Floating Badges (Desktop Only) */}
        <MotionDiv 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex flex-col items-end gap-6"
        >
          <MotionDiv whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-md border-l-4 border-yellow-500 p-6 rounded-r-lg w-full max-w-sm">
            <div className="flex items-center gap-4 text-white">
              <Award className="text-yellow-400 w-10 h-10" />
              <div>
                <h3 className="font-bold text-lg">2025 Winner</h3>
                <p className="text-sm text-gray-300">대한민국 환경 대상 수상</p>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-md border-l-4 border-nst-teal p-6 rounded-r-lg w-full max-w-sm">
            <div className="flex items-center gap-4 text-white">
              <Home className="text-nst-teal w-10 h-10" />
              <div>
                <h3 className="font-bold text-lg">1,018+</h3>
                <p className="text-sm text-gray-300">대형건설사 시공 검증</p>
              </div>
            </div>
          </MotionDiv>

           <MotionDiv whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-md border-l-4 border-green-500 p-6 rounded-r-lg w-full max-w-sm">
            <div className="flex items-center gap-4 text-white">
              <CheckCircle className="text-green-500 w-10 h-10" />
              <div>
                <h3 className="font-bold text-lg">친환경</h3>
                <p className="text-sm text-gray-300">환경부 교차 검증 완료</p>
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>

      {/* Scroll Indicator - [수정됨] 위치 잡는 div와 애니메이션 div 분리 */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-white/80 animate-bounce">
          <span className="text-[10px] md:text-xs tracking-widest mb-2 font-light">SCROLL DOWN</span>
          <ArrowDown size={20} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
