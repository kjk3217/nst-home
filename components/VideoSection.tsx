import React from 'react';
import { motion } from 'framer-motion';
import { VIDEO_ID } from '../constants';

const MotionH2 = motion.h2 as any;
const MotionP = motion.p as any;
const MotionDiv = motion.div as any;

const VideoSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Content */}
        <div className="text-center mb-12">
          <MotionH2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-nst-dark mb-6"
          >
            눈으로 확인하는 <span className="text-green-500">NST 시공 현장</span>
          </MotionH2>
          <MotionP 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            전문 시공팀의 꼼꼼한 작업을 직접 확인해보세요. 최첨단 장비와 특허받은 S100/S200 솔루션을 사용하여 집 안 구석구석 숨어있는 유해물질을 완벽하게 제거합니다.
          </MotionP>
        </div>

        {/* Video Player */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative pt-[56.25%] rounded-2xl overflow-hidden shadow-2xl bg-black">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${VIDEO_ID}`}
              title="NST Construction Process"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">
            * 실제 시공 현장 촬영 영상입니다.
          </p>
        </MotionDiv>

      </div>
    </section>
  );
};

export default VideoSection;