import React from 'react';
import './App.css';
import Particles from 'react-particles-js';

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Particle Background */}
      <Particles
        className="particles-bg"
        params={{
          particles: {
            number: {
              value: 80,
            },
            size: {
              value: 3,
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
            move: {
              speed: 1.5,
            },
          },
        }}
      />

      {/* Header Section */}
      <header className="header">
        <h1 className="glow">Welcome to The Future</h1>
        <p className="pulse-text">Redefining the digital experience</p>
        <button className="neon-button">Discover More</button>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card zoom">
          <h3>AI-Powered Insights</h3>
          <p>Advanced analytics that change the way you understand the market.</p>
        </div>
        <div className="feature-card zoom">
          <h3>Ultra-Secure Transactions</h3>
          <p>Blockchain-based encryption for ultimate security.</p>
        </div>
        <div className="feature-card zoom">
          <h3>Seamless Integrations</h3>
          <p>Trade crypto and traditional stocks in one platform.</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2024 The Future Is Now. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
