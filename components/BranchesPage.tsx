import React from 'react';
import { motion } from 'framer-motion';
import { BRANCH_REGIONS } from '../constants';
import { MapPin, Building2 } from 'lucide-react';

const MotionDiv = motion.div as any;

const BranchesPage: React.FC = () => {
  return (
    <div className="pt-24 pb-24 bg-gray-50 min-h-screen">
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
            <p className="text-gray-600 text-lg">전국 어디서나 표준화된 품질의 NST 시공 서비스를 만나보세요.</p>
          </MotionDiv>
        </div>

        {/* Map Visualization Placeholder (Optional aesthetic touch) */}
        <div className="flex justify-center mb-16">
          <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 flex gap-4 text-xs md:text-sm text-gray-500">
             <div className="flex items-center gap-1"><div className="w-3 h-3 bg-emerald-200 rounded-full"></div> 서울/수도권</div>
             <div className="flex items-center gap-1"><div className="w-3 h-3 bg-green-200 rounded-full"></div> 충청권</div>
             <div className="flex items-center gap-1"><div className="w-3 h-3 bg-purple-200 rounded-full"></div> 전라권</div>
             <div className="flex items-center gap-1"><div className="w-3 h-3 bg-orange-200 rounded-full"></div> 경상권</div>
          </div>
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
                <ul className="space-y-3">
                  {region.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex justify-between items-center p-2 rounded hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-2">
                        <Building2 size={16} className="text-gray-400" />
                        <span className="font-medium text-gray-800">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
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
    </div>
  );
};

export default BranchesPage;