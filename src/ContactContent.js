import React from 'react';

function ContactContent() {
  return (
    <div className="content home-container">
      <h2 className="section-title">Contact Cybersecurity Authorities</h2>
      <p className="section-paragraph">
        If you've encountered phishing attempts, scams, or online fraud — please reach out to official cyber security bodies listed below. These are government-recognized national and international entities that handle cybercrime.
      </p>

      <h3 className="section-title">🌐 International Authorities</h3>
      <ul className="contact-list">
        <li><strong>APWG (Anti-Phishing Working Group):</strong> reportphishing@apwg.org</li>
        <li><strong>IC3 (FBI Internet Crime Center):</strong> <a href="https://www.ic3.gov" target="_blank" rel="noopener noreferrer">www.ic3.gov</a></li>
        <li><strong>Europol EC3 (European Cybercrime Centre):</strong> <a href="https://www.europol.europa.eu" target="_blank" rel="noopener noreferrer">europol.europa.eu</a></li>
      </ul>

      <h3 className="section-title">🇮🇳 National Authority (India)</h3>
      <ul className="contact-list">
        <li><strong>CERT-In (Indian Computer Emergency Response Team):</strong> incident@cert-in.org.in</li>
        <li><strong>Cyber Crime Portal (Ministry of Home Affairs):</strong> <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">cybercrime.gov.in</a></li>
        <li><strong>Phone Support:</strong> +91-11-24368572 (CERT-In)</li>
      </ul>

      <h3 className="section-title">Note</h3>
      <p className="section-paragraph">
        Please avoid interacting with suspicious websites or emails claiming to be "PhishNet Guard" if they do not come from an official source. Report such impersonations directly to the authorities listed above.
      </p>

      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83918358247!2d77.06889942231928!3d28.527280343930105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e74512fbc5%3A0x4e3e5a5f46926b3d!2sCERT-In%20(Cyber%20Emergency%20Response%20Team%20India)!5e0!3m2!1sen!2sin!4v1713967200000!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactContent;
