'use client';
import React, { useState } from 'react';

const InvestorPage = () => {
  const [formData, setFormData] = useState({
    reason: '',
    background: '',
    thoughts: '',
    investorType: '',
    otherInvestorType: '',
    geographicFocus: '',
    stageOfInterest: '',
    investmentRange: '',
    linkedinWebsite: '',
    additionalComments: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build email body
    let emailBody = `FLEETBOLD INVESTOR INQUIRY\n\n`;
    emailBody += `Reason for Contacting: ${formData.reason}\n\n`;
    emailBody += `Investor Background: ${formData.background}\n\n`;
    emailBody += `Thoughts on FleetBold: ${formData.thoughts}\n\n`;
    emailBody += `Investor Type: ${formData.investorType}`;
    if (formData.otherInvestorType) {
      emailBody += ` - ${formData.otherInvestorType}`;
    }
    emailBody += `\n\n`;
    emailBody += `Geographic Focus: ${formData.geographicFocus}\n\n`;
    emailBody += `Stage of Interest: ${formData.stageOfInterest}\n\n`;
    if (formData.investmentRange) {
      emailBody += `Investment Range: ${formData.investmentRange}\n\n`;
    }
    if (formData.linkedinWebsite) {
      emailBody += `LinkedIn/Website: ${formData.linkedinWebsite}\n\n`;
    }
    if (formData.additionalComments) {
      emailBody += `Additional Comments: ${formData.additionalComments}\n\n`;
    }
    
    // Create mailto link
    const subject = encodeURIComponent('FleetBold Investor Inquiry');
    const body = encodeURIComponent(emailBody);
    const mailtoLink = `mailto:investor@fleetbold.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="investor-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Investors</h1>
          <p className="hero-description">
            FleetBold isn't just another fleet platform — it's the scalable foundation of a connected mobility ecosystem.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">99%</span>
              <span className="stat-label">Auto-scalable</span>
            </div>
            <div className="stat">
              <span className="stat-number">99%+</span>
              <span className="stat-label">GPS Compatibility</span>
            </div>
            <div className="stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Growth Capacity</span>
            </div>
          </div>
          <button onClick={scrollToContact} className="hero-cta">
            Partner With Us
          </button>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="platform-section">
        <div className="platform-content">
          <h2 className="section-title">Engineering Excellence at Scale</h2>
          <p className="section-description">
            We've engineered a unique infrastructure that integrates seamlessly with Tesla telematics and is ready to support virtually any vehicle data source on the market. Our platform is 99% auto-scalable, allowing for rapid growth without rebuilding or restructuring.
          </p>
          <div className="platform-features">
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <div className="feature-content">
                <h3>99% Auto-scalable Architecture</h3>
                <p>Rapid growth without rebuilding or restructuring</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌐</div>
              <div className="feature-content">
                <h3>Universal GPS Compatibility</h3>
                <p>Connect with over 99% of GPS devices globally</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🚗</div>
              <div className="feature-content">
                <h3>Tesla-Grade Engineering</h3>
                <p>Built on premium telematics with OEM-ready integration</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔧</div>
              <div className="feature-content">
                <h3>Zero-Friction Integration</h3>
                <p>New hardware connects to FleetBold system seamlessly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="why-invest-section">
        <div className="why-invest-content">
          <h2 className="section-title">Why Invest in FleetBold</h2>
          <div className="investment-reasons">
            <div className="reason-card">
              <div className="reason-icon">📈</div>
              <h3 className="reason-title">Built to Scale</h3>
              <p className="reason-description">
                Our architecture is designed for exponential growth, with a backend capable of handling unlimited expansion without performance loss or technical debt.
              </p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">🔌</div>
              <h3 className="reason-title">Universal Compatibility</h3>
              <p className="reason-description">
                We support the widest GPS integration network in the industry — allowing new hardware to connect to the FleetBold system with zero friction.
              </p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">⚡</div>
              <h3 className="reason-title">Tesla-Grade Engineering</h3>
              <p className="reason-description">
                Our foundation started with Tesla's telematics and is now ready to power future integrations across OEMs and APIs worldwide.
              </p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">🎯</div>
              <h3 className="reason-title">Market-Ready Traction</h3>
              <p className="reason-description">
                With active users in the car rental and fleet space, we're addressing a real pain point with a clean, data-driven solution.
              </p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">💰</div>
              <h3 className="reason-title">Recurring Revenue Model</h3>
              <p className="reason-description">
                SaaS pricing, hardware bundles, and premium analytics give us predictable, scalable monetization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="roadmap-section">
        <div className="roadmap-content">
          <h2 className="section-title">What's Coming</h2>
          <p className="section-description">
            Our strategic roadmap positions FleetBold at the forefront of the connected mobility revolution.
          </p>
          <div className="roadmap-items">
            <div className="roadmap-item">
              <div className="roadmap-dot"></div>
              <div className="roadmap-content-item">
                <h3>Deeper integrations with automotive OEMs</h3>
                <p>Expanding beyond Tesla to Ford, GM, BMW, and other major manufacturers for native vehicle connectivity.</p>
              </div>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-dot"></div>
              <div className="roadmap-content-item">
                <h3>Real-time telematics data monetization</h3>
                <p>Advanced analytics and insights platform that transforms raw vehicle data into actionable business intelligence.</p>
              </div>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-dot"></div>
              <div className="roadmap-content-item">
                <h3>Expansion into LATAM and EU markets</h3>
                <p>Geographic expansion strategy targeting high-growth markets with localized solutions and partnerships.</p>
              </div>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-dot"></div>
              <div className="roadmap-content-item">
                <h3>AI-powered fleet behavior analytics</h3>
                <p>Machine learning algorithms for predictive maintenance, route optimization, and driver behavior analysis.</p>
              </div>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-dot"></div>
              <div className="roadmap-content-item">
                <h3>Strategic partnerships with rental networks and fleet platforms</h3>
                <p>Integration partnerships with major rental companies and fleet management platforms for expanded market reach.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="contact-section">
        <div className="contact-content">
          <h2 className="section-title">Contact Investor Relations</h2>
          <p className="section-description">
            If you're an investor interested in partnering with FleetBold, please email us at{' '}
            <a href="mailto:investor@fleetbold.com" className="email-link">investor@fleetbold.com</a>{' '}
            with the following information:
          </p>

          <form onSubmit={handleSubmit} className="investor-form">
            <div className="form-group">
              <label htmlFor="reason" className="form-label">
                Reason for Contacting Us <span className="required">*</span>
              </label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                required
                className="form-textarea"
                placeholder="What prompted your interest in FleetBold?"
                rows={3}
              />
            </div>

            <div className="form-group">
              <label htmlFor="background" className="form-label">
                Your Background as an Investor <span className="required">*</span>
              </label>
              <textarea
                id="background"
                name="background"
                value={formData.background}
                onChange={handleInputChange}
                required
                className="form-textarea"
                placeholder="Past experience, focus industries, and activity in automotive or SaaS."
                rows={3}
              />
            </div>

            <div className="form-group">
              <label htmlFor="thoughts" className="form-label">
                Your Thoughts on FleetBold <span className="required">*</span>
              </label>
              <textarea
                id="thoughts"
                name="thoughts"
                value={formData.thoughts}
                onChange={handleInputChange}
                required
                className="form-textarea"
                placeholder="We'd love to know what stands out to you."
                rows={3}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="investorType" className="form-label">
                  Investor Type <span className="required">*</span>
                </label>
                <select
                  id="investorType"
                  name="investorType"
                  value={formData.investorType}
                  onChange={handleInputChange}
                  required
                  className="form-select"
                >
                  <option value="">Select investor type</option>
                  <option value="Individual">Individual</option>
                  <option value="Angel Investor">Angel Investor</option>
                  <option value="VC Firm">VC Firm</option>
                  <option value="Strategic Investor">Strategic Investor (OEMs, Telco, SaaS, etc.)</option>
                  <option value="Corporate VC">Corporate VC</option>
                  <option value="Accelerator/Incubator">Accelerator/Incubator</option>
                  <option value="Other">Other</option>
                </select>
                {formData.investorType === 'Other' && (
                  <input
                    type="text"
                    name="otherInvestorType"
                    value={formData.otherInvestorType}
                    onChange={handleInputChange}
                    placeholder="Please specify investor type"
                    className="form-input mt-2"
                    required
                  />
                )}
              </div>

              <div className="form-group">
                <label htmlFor="geographicFocus" className="form-label">
                  Geographic Focus <span className="required">*</span>
                </label>
                <select
                  id="geographicFocus"
                  name="geographicFocus"
                  value={formData.geographicFocus}
                  onChange={handleInputChange}
                  required
                  className="form-select"
                >
                  <option value="">Select geographic focus</option>
                  <option value="US">US</option>
                  <option value="Canada">Canada</option>
                  <option value="Latin America">Latin America</option>
                  <option value="Europe">Europe</option>
                  <option value="Middle East">Middle East</option>
                  <option value="Asia">Asia</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="stageOfInterest" className="form-label">
                  Stage of Interest <span className="required">*</span>
                </label>
                <select
                  id="stageOfInterest"
                  name="stageOfInterest"
                  value={formData.stageOfInterest}
                  onChange={handleInputChange}
                  required
                  className="form-select"
                >
                  <option value="">Select stage</option>
                  <option value="Pre-Seed">Pre-Seed</option>
                  <option value="Seed">Seed</option>
                  <option value="Series A">Series A</option>
                  <option value="Growth Equity">Growth Equity</option>
                  <option value="M&A / Strategic Partnership">M&A / Strategic Partnership</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="investmentRange" className="form-label">
                  Investment Range (Optional)
                </label>
                <input
                  type="text"
                  id="investmentRange"
                  name="investmentRange"
                  value={formData.investmentRange}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Helps us prioritize your inquiry internally"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="linkedinWebsite" className="form-label">
                LinkedIn or Website
              </label>
              <input
                type="url"
                id="linkedinWebsite"
                name="linkedinWebsite"
                value={formData.linkedinWebsite}
                onChange={handleInputChange}
                className="form-input"
                placeholder="So we can better understand your background"
              />
            </div>

            <div className="form-group">
              <label htmlFor="additionalComments" className="form-label">
                Additional Comments or Questions
              </label>
              <textarea
                id="additionalComments"
                name="additionalComments"
                value={formData.additionalComments}
                onChange={handleInputChange}
                className="form-textarea"
                placeholder="Any additional information you'd like to share"
                rows={4}
              />
            </div>

            <div className="form-submit">
              <button type="submit" className="submit-button">
                Send Investor Inquiry
              </button>
            </div>

            <div className="disclaimer">
              <p>
                <strong>Please note:</strong> Sending this information does not guarantee a response. 
                FleetBold reserves the right to review all inquiries and respond at its discretion. 
                We sincerely appreciate your interest.
              </p>
            </div>
          </form>
        </div>
      </section>

      <style jsx>{`
        .investor-page {
          min-height: 100vh;
          background: linear-gradient(135deg, rgb(13, 13, 13) 0%, rgb(23, 23, 23) 100%);
          color: rgb(255, 255, 255);
          font-family: "Inter", system-ui, sans-serif;
        }

        /* Hero Section */
        .hero-section {
          padding: 120px 32px 80px;
          text-align: center;
          background: radial-gradient(circle at center, rgba(0, 134, 255, 0.1) 0%, transparent 70%);
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          margin: 0 0 24px;
          background: linear-gradient(135deg, rgb(255, 255, 255) 0%, #0086FF 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 20px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin: 0 0 48px;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 48px;
          margin: 48px 0;
        }

        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .stat-number {
          font-size: 36px;
          font-weight: 700;
          color: #0086FF;
        }

        .stat-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .hero-cta {
          padding: 16px 32px;
          background: #0086FF;
          border: none;
          border-radius: 12px;
          color: rgb(255, 255, 255);
          font-size: 16px;
          font-weight: 600;
          font-family: "Inter", system-ui, sans-serif;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .hero-cta:hover {
          background: #0070D9;
          transform: translateY(-2px);
        }

        /* Platform Section */
        .platform-section {
          padding: 80px 32px;
          background: rgba(255, 255, 255, 0.02);
        }

        .platform-content {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .section-title {
          font-size: 36px;
          font-weight: 600;
          margin: 0 0 16px;
        }

        .section-description {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.8);
          margin: 0 0 48px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .platform-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          text-align: left;
        }

        .feature-icon {
          font-size: 32px;
          margin-top: 4px;
        }

        .feature-content h3 {
          font-size: 18px;
          font-weight: 600;
          margin: 0 0 8px;
        }

        .feature-content p {
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          line-height: 1.5;
        }

        /* Why Invest Section */
        .why-invest-section {
          padding: 80px 32px;
        }

        .why-invest-content {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .investment-reasons {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin-top: 48px;
        }

        .reason-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 32px 24px;
          text-align: center;
          transition: all 0.2s ease;
        }

        .reason-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(0, 134, 255, 0.3);
          transform: translateY(-4px);
        }

        .reason-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .reason-title {
          font-size: 20px;
          font-weight: 600;
          margin: 0 0 12px;
        }

        .reason-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin: 0;
        }

        /* Roadmap Section */
        .roadmap-section {
          padding: 80px 32px;
          background: rgba(255, 255, 255, 0.02);
        }

        .roadmap-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .roadmap-items {
          margin-top: 48px;
        }

        .roadmap-item {
          display: flex;
          align-items: flex-start;
          gap: 24px;
          margin-bottom: 32px;
        }

        .roadmap-dot {
          width: 12px;
          height: 12px;
          background: #0086FF;
          border-radius: 50%;
          margin-top: 8px;
          flex-shrink: 0;
        }

        .roadmap-content-item h3 {
          font-size: 20px;
          font-weight: 600;
          margin: 0 0 8px;
        }

        .roadmap-content-item p {
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          line-height: 1.6;
        }

        /* Contact Section */
        .contact-section {
          padding: 80px 32px;
        }

        .contact-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .email-link {
          color: #0086FF;
          text-decoration: none;
          font-weight: 600;
        }

        .email-link:hover {
          text-decoration: underline;
        }

        /* Form Styles */
        .investor-form {
          margin-top: 48px;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .form-label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 8px;
          color: rgba(255, 255, 255, 0.9);
        }

        .required {
          color: #ff4444;
        }

        .form-input,
        .form-textarea,
        .form-select {
          width: 100%;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: rgb(255, 255, 255);
          font-size: 14px;
          font-family: "Inter", system-ui, sans-serif;
          transition: all 0.2s ease;
        }

        .form-input:focus,
        .form-textarea:focus,
        .form-select:focus {
          outline: none;
          border-color: #0086FF;
          box-shadow: 0 0 0 3px rgba(0, 134, 255, 0.2);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .form-textarea {
          resize: vertical;
          min-height: 80px;
        }

        .mt-2 {
          margin-top: 8px;
        }

        .form-submit {
          text-align: center;
          margin: 32px 0;
        }

        .submit-button {
          padding: 16px 32px;
          background: #0086FF;
          border: none;
          border-radius: 12px;
          color: rgb(255, 255, 255);
          font-size: 16px;
          font-weight: 600;
          font-family: "Inter", system-ui, sans-serif;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .submit-button:hover {
          background: #0070D9;
          transform: translateY(-2px);
        }

        .disclaimer {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 20px;
          margin-top: 24px;
        }

        .disclaimer p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          line-height: 1.5;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .hero-section {
            padding: 80px 20px 60px;
          }

          .hero-title {
            font-size: 36px;
          }

          .hero-description {
            font-size: 18px;
          }

          .hero-stats {
            flex-direction: column;
            gap: 24px;
          }

          .platform-section,
          .why-invest-section,
          .roadmap-section,
          .contact-section {
            padding: 60px 20px;
          }

          .section-title {
            font-size: 28px;
          }

          .section-description {
            font-size: 16px;
          }

          .platform-features {
            grid-template-columns: 1fr;
          }

          .investment-reasons {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .roadmap-item {
            gap: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default InvestorPage;