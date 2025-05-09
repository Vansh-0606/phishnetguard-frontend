import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import HomeContent from './HomeContent';
import AnalyzeContent from './AnalyzeContent';
import ContactContent from './ContactContent';

// ✅ URL validation function
const isValidURL = (string) => {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you with your security today?" }
  ]);
  const [input, setInput] = useState("");

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
    document.body.classList.toggle("dark-mode");
  };

  const handleUserMessage = async () => {
    if (!input.trim()) return;

    // ✅ Validate URL before sending
    if (!isValidURL(input.trim())) {
      setMessages(prev => [...prev, { sender: "bot", text: "⚠️ Please enter a valid URL." }]);
      setInput("");
      return;
    }

    const userMessage = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);

    try {
      // Use your deployed backend URL here
      const res = await fetch("https://phishnetguard-backend.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botReply = { sender: "bot", text: data.reply || "Hmm, I didn't get that." };
      setMessages(prev => [...prev, botReply]);
    } catch (err) {
      setMessages(prev => [...prev, { sender: "bot", text: "⚠️ Error connecting to chatbot." }]);
    }

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleUserMessage();
    }
  };

  const backgroundImage = "https://blog.knowbe4.com/hubfs/phishing-1.jpg"; 

  return (
    <Router>
      <div
        className={darkMode ? "dark-mode" : ""}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          height: "100vh",
          position: "relative",
        }}
      >
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? "☀" : "🌙"}
        </button>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomeContent />} />
          <Route path="/analyze" element={<AnalyzeContent />} />
          <Route path="/contact" element={<ContactContent />} />
        </Routes>

        <div className="chatbot" onClick={() => setChatOpen(prev => !prev)}>
          💬
        </div>

        {chatOpen && (
          <div style={chatWindowStyle}>
            <div style={chatMessagesStyle}>
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  style={{
                    textAlign: msg.sender === "user" ? "right" : "left",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      background: msg.sender === "user" ? "#007bff" : "#eaeaea",
                      color: msg.sender === "user" ? "white" : "black",
                      padding: "8px 12px",
                      borderRadius: "15px",
                      display: "inline-block",
                      maxWidth: "80%",
                    }}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex" }}>
              <input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                style={{ flex: 1, padding: "8px", borderRadius: "6px 0 0 6px", border: "1px solid #ccc" }}
              />
              <button
                onClick={handleUserMessage}
                style={{ padding: "8px 12px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "0 6px 6px 0" }}
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

const chatWindowStyle = {
  position: "fixed",
  bottom: "80px",
  right: "20px",
  width: "300px",
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: "10px",
  padding: "10px",
  zIndex: 10,
  boxShadow: "0 0 15px rgba(0,0,0,0.2)",
};

const chatMessagesStyle = {
  maxHeight: "300px",
  overflowY: "auto",
  marginBottom: "10px",
};
