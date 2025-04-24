import React, { useState } from 'react';

function AnalyzeContent() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [styleClass, setStyleClass] = useState("default-style");

  const checkURL = async () => {
    if (!url.trim()) {
      setResult("⚠ Please enter a URL.");
      return;
    }

    setResult("");
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      setLoading(false);

      if (data.error) {
        setResult(`⚠ Error: ${data.error}`);
        setStyleClass("error-style");
      } else if (data.result === "Phishing") {
        setResult("🚨 Warning! This might be a phishing site.");
        setStyleClass("phishing-style");
      } else if (data.result === "Legitimate") {
        setResult("✅ This URL seems safe.");
        setStyleClass("legitimate-style");
      } else {
        setResult("⚠ Unexpected response from server.");
        setStyleClass("error-style");
      }
    } catch (error) {
      setLoading(false);
      setResult("⚠ Error: Unable to connect to the server.");
      setStyleClass("error-style");
      console.error("Backend error:", error);
    }
  };

  return (
    <div className={`url-checker home-container ${styleClass}`}>
      <h2 className="section-title">URL Phishing Check</h2>
      <p className="section-paragraph">
        Use our AI-powered tool to analyze and detect phishing attempts in URLs. Just paste the URL below and let our system assess its safety.
      </p>
      <input
        type="text"
        className="url-input"
        placeholder="Enter URL to check"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button className="check-btn" onClick={checkURL}>
        Analyze
      </button>
      <div id="result" className="result">
        {loading ? "🔍 Analyzing..." : result}
      </div>

      <h3 className="section-title">How the Model Works</h3>
      <div className="section-paragraph" style={{ textAlign: "left" }}>
        <h4 style={{ fontSize: "1.2em" }}>1. 🔗 User Submits a URL</h4>
        <p>When a user enters a URL to analyze, our system first ensures it's in a valid format (we add https:// if it’s missing).</p>

        <h4 style={{ fontSize: "1.2em" }}>2. 🕸️ Website Content is Fetched</h4>
        <p>Using automated browser technology (Selenium), our backend visits the webpage and captures its complete HTML content. This helps us detect hidden scripts, suspicious forms, external resources, and more — just like a human browser would see.</p>

        <h4 style={{ fontSize: "1.2em" }}>3. 🧾 Feature Extraction</h4>
        <ol style={{ paddingLeft: "1.2em" }}>
          <li>Number of hyperlinks</li>
          <li>Use of external resources</li>
          <li>Script and form tag behavior</li>
          <li>Suspicious URL patterns</li>
          <li>Favicon analysis and more</li>
        </ol>
        <p>These features are then standardized (scaled) so that the model can understand them consistently.</p>

        <h4 style={{ fontSize: "1.2em" }}>4. 🧠 AI Model Analyzes the URL</h4>
        <ol style={{ paddingLeft: "1.2em" }}>
          <li><strong>Model A:</strong> Analyzes the URL structure (converted into character-level tokens)</li>
          <li><strong>Model B:</strong> Analyzes behavioral and structural features of the webpage</li>
        </ol>
        <p>These two branches merge their insights and produce a probability score indicating whether the website is likely to be phishing or legitimate.</p>

        <h4 style={{ fontSize: "1.2em" }}>5. ✅ Get Instant Results</h4>
        <p>If the phishing probability is high (above a certain threshold), we classify it as a phishing attempt. Otherwise, it's marked safe.</p>
        <p>We return this result to the user almost instantly – all in a matter of seconds!</p>
      </div>

      <h3 className="section-title">🛡️ Why Is URL Analysis Important?</h3>
      <p className="section-paragraph" style={{ textAlign: "left" }}>
        Cybercriminals are constantly evolving their tactics to trick users into clicking malicious links. Phishing websites often look identical to trusted ones, making it difficult to spot the difference. By analyzing a URL before you interact with it, you can:
      </p>
      <ol className="section-paragraph" style={{ textAlign: "left", paddingLeft: "1.2em" }}>
        <li>🧠 Stay ahead of phishing attempts that mimic real websites.</li>
        <li>🔐 Protect sensitive data like passwords, credit card details, and personal information.</li>
        <li>💸 Avoid financial scams and identity theft.</li>
        <li>🛑 Prevent unauthorized access to your online accounts and systems.</li>
      </ol>
      <p className="section-paragraph" style={{ textAlign: "left" }}>
        By taking a few seconds to verify a URL, you’re taking a proactive step toward a safer internet experience — whether you’re browsing, shopping, or working online.
      </p>
    </div>
  );
}

export default AnalyzeContent;
