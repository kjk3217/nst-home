import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1c2d] text-gray-400 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-white">
              <span className="text-2xl font-bold">(주)엔에스티</span>
            </div>
            <p className="text-sm leading-relaxed mb-8 max-w-md">
              (주)엔에스티는 20년간 축적된 노하우와 기술력으로 새집증후군 없는 건강한 주거 환경을 만들어갑니다.
            </p>
            <div className="flex gap-4">
               <a href="#" className="bg-white/10 p-2 rounded hover:bg-nst-teal hover:text-white transition-colors"><Facebook size={20} /></a>
               <a href="#" className="bg-white/10 p-2 rounded hover:bg-nst-teal hover:text-white transition-colors"><Instagram size={20} /></a>
               <a href="#" className="bg-white/10 p-2 rounded hover:bg-nst-teal hover:text-white transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-nst-teal transition-colors">Company Intro</a></li>
              <li><a href="#" className="hover:text-nst-teal transition-colors">NST Method</a></li>
              <li><a href="#" className="hover:text-nst-teal transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-nst-teal transition-colors">Customer Reviews</a></li>
              <li><a href="#" className="hover:text-nst-teal transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="font-bold text-white min-w-[60px]">Address</span>
                <span>충북 청주시 흥덕구 공단로134, 1408호</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-white min-w-[60px]">Phone</span>
                <span>043-222-2322</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-white min-w-[60px]">Email</span>
                <span>info@knst.co.kr</span>
              </li>
               <li className="flex gap-3">
                <span className="font-bold text-white min-w-[60px]">Kakao</span>
                <span>@NST공법</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 text-xs text-center">
          <p>&copy; 2024 (주)엔에스티. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
