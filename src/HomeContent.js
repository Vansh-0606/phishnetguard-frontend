import React from 'react';
import './styles.css';

export default function HomeContent() {
  return (
    <div className="home-container">
      <h2 className="section-title">🔐 About this Website</h2>
      <p className="section-paragraph">
        <strong>PhishNetGuard</strong> is a proactive security platform designed to protect users from phishing scams. 
        Using intelligent URL analysis and machine learning, it helps identify potentially harmful sites in real time.
      </p>

      <h2 className="section-title">🎯 About Phishing</h2>
      <p className="section-paragraph">
        <strong>Phishing</strong> is a cyberattack that tricks people into revealing personal or financial information by pretending to be a trustworthy entity. 
        These attacks often come via email or fake websites that mimic real ones. 
        <a href="https://www.phishing.org/what-is-phishing" target="_blank" rel="noopener noreferrer"> Learn more here.</a>
      </p>

      <h2 className="section-title">🛡️ Prevention from Phishing</h2>
      <p className="section-paragraph">
        Be cautious of unsolicited messages and avoid clicking suspicious links. Always verify website URLs before entering credentials.
        Use trusted antivirus and anti-phishing tools to stay protected. 
        <a href="https://www.consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" target="_blank" rel="noopener noreferrer"> Tips here.</a>
      </p>
    </div>
  );
}
