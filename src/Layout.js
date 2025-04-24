// Layout.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div>
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

      {/* Render the children (actual page content) */}
      <div className="content">
        {children}
      </div>
    </div>
  );
}
