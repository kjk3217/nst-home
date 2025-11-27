import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import ReasonSection from './components/ReasonSection';
import StatsSection from './components/StatsSection';
import MethodSection from './components/MethodSection';
import EffectivenessSection from './components/EffectivenessSection';
import VideoSection from './components/VideoSection';
import ProcessSection from './components/ProcessSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import RecruitPage from './components/RecruitPage';
import BranchesPage from './components/BranchesPage';

import OneStopPage from './components/OneStopPage';
import TrackRecordPage from './components/TrackRecordPage';
import TechnologyPage from './components/TechnologyPage';

import { PageType } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  // [추가] 돌아갈 섹션 위치를 저장할 state
  const [targetSection, setTargetSection] = useState<string | null>(null);

  // [수정] 페이지 변경 및 타겟 섹션 이동 처리
  useEffect(() => {
    // 타겟 섹션이 있고, 현재 페이지가 home이면 해당 위치로 이동
    if (currentPage === 'home' && targetSection) {
      setTimeout(() => {
        const element = document.getElementById(targetSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }); // 부드럽게 스크롤
        }
        setTargetSection(null); // 이동 후 타겟 초기화
      }, 100); // 렌더링 시간을 고려해 약간의 딜레이
    } else {
      // 그 외의 경우(일반 페이지 이동)에는 맨 위로 이동
      window.scrollTo(0, 0);
    }
  }, [currentPage, targetSection]);

  // [추가] 서브 페이지에서 '메인으로 돌아가기'를 눌렀을 때 호출할 함수
  const handleBackToReason = () => {
    setCurrentPage('home');
    setTargetSection('reason'); // 'reason' 섹션(ReasonSection)으로 이동하도록 예약
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'recruit':
        return <RecruitPage />;
      case 'branches':
        return <BranchesPage />;
      
      // [수정] 서브 페이지들의 onBack에 handleBackToReason 함수 연결
      case 'one-stop':
        return <OneStopPage onBack={handleBackToReason} />;
      case 'track-record':
        return <TrackRecordPage onBack={handleBackToReason} />;
      case 'technology':
        return <TechnologyPage onBack={handleBackToReason} />;
        
      case 'home':
      default:
        return (
          <>
            <ProblemSection />
            {/* ReasonSection에 네비게이션 함수 전달 */}
            <ReasonSection onNavigate={(page) => setCurrentPage(page)} />
            <StatsSection />
            <MethodSection />
            <EffectivenessSection />
            <VideoSection />
            <PortfolioSection />
            <ProcessSection />
            <AboutSection />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar onNavigateHome={() => setCurrentPage('home')} />
      <main>
        {/* Hero는 home일 때만 보여줌 */}
        {currentPage === 'home' && (
          <Hero 
            onNavigateRecruit={() => setCurrentPage('recruit')} 
            onNavigateBranches={() => setCurrentPage('branches')} 
          />
        )}
        
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
