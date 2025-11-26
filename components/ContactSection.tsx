import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-nst-teal text-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">상담 및 견적 문의</h2>
          <p className="text-white/80 text-lg">
            건강한 주거 환경을 위한 첫걸음, NST공법 전문가와 상의하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <MotionDiv 
            whileHover={{ y: -5 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-10 text-center flex flex-col items-center hover:bg-white/20 transition-all"
          >
            <div className="bg-white text-nst-teal p-4 rounded-full mb-6">
              <Phone size={32} />
            </div>
            <h3 className="text-sm font-bold tracking-widest opacity-80 mb-2">PHONE</h3>
            <p className="text-3xl font-bold">043-222-2322</p>
          </MotionDiv>

          <MotionDiv 
            whileHover={{ y: -5 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-10 text-center flex flex-col items-center hover:bg-white/20 transition-all"
          >
            <div className="bg-white text-nst-teal p-4 rounded-full mb-6">
              <Mail size={32} />
            </div>
            <h3 className="text-sm font-bold tracking-widest opacity-80 mb-2">EMAIL</h3>
            <p className="text-2xl font-bold">info@knst.co.kr</p>
          </MotionDiv>

          <MotionDiv 
            whileHover={{ y: -5 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-10 text-center flex flex-col items-center hover:bg-white/20 transition-all"
          >
             <div className="bg-white text-nst-teal p-4 rounded-full mb-6">
              <MessageCircle size={32} />
            </div>
            <h3 className="text-sm font-bold tracking-widest opacity-80 mb-2">KAKAO TALK</h3>
            <p className="text-2xl font-bold">@NST공법</p>
          </MotionDiv>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;