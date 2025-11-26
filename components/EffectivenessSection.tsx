import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ASSETS } from '../constants';

const MotionDiv = motion.div as any;

const data = [
  { name: 'Formaldehyde', before: 100, after: 10 },
  { name: 'Benzene', before: 85, after: 8 },
  { name: 'Toluene', before: 90, after: 12 },
  { name: 'VOCs', before: 95, after: 15 },
];

const EffectivenessSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Award Image */}
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 z-20 bg-yellow-500 text-white font-bold px-4 py-2 rounded shadow-lg">
              2025 WINNER
            </div>
            <img 
              src={ASSETS.awards} 
              alt="Award Ceremony" 
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent"></div>
          </MotionDiv>

          {/* Right: Chart & Content */}
          <MotionDiv
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-nst-dark mb-6">
              유해물질 90% 이상 <span className="text-nst-teal">저감 효과 입증</span>
            </h2>
            <p className="text-gray-600 mb-10 text-lg">
              NST공법은 국가 공인기관 및 환경부 교차검증을 통과하여, 포름알데히드 및 VOCs 등의 유해물질을 획기적으로 저감합니다.
            </p>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" tick={{fill: '#6b7280'}} axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
                  />
                  <Bar dataKey="before" name="시공 전" fill="#e2e8f0" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="after" name="NST 공법 시공 후" fill="#00a99d" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-8 mt-4">
                <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                   <span className="text-sm text-gray-500">시공 전</span>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-nst-teal"></div>
                   <span className="text-sm text-gray-500 font-bold">NST 공법 시공 후</span>
                </div>
              </div>
            </div>

          </MotionDiv>

        </div>
      </div>
    </section>
  );
};

export default EffectivenessSection;