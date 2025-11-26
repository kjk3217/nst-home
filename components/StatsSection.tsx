import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';

const MotionDiv = motion.div as any;

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-nst-dark to-slate-900 text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border border-white"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full border-2 border-nst-teal"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center justify-center p-8 text-center relative group"
            >
              {/* Circle Outline Effect */}
              <div className="absolute inset-0 border border-white/10 rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
              
              <h3 className="text-6xl md:text-7xl font-bold mb-2 tracking-tighter">
                {stat.value}
              </h3>
              <span className="text-nst-teal font-bold text-xl tracking-widest mb-4">
                {stat.label}
              </span>
              <p className="text-gray-400 font-light">
                {stat.subLabel}
              </p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;