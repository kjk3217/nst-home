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
    <div className="min-h-screen bg-white">
      <Navbar onNavigateHome={() => setCurrentPage('home')} />
      <main>
        {/* Hero is always visible but might behave differently or just serve as entry. 
            However, usually subpages don't have the main Hero. 
            Let's keep Hero only for Home for a cleaner subpage look, OR 
            pass props to hide it.
            Actually, the request implies buttons in Hero lead to subpages.
            Let's show Hero ONLY on Home page for better UX.
        */}
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