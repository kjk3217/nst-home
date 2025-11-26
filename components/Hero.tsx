import React, { useState } from 'react';
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
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ASSETS.heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-nst-dark/90 via-nst-dark/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 grid md:grid-cols-2 gap-12 items-center pt-20">
        
        {/* Left: Text Content */}
        <MotionDiv 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-6"
        >
          <div className="flex items-center gap-2">
            <span className="bg-yellow-500 text-nst-dark font-bold px-3 py-1 rounded-full text-sm">SINCE 2009</span>
            <span className="text-nst-teal font-medium tracking-wide">새집증후군 개선 토탈 솔루션</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            대형 건설사가 검증하고<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nst-teal to-green-400">
              선택한, NST
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-bold text-gray-200">
            <span className="text-nst-teal">20년 노하우</span>의 친환경<br />
            NST 공법
          </h2>

          <p className="text-gray-300 text-lg md:text-xl max-w-lg">
            새집증후군 개선의 원조 기술이자 표준 기술.<br />
            NST 공법이 고객님의 건강하고 쾌적한 주거 환경을 설계합니다.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={onNavigateRecruit}
              className="bg-nst-teal hover:bg-teal-600 text-white font-bold py-4 px-8 rounded shadow-lg transition-transform transform hover:scale-105"
            >
              신규 사업자 모집
            </button>
            <button 
              onClick={onNavigateBranches}
              className="border border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded shadow-lg transition-colors"
            >
              전국 시공 지사 안내
            </button>
          </div>
        </MotionDiv>

        {/* Right: Floating Badges / 3D Element Placeholder */}
        <MotionDiv 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex flex-col items-end gap-6"
        >
          {/* Award Badge */}
          <MotionDiv 
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md border-l-4 border-yellow-500 p-6 rounded-r-lg w-full max-w-sm"
          >
            <div className="flex items-center gap-4 text-white">
              <Award className="text-yellow-400 w-10 h-10" />
              <div>
                <h3 className="font-bold text-lg">2025 Winner</h3>
                <p className="text-sm text-gray-300">대한민국 환경 대상 수상</p>
              </div>
            </div>
          </MotionDiv>

          {/* Construction Badge */}
          <MotionDiv 
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md border-l-4 border-nst-teal p-6 rounded-r-lg w-full max-w-sm"
          >
            <div className="flex items-center gap-4 text-white">
              <Home className="text-nst-teal w-10 h-10" />
              <div>
                <h3 className="font-bold text-lg">1,018+</h3>
                <p className="text-sm text-gray-300">대형건설사 시공 검증</p>
              </div>
            </div>
          </MotionDiv>

           {/* Verification Badge */}
           <MotionDiv 
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md border-l-4 border-green-500 p-6 rounded-r-lg w-full max-w-sm"
          >
            <div className="flex items-center gap-4 text-white">
              <CheckCircle className="text-green-500 w-10 h-10" />
              <div>
                <h3 className="font-bold text-lg">친환경</h3>
                <p className="text-sm text-gray-300">환경부 교차 검증 완료</p>
              </div>
            </div>
          </MotionDiv>
          
          {/* Mascot Placeholder */}
          <MotionDiv
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative mt-8"
          >
             {/* Replace with transparent PNG mascot */}
             <div className="w-48 h-48 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${ASSETS.mascot})`, borderRadius: '50%' }}></div>
          </MotionDiv>

        </MotionDiv>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce">
        <span className="text-xs tracking-widest mb-2">SCROLL DOWN</span>
        <ArrowDown size={20} />
      </div>
    </section>
  );
};

export default Hero;