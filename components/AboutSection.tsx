import React from 'react';
import { motion } from 'framer-motion';
import { HISTORY } from '../constants';
import { Handshake, Trophy } from 'lucide-react';

const MotionH2 = motion.h2 as any;
const MotionDiv = motion.div as any;

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-green-500 text-green-600 text-sm font-medium mb-4">
            About Us
          </div>
          <MotionH2 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="text-3xl md:text-5xl font-bold text-nst-dark mb-6 leading-tight"
          >
            사람과 공간을 바꾸는 <span className="text-green-500">친환경 기업</span>
          </MotionH2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            (주)엔에스티는 지난 20여 년간 실내공기질 개선만을 연구해온 전문 기업입니다. 
            연구개발부터 시공까지 직접 수행하며 고객님께 신뢰를 드립니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left: CEO Greeting Card */}
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 h-full"
          >
            <div className="flex items-center gap-3 mb-8">
              <Handshake className="text-yellow-500 w-8 h-8" />
              <h3 className="text-2xl font-bold text-nst-dark">CEO 인사말</h3>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed text-justify">
              <p>안녕하십니까, 엔에스티를 찾아주셔서 감사합니다.</p>
              <p>
                우리가 하루 중 90% 이상을 머무는 실내 공간, 그곳의 공기질은 삶의 질을 결정합니다. 
                저희 엔에스티는 맑은 공기가 단순한 바람이 아닌, 누려야 할 권리라고 믿습니다.
              </p>
              <p>
                수년간의 연구 끝에 개발된 특허받은 가시광촉매 기술로 새집증후군을 해결하고 
                더 안전한 주거 환경을 만들기 위해 노력해왔습니다.
              </p>
              <p>
                고객님의 전(全) 시공과정을 직접 확인하실 수 있고, 검증된 제품만 사용하여 
                투명한 시공을 약속드립니다. 감사합니다.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 font-bold text-nst-dark text-lg text-right">
              — (주)엔에스티 임직원 일동
            </div>
          </MotionDiv>

          {/* Right: History Timeline */}
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:pl-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="text-amber-600 w-8 h-8" />
              <h3 className="text-2xl font-bold text-nst-dark">주요 연혁</h3>
            </div>

            <div className="relative border-l-2 border-gray-200 ml-3 space-y-12 py-2">
              {HISTORY.map((item, index) => (
                <div key={index} className="relative pl-8">
                  {/* Dot */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-green-500 shadow-sm" />
                  
                  <div className="flex flex-col">
                    <span className="text-green-600 font-bold mb-1">{item.year}</span>
                    <h4 className="text-lg font-bold text-nst-dark mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;