import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Briefcase, Mail, Phone } from 'lucide-react';

const MotionDiv = motion.div as any;

const RecruitPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <p className="text-gray-600 text-lg font-medium max-w-4xl mx-auto leading-relaxed break-keep">
              (주)엔에스티는 새집증후군 개선 전문회사로 20년 노하우가 집약된<br className="hidden md:block" />
              새집증후군 개선 시공 방법인 NST공법을 개발한 회사입니다.
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-nst-dark leading-snug break-keep">
              국민 건강을 지키기 위해 함께할<br className="hidden md:block" />
              <span className="text-nst-teal bg-teal-50 px-3 py-1 rounded inline-block mt-2 md:mt-3 shadow-sm border border-teal-100">
                NST공법 시공업체 신규 사업자
              </span>
              를 모집합니다.
            </h1>
          </MotionDiv>
        </div>

        {/* Content Grid */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Section 1: Recruitment Sector */}
          <MotionDiv 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-nst-teal"></div>
            <div className="flex items-start gap-4">
              <div className="bg-teal-100 p-3 rounded-xl text-nst-teal shrink-0">
                <Briefcase size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-nst-dark mb-2">모집 부문</h3>
                <p className="text-lg font-medium text-gray-700 bg-gray-50 inline-block px-4 py-2 rounded-lg break-keep">
                  NST공법 시공업체 (새집증후군 예방·개선을 위한 친환경 시공)
                </p>
              </div>
            </div>
          </MotionDiv>

          {/* Section 2: Eligibility */}
          <MotionDiv 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-nst-dark text-white rounded-3xl p-8 md:p-10 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-white/10 p-3 rounded-xl">
                <Award size={32} className="text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold">신청 자격 및 우대 조건</h3>
            </div>
            
            <ul className="space-y-6">
              {[
                "입주 청소 시장 3년 이상 경력 보유 업체",
                "대·중형 품목(입주청소, 줄눈, 나노코팅, 방충망, 커튼 등) 시공 경험 보유 업체",
                "입주 박람회 참가 이력 있는 업체"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <CheckCircle2 className="text-nst-teal shrink-0 mt-1" />
                  <span className="text-lg break-keep">{item}</span>
                </li>
              ))}
            </ul>
          </MotionDiv>

          {/* Section 3: Contact */}
          <MotionDiv 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
             className="grid md:grid-cols-2 gap-6"
          >
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow group cursor-pointer">
              <div className="bg-yellow-100 p-4 rounded-full text-yellow-700 mb-4 group-hover:scale-110 transition-transform">
                <Mail size={28} />
              </div>
              <h4 className="text-gray-500 font-bold mb-2 uppercase tracking-wide text-sm">이메일 문의</h4>
              <p className="text-2xl font-bold text-nst-dark">isnst@naver.com</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow group cursor-pointer">
               <div className="bg-green-100 p-4 rounded-full text-green-700 mb-4 group-hover:scale-110 transition-transform">
                <Phone size={28} />
              </div>
              <h4 className="text-gray-500 font-bold mb-2 uppercase tracking-wide text-sm">전화 문의</h4>
              <p className="text-2xl font-bold text-nst-dark">043-222-2322</p>
            </div>
          </MotionDiv>

        </div>
      </div>
    </div>
  );
};

export default RecruitPage;