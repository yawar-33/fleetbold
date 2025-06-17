'use client'
import React, { useState } from 'react';

interface FeatureItemProps {
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => {
  return (
    <div className="framer-1jmzubo flex align-center">
      <div className="framer-1pdthz " aria-hidden="true"> <svg
    className="w-5 h-5 text-white-500 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg></div>
      <div className="framer-8wl8wq">
        <p className="framer-text">{text}</p>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <div style={{ backgroundColor: '#000', color: 'white', width: '100%', padding: '100px 40px' }} id="pricing-section">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header Section */}
        <section style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 70px' }}>
          <h2 style={{ 
            fontFamily: '"Outfit", "Outfit Placeholder", sans-serif',
            fontSize: '45px',
            fontWeight: '500',
            lineHeight: '1.2em',
            color: '#ffffff',
            marginBottom: '15px'
          }}>
            Pricing with No Hidden Fees
          </h2>
          <p style={{
            fontFamily: '"Outfit", "Outfit Placeholder", sans-serif',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '1.5em',
            color: 'rgba(255, 255, 255, 0.8)',
            margin: 0
          }}>
            Our modern design, real-time insights, and seamless tools deliver the control and confidence you need to scale. No long-term commitments, surprise charges, or setup costs—just clarity and performance.
          </p>
        </section>
        
        {/* Cards Container */}
        <div className="framer-z0ssk2">
          
          {/* Starter Plan */}
          <div className="framer-kgo7za" data-border="true">
            <div className="framer-1gfbwed">
              <div className="framer-3t4ylf">
                <div className="framer-d92mk">
                  <div className="framer-n80pfj">
                    <div style={{position:'absolute',borderRadius:'inherit',top:0,right:0,bottom:0,left:0}}>
                      <img 
                        src="https://framerusercontent.com/images/mkZSznH7DLTlO0nLOHY1ndf2ndw.png" 
                        alt="" 
                        style={{display:'block',width:'100%',height:'100%',borderRadius:'inherit',objectPosition:'center',objectFit:'cover'}}
                      />
                    </div>
                  </div>
                  <div className="framer-16gfye3">
                    <p className="framer-text">Starter Plan</p>
                  </div>
                </div>
                <div className="framer-q70f1m">
                  <div className="framer-su3t6q">
                    <p className="framer-text">$ 9.99/month</p>
                  </div>
                </div>
                <div className="framer-15bq62u">
                  <div className="framer-bagpdz">
                    <p className="framer-text">FREE TRIAL for 30 days</p>
                  </div>
                </div>
              </div>
              <div className="framer-1bv5bwc"></div>
              <div className="framer-fcdxhq">
                <FeatureItem text="Tesla Fleet Live Monitor" />
                <FeatureItem text="GeoFence Alerts" />
                <FeatureItem text="Tesla SuperCharger Report" />
                <FeatureItem text="Tesla Trip Route History" />
                <FeatureItem text="Up to 1 Year Trip History" />
                <FeatureItem text="Bouncie Integration" />
                <FeatureItem text="Whatsapp DM Integration" />
                <FeatureItem text="Vehicles DTC Alerts" />
                <FeatureItem text="Tolls to Booking Sync" />
              </div>
            </div>
            <div className="framer-9inqei">
              <div className="framer-6oxp2e-container">
                <a className="framer-ONXRv framer-7jk1m4 framer-v-7jk1m4 framer-qiiiez" data-border="true">
                  <div className="framer-14dgct4">
                    <div className="framer-2ztnzq">
                      <p className="framer-text">Get Started</p>
                    </div>
                    <div className="framer-qspc07">
                      <div className="framer-7kh0sx" aria-hidden="true"></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="framer-108250c" data-border="true">
            <div className="framer-1pjs9xc">
              <div className="framer-5c3smi">
                <div className="framer-ejat6c">
                  <div className="framer-1rv2fwm">
                    <div className="framer-ezg7gp">
                      <div style={{position:'absolute',borderRadius:'inherit',top:0,right:0,bottom:0,left:0}}>
                        <img 
                          src="https://framerusercontent.com/images/dCFrjWpEvtmrQJUXKwtgVUcjE.png" 
                          alt="" 
                          style={{display:'block',width:'100%',height:'100%',borderRadius:'inherit',objectPosition:'center',objectFit:'cover'}}
                        />
                      </div>
                    </div>
                    <div className="framer-1wojdxq">
                      <p className="framer-text">Premium</p>
                    </div>
                  </div>
                </div>
                <div className="framer-ygle17">
                  <div className="framer-1n6gds2">
                    <p className="framer-text">$ 19.95/month</p>
                  </div>
                </div>
                <div className="framer-141y6an">
                  <div className="framer-zak9d1">
                    <p className="framer-text">Coming Soon | Priority rollout</p>
                    <p className="framer-text">for existing users</p>
                  </div>
                </div>
              </div>
              <div className="framer-sxk892"></div>
              <div className="framer-16yd87h">
                <FeatureItem text="ALL IN STARTER PLAN" />
                <FeatureItem text="Turo Checkout Assistant" />
                <FeatureItem text="IRS-Compliant Mileage Report" />
                <FeatureItem text="Tesla Guest Key Generator" />
                <FeatureItem text="Tesla Remote Commands" />
                <FeatureItem text="AI Turo Booking Management" />
                <FeatureItem text="Bookings Tolls Report" />
                <FeatureItem text="Tesla Auto Kill Switch" />
                <FeatureItem text="Late Return AutoDetector" />
                <FeatureItem text="MooveTrax Full Integration" />
                <FeatureItem text="Zubie Full Integration" />
                <FeatureItem text="OneStep GPS Full Integration" />
                <FeatureItem text="Excess Miles Alert" />
                <FeatureItem text="Possible Vehicle Towed" />
                <FeatureItem text="Non Review Detected" />
                <FeatureItem text="Possible Smoking Violation" />
              </div>
            </div>
            <div className="framer-jpvl74">
              <div className="framer-1bl8u6h">
                <div className="framer-19sseu3">
                  <div className="framer-1rqbcdh">
                    <p className="framer-text">Email</p>
                  </div>
                  <div className="framer-form-text-input framer-form-input-wrapper framer-butpc">
                    <input 
                      type="email" 
                      name="Email" 
                      placeholder="jane@fleetbold.com" 
                      className="framer-form-input framer-form-input-empty" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="framer-1w11dbe-container">
                  <button 
                    type="submit" 
                    className="framer-5pHxE framer-wal6u7 framer-v-wal6u7" 
                    onClick={handleSubmit}
                  >
                    <div className="framer-75go7p">
                      <p className="framer-text">Claim my Spot!</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="framer-14y7761" data-border="true">
            <div className="framer-1a6d73t">
              <div className="framer-5nugq8">
                <div className="framer-lm80sb">
                  <div className="framer-auf783">
                    <div style={{position:'absolute',borderRadius:'inherit',top:0,right:0,bottom:0,left:0}}>
                      <img 
                        src="https://framerusercontent.com/images/fT7uaDhP4VAjXwkxnYed6Neo5M.png" 
                        alt="" 
                        style={{display:'block',width:'100%',height:'100%',borderRadius:'inherit',objectPosition:'center',objectFit:'cover'}}
                      />
                    </div>
                  </div>
                  <div className="framer-b1wnjr">
                    <p className="framer-text">Enterprise</p>
                  </div>
                </div>
                <div className="framer-1y4oawr">
                  <div className="framer-1mdrb2l">
                    <p className="framer-text">Contact us</p>
                  </div>
                </div>
                <div className="framer-hczz0z">
                  <div className="framer-k2dwin">
                    <p className="framer-text">*Email to support@fleetbold.com</p>
                  </div>
                </div>
              </div>
              <div className="framer-1jzuobb"></div>
              <div className="framer-196yxr5">
                <FeatureItem text="ALL IN PREMIUM PLAN" />
                <FeatureItem text="Booking Behaviour Report" />
                <FeatureItem text="Remote Setup" />
                <FeatureItem text="Dedicated account manager" />
                <FeatureItem text="CRM Integration" />
                <FeatureItem text="Possible Commercial Use Alert" />
                <FeatureItem text="Turo Smart Dispute Report" />
                <FeatureItem text="Vehicle Inactivity Alert" />
                <FeatureItem text="Tickets-to-Booking Sync" />
                <FeatureItem text="Ineligible Invoice Alert" />
                <FeatureItem text="Turo Invoice Dashboard" />
                <FeatureItem text="Towed Vehicle Detection" />
                <FeatureItem text="Criminal Zone Alert" />
                <FeatureItem text="Suspicious Activity Detected" />
                <FeatureItem text="Risky Driver Report" />
                <FeatureItem text="Possible Late Return" />
                <FeatureItem text="Upcoming Trip in Risk" />
              </div>
            </div>
            <div className="framer-cvt2eu"></div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        /* Font Face Definitions */
        @font-face {
          font-family: Outfit;
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/outfit/v11/QGYvz_MVcBeNP4NJtEtq.woff2) format("woff2");
        }
        @font-face {
          font-family: Outfit;
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/outfit/v11/QGYvz_MVcBeNP4NJtEtq.woff2) format("woff2");
        }
        @font-face {
          font-family: Outfit;
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/outfit/v11/QGYvz_MVcBeNP4NJtEtq.woff2) format("woff2");
        }
        @font-face {
          font-family: Outfit;
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/outfit/v11/QGYvz_MVcBeNP4NJtEtq.woff2) format("woff2");
        }

        /* Base Styles */
        .framer-text {
          font-family: "Outfit", "Outfit Placeholder", sans-serif;
          margin: 0;
          padding: 0;
        }

        /* Container Styles */
        .framer-z0ssk2 {
          align-content: center;
          align-items: flex-start;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 20px;
          height: min-content;
          justify-content: center;
          max-width: 1000px;
          overflow: visible;
          padding: 0;
          position: relative;
          width: 100%;
          margin: 0 auto;
        }

        /* Card Base Styles */
        .framer-kgo7za, .framer-108250c, .framer-14y7761 {
          --border-bottom-width: 1px;
          --border-color: rgba(255, 255, 255, .5);
          --border-left-width: 1px;
          --border-right-width: 1px;
          --border-style: solid;
          --border-top-width: 1px;
          align-content: flex-start;
          align-items: flex-start;
          background-color: #0c0c0f;
          border-radius: 41px;
          display: flex;
          flex: none;
          flex-direction: column;
          flex-wrap: nowrap;
          justify-content: flex-start;
          min-width: 320px;
          overflow: hidden;
          position: relative;
          width: 320px;
        }

        .framer-kgo7za {
          gap: 259px;
          height: 1060.41px;
          padding: 50px 20px 198px 30px;
        }

        .framer-108250c {
          gap: 39px;
          height: min-content;
          padding: 62px 20px 86px 30px;
        }

        .framer-14y7761 {
          gap: 55px;
          height: min-content;
          padding: 50px 20px 191px 30px;
        }

        [data-border="true"]:after {
          content: "";
          border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0);
          border-color: var(--border-color, none);
          border-style: var(--border-style, none);
          width: 100%;
          height: 100%;
          position: absolute;
          box-sizing: border-box;
          left: 0;
          top: 0;
          border-radius: inherit;
          pointer-events: none;
        }

        /* Header Sections */
        .framer-1gfbwed, .framer-1pjs9xc, .framer-1a6d73t {
          align-content: center;
          align-items: center;
          display: flex;
          flex: none;
          flex-direction: column;
          flex-wrap: nowrap;
          gap: 25px;
          height: min-content;
          justify-content: center;
          overflow: hidden;
          padding: 0;
          position: relative;
          width: 100%;
        }

        .framer-3t4ylf, .framer-5c3smi, .framer-5nugq8 {
          align-content: center;
          align-items: flex-start;
          display: flex;
          flex: none;
          flex-direction: column;
          flex-wrap: nowrap;
          gap: 10px;
          height: min-content;
          justify-content: center;
          overflow: hidden;
          padding: 0;
          position: relative;
          width: 100%;
        }

        /* Icon and Text Rows */
        .framer-d92mk, .framer-ejat6c, .framer-lm80sb {
          align-content: center;
          align-items: center;
          display: flex;
          flex: none;
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 10px;
          height: min-content;
          justify-content: flex-start;
          overflow: hidden;
          padding: 0;
          position: relative;
          width: 100%;
        }

        .framer-1rv2fwm {
          align-content: center;
          align-items: center;
          display: flex;
          flex: none;
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 10px;
          height: min-content;
          justify-content: center;
          overflow: hidden;
          padding: 0;
          position: relative;
          width: min-content;
        }

        /* Icons */
        .framer-n80pfj, .framer-ezg7gp, .framer-auf783 {
          aspect-ratio: 1 / 1;
          flex: none;
          height: 20px;
          opacity: .9;
          overflow: hidden;
          position: relative;
          width: 20px;
        }

        /* Text Containers */
        .framer-16gfye3 .framer-text,
        .framer-1wojdxq .framer-text,
        .framer-b1wnjr .framer-text {
          font-family: "Outfit", "Outfit Placeholder", sans-serif;
          font-weight: 300;
          font-size: 16px;
          line-height: 1.2em;
          color: rgba(255, 255, 255, 0.9);
          white-space: pre;
          width: auto;
        }

        .framer-su3t6q .framer-text,
        .framer-1n6gds2 .framer-text,
        .framer-1mdrb2l .framer-text {
          font-family: "Outfit", "Outfit Placeholder", sans-serif;
          font-size: 35px;
          font-weight: 600;
          color: rgb(255, 255, 255);
          line-height: 1.2em;
          white-space: nowrap;
        }

        .framer-bagpdz .framer-text,
        .framer-zak9d1 .framer-text,
        .framer-k2dwin .framer-text {
          font-family: "Outfit", "Outfit Placeholder", sans-serif;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          line-height: 1.2em;
          text-align: center;
        }

        /* Dividers */
        .framer-1bv5bwc, .framer-sxk892, .framer-1jzuobb {
          background: linear-gradient(90deg,#fff3,#ffffffb3 13.063063063063062% 85.73572657129786%,#ffffff80 100%,#fff3);
          flex: none;
          height: 1px;
          opacity: .9;
          overflow: hidden;
          position: relative;
          width: 265px;
        }

        /* Feature Lists */
        .framer-fcdxhq, .framer-16yd87h, .framer-196yxr5 {
          align-content: center;
          align-items: start;
          display: flex;
          flex: none;
          flex-direction: column;
          flex-wrap: nowrap;
          gap: 10px;
          height: min-content;
          justify-content: center;
          overflow: hidden;
          padding: 0;
          position: relative;
          width: 100%;
        }

        .framer-1jmzubo {
          align-content: center;
          align-items: center;
          display: flex;
          flex: none;
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 10px;
          height: min-content;
          justify-content: flex-start;
          overflow: hidden;
          padding: 0;
          position: relative;
          width: 100%;
        }

        .framer-1pdthz {
          flex: none;
          height: 20px;
          position: relative;
          width: 20px;
          background-size: 100% 100%;
          background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 13.567 7.683 C 13.685 7.8 13.75 7.959 13.75 8.125 C 13.75 8.291 13.685 8.45 13.567 8.567 L 9.192 12.942 C 9.075 13.06 8.916 13.125 8.75 13.125 C 8.584 13.125 8.425 13.06 8.308 12.942 L 6.433 11.067 C 6.189 10.823 6.189 10.427 6.433 10.183 C 6.677 9.939 7.073 9.939 7.317 10.183 L 8.75 11.616 L 12.683 7.683 C 12.8 7.565 12.959 7.5 13.125 7.5 C 13.291 7.5 13.45 7.565 13.567 7.683 Z M 18.125 10 C 18.125 14.487 14.487 18.125 10 18.125 C 5.513 18.125 1.875 14.487 1.875 10 C 1.875 5.513 5.513 1.875 10 1.875 C 14.485 1.88 18.12 5.515 18.125 10 Z M 16.875 10 C 16.875 6.203 13.797 3.125 10 3.125 C 6.203 3.125 3.125 6.203 3.125 10 C 3.125 13.797 6.203 16.875 10 16.875 C 13.795 16.871 16.871 13.795 16.875 10 Z" fill="rgb(255, 255, 255)"></path></svg>');
        }

        .framer-8wl8wq .framer-text {
          color: rgb(255, 255, 255);
          font-family: "Outfit", "Outfit Placeholder", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.2em;
        }

        /* Button Styles */
        .framer-9inqei {
          align-content: center;
          align-items: center;
          display: flex;
          flex: none;
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 10px;
          height: min-content;
          justify-content: center;
          overflow: hidden;
          padding: 0;
          position: relative;
          width: 100%;
        }

        .framer-6oxp2e-container {
          flex: 1 0 0px;
          height: auto;
          position: relative;
          width: 1px;
        }

        .framer-ONXRv {
          --border-bottom-width: 1px;
          --border-color: rgba(255, 255, 255, 0.5);
          --border-left-width: 1px;
          --border-right-width: 1px;
          --border-style: solid;
          --border-top-width: 1px;
          background: linear-gradient(259deg, rgb(36, 36, 36) 0%, rgb(16, 16, 16) 100%);
          border-radius: 4px;
          box-shadow: none;
          width: 100%;
          opacity: 1;
          align-content: center;
          align-items: center;
          cursor: pointer;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 10px;
          height: min-content;
          justify-content: center;
          overflow: hidden;
          padding: 10px 0;
          position: relative;
          text-decoration: none;
          width: 270px;
        }

        .framer-14dgct4 {
          align-content: center;
          align-items: center;
          display: flex;
          flex: 1 0 0px;
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 10px;
          height: min-content;
          justify-content: center;
          overflow: visible;
          padding: 0;
          position: relative;
          width: 1px;
        }

        .framer-2ztnzq .framer-text {
          font-family: "Outfit", "Outfit Placeholder", sans-serif;
          font-size: 18px;
          color: rgb(255, 255, 255);
        }

        .framer-qspc07 {
          flex: none;
          height: 28px;
          overflow: visible;
          position: relative;
          width: 28px;
        }

        .framer-7kh0sx {
          flex: none;
          height: 20px;
          left: calc(50.00000000000002% - 20px / 2);
          position: absolute;
          top: calc(50.00000000000002% - 20px / 2);
          width: 20px;
          background-size: 100% 100%;
          background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 20 20'><path d='M 17.317 10.442 L 11.692 16.067 C 11.448 16.311 11.052 16.311 10.808 16.067 C 10.564 15.823 10.564 15.427 10.808 15.183 L 15.366 10.625 L 3.125 10.625 C 2.78 10.625 2.5 10.345 2.5 10 C 2.5 9.655 2.78 9.375 3.125 9.375 L 15.366 9.375 L 10.808 4.817 C 10.564 4.573 10.564 4.177 10.808 3.933 C 11.052 3.689 11.448 3.689 11.692 3.933 L 17.317 9.558 C 17.435 9.675 17.5 9.834 17.5 10 C 17.5 10.166 17.435 10.325 17.317 10.442 Z' fill='rgb(255,255,255)'></path></svg>");
        }

        /* Form Styles */
        .framer-jpvl74 {
          align-content: center;
          align-items: center;
          display: flex;
          flex: none;
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 10px;
          height: min-content;
          justify-content: center;
          overflow: hidden;
          padding: 0;
          position: relative;
          width: 100%;
        }

        .framer-1bl8u6h {
          align-content: flex-start;
          align-items: flex-start;
          display: flex;
          flex: none;
          flex-direction: column;
          flex-wrap: nowrap;
          gap: 20px;
          height: min-content;
          justify-content: flex-start;
          overflow: hidden;
          padding: 20px;
          position: relative;
          width: 280px;
        }

        .framer-19sseu3 {
          align-content: flex-start;
          align-items: flex-start;
          display: flex;
          flex: none;
          flex-direction: column;
          flex-wrap: nowrap;
          gap: 10px;
          height: min-content;
          justify-content: flex-start;
          padding: 0;
          position: relative;
          width: 100%;
        }

        .framer-1rqbcdh .framer-text {
          font-family: "Inter", "Inter Placeholder", sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: rgb(136, 136, 136);
        }

        .framer-butpc {
          --framer-input-background: rgba(187, 187, 187, .15);
          --framer-input-border-bottom-width: 1px;
          --framer-input-border-color: rgba(136, 136, 136, .1);
          --framer-input-border-left-width: 1px;
          --framer-input-border-radius-bottom-left: 10px;
          --framer-input-border-radius-bottom-right: 10px;
          --framer-input-border-radius-top-left: 10px;
          --framer-input-border-radius-top-right: 10px;
          --framer-input-border-right-width: 1px;
          --framer-input-border-style: solid;
          --framer-input-border-top-width: 1px;
          --framer-input-focused-border-color: #0099ff;
          --framer-input-focused-border-style: solid;
          --framer-input-focused-border-width: 1px;
          --framer-input-font-color: #999999;
          --framer-input-font-family: "Inter";
          --framer-input-font-letter-spacing: 0em;
          --framer-input-font-line-height: 1.2em;
          --framer-input-font-size: 14px;
          --framer-input-font-weight: 400;
          --framer-input-icon-color: #999999;
          --framer-input-padding: 12px;
          --framer-input-placeholder-color: #999999;
          flex: none;
          height: 40px;
          position: relative;
          width: 100%;
        }

        .framer-form-input {
          padding: var(--framer-input-padding);
          background: var(--framer-input-background);
          font-family: var(--framer-input-font-family);
          font-weight: var(--framer-input-font-weight);
          font-size: var(--framer-input-font-size);
          color: var(--framer-input-font-color);
          border: none;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          height: 100%;
          letter-spacing: var(--framer-input-font-letter-spacing);
          line-height: var(--framer-input-font-line-height);
          border-radius: 10px;
          outline: none;
        }

        .framer-form-input::placeholder {
          color: var(--framer-input-placeholder-color);
        }

        .framer-form-input:focus {
          border: 1px solid var(--framer-input-focused-border-color);
        }

        .framer-1w11dbe-container {
          flex: none;
          height: 40px;
          position: relative;
          width: 100%;
        }

        .framer-5pHxE {
          align-content: center;
          align-items: center;
          cursor: pointer;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 0px;
          height: 40px;
          justify-content: center;
          overflow: visible;
          padding: 0;
          position: relative;
          width: 240px;
          background-color: rgb(51, 51, 51);
          border-radius: 10px;
          border: none;
          width: 100%;
        }

        .framer-5pHxE:hover {
          background-color: rgb(64, 64, 64);
        }

        .framer-75go7p .framer-text {
          font-family: "Inter", "Inter Placeholder", sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: rgb(255, 255, 255);
          cursor: pointer;
          user-select: none;
        }

        /* Enterprise empty button area */
        .framer-cvt2eu {
          align-content: center;
          align-items: center;
          display: flex;
          flex: none;
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 10px;
          height: min-content;
          justify-content: center;
          min-height: 48px;
          overflow: hidden;
          padding: 0;
          position: relative;
          width: 100%;
        }

        /* Responsive Design */
        @media (max-width: 809px) {
          .framer-z0ssk2 {
            flex-direction: column;
            gap: 15px;
            width: 90%;
          }
          
          .framer-kgo7za, .framer-108250c, .framer-14y7761 {
            width: 100%;
            max-width: 332px;
          }
        }

        @media (min-width: 810px) and (max-width: 1199px) {
          .framer-z0ssk2 {
            gap: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default Pricing;