import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRANCH_REGIONS } from '../constants';
import { BranchItem } from '../types';
import { MapPin, Building2, Phone, User, CheckCircle2, X } from 'lucide-react';

const MotionDiv = motion.div as any;

const BranchesPage: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<BranchItem | null>(null);

  const handleBranchClick = (branch: BranchItem) => {
    setSelectedBranch(branch);
  };

  const closeOverlay = () => {
    setSelectedBranch(null);
  };

  return (
    <div className="pt-24 pb-24 bg-gray-50 min-h-screen relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-sm mb-6"
          >
             <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
             <span className="text-gray-500 font-medium">기준일: 25.11.20</span>
          </MotionDiv>
          
          <MotionDiv 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-nst-dark mb-4">
              NST공법 <span className="text-nst-teal">시공 업체 현황</span>
            </h1>
            <p className="text-gray-600 text-lg">
              업체명을 클릭하시면 상세 정보를 확인하실 수 있습니다.
            </p>
          </MotionDiv>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {BRANCH_REGIONS.map((region, index) => (
            <MotionDiv
              key={region.region}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Card Header */}
              <div className={`p-4 border-b ${region.colorTheme} border-opacity-30 bg-opacity-30`}>
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">{region.region}</h3>
                  <span className="bg-white/80 px-2 py-0.5 rounded-full text-sm font-bold shadow-sm">
                    {region.count}
                  </span>
                </div>
              </div>

              {/* List Items */}
              <div className="p-4 flex-grow">
                <ul className="space-y-2">
                  {region.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex} 
                      onClick={() => handleBranchClick(item)}
                      className="group flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-all cursor-pointer border border-transparent hover:border-gray-200"
                    >
                      <div className="flex items-center gap-2">
                        <Building2 size={16} className="text-gray-400 group-hover:text-nst-teal transition-colors" />
                        <span className="font-medium text-gray-800 group-hover:text-nst-teal transition-colors">
                          {item.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded group-hover:bg-white group-hover:shadow-sm">
                        <MapPin size={12} />
                        {item.location}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {selectedBranch && (
          <>
            {/* Backdrop */}
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeOverlay}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            
            {/* Modal Content */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <MotionDiv
                layoutId={`branch-${selectedBranch.name}`}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden pointer-events-auto relative"
              >
                {/* Header */}
                <div className="bg-nst-dark p-6 text-white relative">
                  <button 
                    onClick={closeOverlay}
                    className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                  >
                    <X size={20} />
                  </button>
                  <div className="flex items-center gap-2 mb-2 opacity-80 text-sm">
                    <Building2 size={16} />
                    <span>NST 시공 공식 인증 업체</span>
                  </div>
                  <h2 className="text-2xl font-bold">{selectedBranch.name}</h2>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">
                  
                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-2xl">
                      <div className="flex items-center gap-2 text-gray-500 mb-1 text-xs font-bold uppercase tracking-wider">
                        <User size={14} /> 대표자
                      </div>
                      <div className="font-bold text-gray-800">
                        {selectedBranch.representative || '-'}
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-2xl">
                      <div className="flex items-center gap-2 text-gray-500 mb-1 text-xs font-bold uppercase tracking-wider">
                         <Phone size={14} /> 연락처
                      </div>
                      <div className="font-bold text-gray-800 text-sm">
                        {selectedBranch.contact || '-'}
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                     <div className="flex items-center gap-2 text-gray-500 mb-2 text-sm font-bold">
                        <MapPin size={16} /> 소재지
                     </div>
                     <p className="text-gray-700 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100">
                       {selectedBranch.location}
                     </p>
                  </div>

                  {/* Items */}
                  <div>
                    <div className="flex items-center gap-2 text-gray-500 mb-3 text-sm font-bold">
                        <CheckCircle2 size={16} /> 취급 품목
                     </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedBranch.items ? (
                        selectedBranch.items.split(',').map((item, idx) => (
                          <span 
                            key={idx} 
                            className="bg-teal-50 text-nst-teal px-3 py-1.5 rounded-lg text-sm font-medium border border-teal-100"
                          >
                            {item.trim()}
                          </span>
                        ))
                      ) : (
                        <span className="text-gray-400 text-sm">정보 없음</span>
                      )}
                    </div>
                  </div>

                  {/* Contact Button */}
                  <a 
                    href={`tel:${selectedBranch.contact?.split(',')[0].replace(/-/g, '')}`}
                    className="flex items-center justify-center gap-2 w-full bg-nst-teal hover:bg-teal-600 text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg shadow-teal-200"
                  >
                    <Phone size={20} />
                    전화 상담 연결
                  </a>

                </div>
              </MotionDiv>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BranchesPage;
