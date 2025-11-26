import React from 'react';
import { motion } from 'framer-motion';
import { STEPS } from '../constants';

const MotionH2 = motion.h2 as any;
const MotionP = motion.p as any;
const MotionDiv = motion.div as any;

const MethodSection: React.FC = () => {
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
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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