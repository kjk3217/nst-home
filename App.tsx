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

// 공법 상세 페이지 import
import MethodStep1Page from './components/MethodStep1Page';
import MethodStep2Page from './components/MethodStep2Page';
import MethodStep3Page from './components/MethodStep3Page';

import { PageType } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [targetSection, setTargetSection] = useState<string | null>(null);

  // [추가 1] 브라우저 뒤로가기(PopState) 감지 및 처리
  useEffect(() => {
    // 초기 로딩 시 현재 상태(Home)를 히스토리에 기록
    window.history.replaceState({ page: 'home' }, '', window.location.pathname);

    const handlePopState = (event: PopStateEvent) => {
      // 뒤로가기 시 state가 있으면 해당 페이지로, 없으면 home으로
      if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // [추가 2] 페이지 이동 함수 (History 기록 + 스크롤 저장)
  const navigateTo = (page: PageType, sectionId?: string) => {
    // 메인에서 다른 페이지로 갈 때, 현재 메인 스크롤 위치 저장
    if (currentPage === 'home' && page !== 'home') {
      sessionStorage.setItem('mainScrollY', window.scrollY.toString());
    }

    // 브라우저 히스토리에 새 기록 추가 (주소창 변경)
    if (page === 'home') {
        window.history.pushState({ page }, '', '/'); 
    } else {
        window.history.pushState({ page }, '', `/#${page}`);
    }
    
    setCurrentPage(page);

    if (sectionId) {
      setTargetSection(sectionId);
    } else {
      // 새 페이지는 최상단에서 시작
      window.scrollTo(0, 0);
    }
  };

  // [추가 3] 페이지 변경 시 스크롤 처리 (복원 or 초기화)
  useEffect(() => {
    if (currentPage === 'home') {
      if (targetSection) {
        // 1. 특정 섹션으로 이동해야 하는 경우 (예: 서브페이지에서 '돌아가기' 버튼 클릭)
        setTimeout(() => {
          const element = document.getElementById(targetSection);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
          setTargetSection(null);
        }, 100);
      } else {
        // 2. 그냥 홈으로 온 경우 (브라우저 뒤로가기 등) -> 저장된 스크롤 위치 복원
        const savedScroll = sessionStorage.getItem('mainScrollY');
        if (savedScroll) {
          setTimeout(() => {
            window.scrollTo({ top: parseInt(savedScroll), behavior: 'auto' });
          }, 50);
        } else {
            window.scrollTo(0, 0);
        }
      }
    } else {
      // 서브 페이지는 항상 최상단
      window.scrollTo(0, 0);
    }
  }, [currentPage, targetSection]);

  // Reason 섹션(메인 기술력 소개)으로 돌아가기 (navigateTo 사용)
  const handleBackToReason = () => {
    navigateTo('home', 'reason');
  };

  // Method 섹션(3단계 공법)으로 돌아가기 (navigateTo 사용)
  const handleBackToMethod = () => {
    navigateTo('home', 'method');
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

      // Method 관련 서브 페이지
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
            {/* onNavigate에 setCurrentPage 대신 navigateTo 전달 */}
            <ReasonSection onNavigate={(page) => navigateTo(page)} />
            <StatsSection />
            <MethodSection onNavigate={(page) => navigateTo(page)} />
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
      {/* Navbar 로고 클릭 시 홈으로 이동 */}
      <Navbar onNavigateHome={() => navigateTo('home')} />
      <main>
        {/* Hero는 home일 때만 보여줌 */}
        {currentPage === 'home' && (
          <Hero 
            onNavigateRecruit={() => navigateTo('recruit')} 
            onNavigateBranches={() => navigateTo('branches')} 
          />
        )}
        
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
