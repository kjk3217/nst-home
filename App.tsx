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

// [수정] 새로운 페이지 컴포넌트 import (실제 파일 경로에 맞게 조정 필요)
import OneStopPage from './components/OneStopPage';
import TrackRecordPage from './components/TrackRecordPage';
import TechnologyPage from './components/TechnologyPage';

// [수정] PageType import
import { PageType } from './types';

const App: React.FC = () => {
  // [수정] 초기 상태 타입 명시
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'recruit':
        return <RecruitPage />;
      case 'branches':
        return <BranchesPage />;
      
      // [수정] 서브 페이지 케이스 추가
      case 'one-stop':
        return <OneStopPage onBack={() => setCurrentPage('home')} />;
      case 'track-record':
        return <TrackRecordPage onBack={() => setCurrentPage('home')} />;
      case 'technology':
        return <TechnologyPage onBack={() => setCurrentPage('home')} />;
        
      case 'home':
      default:
        return (
          <>
            <ProblemSection />
            {/* [수정] ReasonSection에 네비게이션 함수 전달 */}
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
