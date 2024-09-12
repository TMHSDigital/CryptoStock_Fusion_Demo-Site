import React from 'react';
import './App.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to Our Service</h1>
        <p>Where innovative solutions meet exceptional results.</p>
      </header>
      
      <section className="features">
        <div className="feature-card">
          <h3>Feature 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="feature-card">
          <h3>Feature 2</h3>
          <p>Pellentesque vel neque eget nisi consectetur tempor.</p>
        </div>
        <div className="feature-card">
          <h3>Feature 3</h3>
          <p>Nulla facilisi. Praesent ullamcorper orci ac purus finibus.</p>
        </div>
      </section>
      
      <footer className="footer">
        <p>© 2024 Our Service. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
