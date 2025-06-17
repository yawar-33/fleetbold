'use client'
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="contact-section justify-center flex">
      <div className="contact-container justify-center">
        
        {/* Left Side - Explanation Card */}
        <div className="explanation-card">
          <div className="card-content">
            <h2 className="card-title">
              We're Here for the One Question You Still Have
            </h2>
            <p className="card-description">
              You've scrolled, clicked, maybe even zoomed in. But if there's one thing we didn't cover, send it over. We'll get you the answer.
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="form-container">
          <div className="form-wrapper" onSubmit={handleSubmit}>
            
            {/* Name Field */}
            <div className="form-field">
              <label className="field-label">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Alex Smith"
                className="form-input"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Phone Field */}
            <div className="form-field">
              <label className="field-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="(408)-000-0000"
                className="form-input"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-field">
              <label className="field-label">Email</label>
              <input
                type="email"
                name="email"
                placeholder="alex@fleetbold.com"
                className="form-input"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="submit-button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background-color: #000;
          padding: 100px 20px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-container {
          display: flex;
          gap: 40px;
          max-width: 1200px;
          width: 100%;
          align-items: center;
        }

        .explanation-card {
          background-color: #0c0c0f;
          border-radius: 8px;
          box-shadow: rgba(0, 0, 0, 0.05) 0px 0.796192px 2.38858px -0.625px, 
                      rgba(0, 0, 0, 0.05) 0px 2.41451px 7.24352px -1.25px, 
                      rgba(0, 0, 0, 0.05) 0px 6.38265px 19.148px -1.875px, 
                      rgba(0, 0, 0, 0.05) 0px 20px 60px -2.5px;
          padding: 60px 40px;
          width: 100%;
          max-width: 400px;
        }

        .card-content {
          text-align: center;
        }

        .card-title {
          font-family: "Outfit", "Outfit Placeholder", sans-serif;
          font-size: 25px;
          font-weight: 500;
          color: rgb(255, 255, 255);
          margin: 0 0 28px 0;
          line-height: 1.2;
        }

        .card-description {
          font-family: "Outfit", "Outfit Placeholder", sans-serif;
          font-size: 18px;
          font-weight: 300;
          line-height: 1.4em;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }

        .form-container {
          width: 100%;
          max-width: 400px;
          display: flex;
          justify-content: center;
        }

        .form-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .field-label {
          font-family: "Inter", "Inter Placeholder", sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: rgb(136, 136, 136);
          margin: 0;
        }

        .form-input {
          background: rgba(187, 187, 187, 0.15);
          border: 1px solid rgba(136, 136, 136, 0.1);
          border-radius: 10px;
          padding: 12px;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #999999;
          height: 40px;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .form-input:focus {
          border-color: #0099ff;
        }

        .form-input::placeholder {
          color: #999999;
        }

        .submit-button {
          background-color: rgb(51, 51, 51);
          border: none;
          border-radius: 10px;
          height: 40px;
          width: 240px;
          font-family: "Inter", "Inter Placeholder", sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: rgb(255, 255, 255);
          cursor: pointer;
          transition: background-color 0.2s ease;
          align-self: flex-start;
        }

        .submit-button:hover {
          background-color: rgb(64, 64, 64);
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .contact-section {
            padding: 60px 20px;
          }
          
          .contact-container {
            flex-direction: column;
            gap: 40px;
            max-width: 500px;
          }

          .explanation-card {
            max-width: 100%;
            padding: 40px 30px;
          }

          .card-title {
            font-size: 22px;
            margin-bottom: 20px;
          }

          .card-description {
            font-size: 16px;
          }

          .form-container {
            max-width: 100%;
          }

          .submit-button {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .contact-section {
            padding: 40px 15px;
          }

          .explanation-card {
            padding: 30px 20px;
          }

          .card-title {
            font-size: 20px;
          }

          .card-description {
            font-size: 15px;
          }

          .form-wrapper {
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactUs;