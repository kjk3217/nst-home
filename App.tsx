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

// 서브 페이지 import
import OneStopPage from './components/OneStopPage';
import TrackRecordPage from './components/TrackRecordPage';
import TechnologyPage from './components/TechnologyPage';

// [추가] 공법 상세 페이지 import (파일 생성 완료 전제)
import MethodStep1Page from './components/MethodStep1Page';
import MethodStep2Page from './components/MethodStep2Page';
import MethodStep3Page from './components/MethodStep3Page';

import { PageType } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [targetSection, setTargetSection] = useState<string | null>(null);

  useEffect(() => {
    // 타겟 섹션이 있고, 현재 페이지가 home이면 해당 위치로 이동
    if (currentPage === 'home' && targetSection) {
      setTimeout(() => {
        const element = document.getElementById(targetSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setTargetSection(null);
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [currentPage, targetSection]);

  // Reason 섹션(메인 기술력 소개)으로 돌아가기
  const handleBackToReason = () => {
    setCurrentPage('home');
    setTargetSection('reason');
  };

  // [추가] Method 섹션(3단계 공법)으로 돌아가기
  const handleBackToMethod = () => {
    setCurrentPage('home');
    setTargetSection('method');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'recruit':
        return <RecruitPage />;
      case 'branches':
        return <BranchesPage />;
      
      // Reason 관련 서브 페이지
      case 'one-stop':
        return <OneStopPage onBack={handleBackToReason} />;
      case 'track-record':
        return <TrackRecordPage onBack={handleBackToReason} />;
      case 'technology':
        return <TechnologyPage onBack={handleBackToReason} />;

      // [추가] Method 관련 서브 페이지
      case 'method-step1':
        return <MethodStep1Page onBack={handleBackToMethod} />;
      case 'method-step2':
        return <MethodStep2Page onBack={handleBackToMethod} />;
      case 'method-step3':
        return <MethodStep3Page onBack={handleBackToMethod} />;
        
      case 'home':
      default:
        return (
          <>
            <ProblemSection />
            <ReasonSection onNavigate={(page) => setCurrentPage(page)} />
            <StatsSection />
            {/* [수정] MethodSection에 네비게이션 함수 전달 */}
            <MethodSection onNavigate={(page) => setCurrentPage(page)} />
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
