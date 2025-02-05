import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import LogoWallSection from './components/LogoWall';
import SplashCursor from './blocks/Animations/SplashCursor/SplashCursor';
import Ballpit from './blocks/Backgrounds/Ballpit/Ballpit';
import Slogan from './components/slogan';
import ConnectSection from './components/ConnectSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-y-auto">
      {/* Content */}
      <div className="relative" style={{ zIndex: 1 }}>
        <SplashCursor />
        <Navbar />
        <main className="min-h-screen">
          <Hero />
          <LogoWallSection />
          <Slogan />
          <div id="projects-section" className="relative">
            {/* Ballpit background for Projects section */}
            <div className="fixed top-0 left-0 w-full h-screen" style={{ zIndex: 10 }}>
              <Ballpit
                count={20}
                gravity={0.5}
                friction={0.9975}
                wallBounce={0.95}
                followCursor={false}
                displayCursor={false}
                colors={[
                  '#D3D3D3', // Light Gray
                  '#333333', // Charcoal Gray
                  '#008080', // Teal
                  '#FFFFFF'  // White
                ].map(color => parseInt(color.replace('#', '0x'), 16))}
                ambientColor={16777215}
                ambientIntensity={1}
                lightIntensity={200}
                materialParams={{
                  metalness: 0.5,
                  roughness: 0.5,
                  clearcoat: 1,
                }}
              />
            </div>
            <Projects />
          </div>
          <ConnectSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;