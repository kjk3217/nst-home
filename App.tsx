import React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
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
      </main>
      <Footer />
    </div>
  );
};

export default App;