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

type PageType = 'home' | 'recruit' | 'branches';

const App: React.FC = () => {
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
      case 'home':
      default:
        return (
          <>
            <ProblemSection />
            <ReasonSection />
            <StatsSection />
            <MethodSection />
            <EffectivenessSection />
            <VideoSection />
            <ProcessSection />
            <AboutSection />
            <PortfolioSection />
            <ContactSection />
          </>
        );
    }
  };

  return (
    // [핵심 수정] overflow-x-hidden 추가:
    // 전체 레이아웃의 가로 넘침을 강제로 숨겨서, 화면 너비를 모바일 기기 너비에 딱 맞춥니다.
    // 이렇게 하면 Hero 컴포넌트의 '중앙(left-1/2)' 계산이 정확해져서 화살표가 정중앙에 오게 됩니다.
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar onNavigateHome={() => setCurrentPage('home')} />
      <main>
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
