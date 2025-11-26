import React from 'react';
import { motion } from 'framer-motion';
import { REASONS } from '../constants';
import { ChevronDown } from 'lucide-react';

const MotionH2 = motion.h2 as any;
const MotionP = motion.p as any;
const MotionDiv = motion.div as any;

const ReasonSection: React.FC = () => {
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
          </MotionP>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REASONS.map((reason, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[450px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${reason.image})` }}
              />
              
              {/* Color Overlay */}
              <div className={`absolute inset-0 ${reason.colorOverlay} transition-opacity duration-300`} />

              {/* Content Layout */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                
                {/* Top Row: Icon and Chevron */}
                <div className="flex justify-between items-start">
                  <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-white/20 backdrop-blur-md p-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity">
                    <ChevronDown className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Bottom Row: Text Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold leading-tight break-keep">
                    {reason.title}
                  </h3>
                  <div className="h-0.5 w-12 bg-white/50" />
                  <p className="text-white/90 leading-relaxed font-light break-keep text-sm md:text-base">
                    {reason.description}
                  </p>
                </div>

              </div>
            </MotionDiv>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReasonSection;