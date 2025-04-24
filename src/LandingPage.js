import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function LandingPage() {
  return (
    <div className="site-header">
      <div className="overlay">
        <h1 className="main-title">PHISHNETGUARD</h1>
        <p className="subtitle">Phishing URL detection website</p>

        <div className="tabs">
          <Link to="/home" className="tab-link">
            <button>Home</button>
          </Link>
          <Link to="/analyze" className="tab-link">
            <button>Analyze</button>
          </Link>
          <Link to="/contact" className="tab-link">
            <button>Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}