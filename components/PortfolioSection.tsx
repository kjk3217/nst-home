import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_ITEMS, BLOG_MAIN_URL } from '../constants'; // [수정] BLOG_MAIN_URL import 추가

const MotionDiv = motion.div as any;

const filters = ['전체', '서울', '경기', '기타'];

const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = activeFilter === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  // [추가] 링크 이동 핸들러
  const handleLinkClick = (url?: string) => {
    // 개별 주소가 있으면 그곳으로, 없으면 메인 블로그로 이동
    const targetUrl = url || BLOG_MAIN_URL;
    window.open(targetUrl, '_blank');
  };

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-nst-dark mb-4">
              주요 시공 실적
            </h2>
            <p className="text-gray-600">
              이미지를 클릭하면 상세 시공 후기(블로그)로 이동합니다.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter 
                    ? 'bg-nst-dark text-white shadow-lg' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <MotionDiv 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <MotionDiv
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleLinkClick(item.url)} // [수정] 클릭 이벤트 추가
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Overlay Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-nst-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-nst-teal text-sm font-bold uppercase tracking-wider">{item.category}</span>
                  <div className="flex justify-between items-end">
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                    {/* [추가] 바로가기 아이콘 힌트 */}
                    <span className="text-white/80 text-xs border border-white/30 px-2 py-1 rounded hover:bg-white/10">
                        블로그 보기 ↗
                    </span>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </AnimatePresence>
        </MotionDiv>

        <div className="text-center mt-12">
            {/* [수정] 버튼 클릭 시 메인 블로그로 이동 */}
            <button 
                onClick={() => handleLinkClick(BLOG_MAIN_URL)}
                className="text-nst-dark font-bold hover:text-nst-teal transition-colors underline decoration-2 underline-offset-4"
            >
                전체 시공 사례 더보기
            </button>
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;
