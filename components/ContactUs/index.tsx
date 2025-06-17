'use client';
import React, { useState } from 'react';

const FramerContactForm = () => {
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
    <div 
      className="framer-174nnac" 
      data-framer-name="Contact"
      style={{
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff0',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        gap: '24px',
        height: 'min-content',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '695px 40px 100px',
        position: 'relative',
        width: '100%'
      }}
    >
      <div 
        className="framer-1ucknjc" 
        data-framer-name="Column"
        style={{
          alignContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          gap: '10px',
          height: 'min-content',
          justifyContent: 'center',
          maxWidth: '400px',
          overflow: 'visible',
          padding: '0',
          position: 'relative',
          width: '100%'
        }}
      >
        <form 
          className="framer-q6qsdo"
          style={{
            alignContent: 'flex-start',
            alignItems: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            gap: '20px',
            height: 'min-content',
            justifyContent: 'flex-start',
            overflow: 'visible',
            padding: '0',
            position: 'relative',
            width: '100%'
          }}
        >
          <div 
            className="framer-163jugo" 
            id="contactlast"
            style={{
              alignContent: 'center',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              gap: '20px',
              height: 'min-content',
              justifyContent: 'center',
              minHeight: '21px',
              overflow: 'visible',
              padding: '0',
              position: 'relative',
              width: '100%'
            }}
          />
        </form>
      </div>

      <div 
        className="framer-1rtsi7d" 
        id="contactus"
        style={{
          alignContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          gap: '0px',
          height: '558px',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '0 176px',
          position: 'relative',
          width: 'min-content'
        }}
      >
        <div 
          className="framer-1q2810h-container"
          style={{
            flex: 'none',
            height: 'auto',
            position: 'relative',
            width: '369px',
            willChange: 'transform',
            opacity: 1,
            transform: 'none'
          }}
        //   tabIndex="0"
        >
          <div 
            className="framer-67fIx framer-1swwa7j framer-v-h8zrlw" 
            data-framer-name="ContactUS Explanation"
            style={{
              backgroundColor: '#0c0c0f',
              borderRadius: '8px',
              boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0.796192px 2.38858px -0.625px, rgba(0, 0, 0, 0.05) 0px 2.41451px 7.24352px -1.25px, rgba(0, 0, 0, 0.05) 0px 6.38265px 19.148px -1.875px, rgba(0, 0, 0, 0.05) 0px 20px 60px -2.5px',
            //   width: '100%',
              opacity: 1,
              alignContent: 'center',
              alignItems: 'center',
              cursor: 'default',
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'nowrap',
              gap: '10px',
              height: 'min-content',
              justifyContent: 'center',
              overflow: 'hidden',
              padding: '42px 0',
              position: 'relative',
              width: '330px'
            }}
          >
            <div 
              className="framer-g1gxba" 
              data-framer-name="CardFrame"
              style={{
                borderRadius: '8px',
                opacity: 1,
                alignContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flex: 'none',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                gap: '10px',
                height: 'min-content',
                justifyContent: 'center',
                overflow: 'hidden',
                padding: '0',
                position: 'relative',
                width: '100%'
              }}
            >
              <div 
                className="framer-g3tv8b"
                style={{
                  opacity: 1,
                  alignContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  flex: '1 0 0px',
                  flexDirection: 'row',
                  flexWrap: 'nowrap',
                  gap: '10px',
                  height: 'min-content',
                  justifyContent: 'center',
                  overflow: 'visible',
                  padding: '74px 0',
                  position: 'relative',
                  width: '1px'
                }}
              >
                <div 
                  className="framer-19uxhz1" 
                  data-framer-name="Card"
                  style={{
                    borderRadius: '8px',
                    boxShadow: 'none',
                    opacity: 1,
                    alignContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flex: 'none',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                    gap: '28px',
                    height: '326px',
                    justifyContent: 'flex-start',
                    overflow: 'hidden',
                    padding: '30px 15px',
                    position: 'relative',
                    width: '102%'
                  }}
                >
                  <div 
                    className="framer-1lye6s5"
                    style={{
                      outline: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      flexShrink: 0,
                      transform: 'none',
                      opacity: 1,
                      flex: 'none',
                      height: 'auto',
                      position: 'relative',
                      whiteSpace: 'pre-wrap',
                      width: '100%',
                      wordBreak: 'break-word',
                      wordWrap: 'break-word'
                    }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p 
                      style={{
                        fontFamily: '"Outfit", "Outfit Placeholder", sans-serif',
                        fontSize: '25px',
                        fontWeight: 500,
                        textAlign: 'center',
                        color: 'rgb(255, 255, 255)',
                        margin: 0,
                        padding: 0
                      }} 
                      className="framer-text"
                    >
                      We're Here for the One Question You Still Have
                    </p>
                  </div>
                  
                  <div 
                    className="framer-1bwe3jo"
                    style={{
                      outline: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      flexShrink: 0,
                      transform: 'none',
                      opacity: 1,
                      flex: 'none',
                      height: 'auto',
                      position: 'relative',
                      whiteSpace: 'pre-wrap',
                      width: '100%',
                      wordBreak: 'break-word',
                      wordWrap: 'break-word'
                    }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p 
                      style={{
                        fontFamily: '"Outfit", "Outfit Placeholder", sans-serif',
                        fontSize: '18px',
                        fontWeight: 300,
                        lineHeight: '1.4em',
                        textAlign: 'center',
                        color: 'rgba(255, 255, 255, 0.7)',
                        margin: 0,
                        padding: 0
                      }} 
                      className="framer-text"
                    >
                      You've scrolled, clicked, maybe even zoomed in. But if there's one thing we didn't cover, send it over. We'll get you the answer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="framer-125d7yg"
          style={{
            aspectRatio: '0.49404761904761907 / 1',
            backgroundColor: '#cef0',
            flex: 'none',
            height: '34%',
            position: 'relative',
            width: '99px'
          }}
        />

        <div 
          className="framer-1r62dxy"
          style={{
            alignContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flex: 'none',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            gap: '10px',
            height: 'min-content',
            justifyContent: 'center',
            minHeight: '553px',
            overflow: 'hidden',
            padding: '134px 0',
            position: 'relative',
            width: '382px'
          }}
        >
          <form 
            className="framer-1o0kc4f" 
            data-framer-name="Contact Form"
            onSubmit={handleSubmit}
            style={{
              alignContent: 'flex-start',
              alignItems: 'flex-start',
              display: 'flex',
              flex: 'none',
              flexDirection: 'column',
              flexWrap: 'nowrap',
              gap: '28px',
              height: 'min-content',
              justifyContent: 'flex-start',
              left: '50%',
              maxWidth: '100%',
              overflow: 'hidden',
              padding: '0',
              position: 'absolute',
              top: '50%',
              transform: 'translate(-50%,-50%)',
              width: 'min-content',
              zIndex: 1
            }}
          >
            {/* Name Field */}
            <label 
              className="framer-wqtjc8"
              style={{
                alignContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                flex: 'none',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                gap: '10px',
                height: '67px',
                justifyContent: 'flex-start',
                padding: '0',
                position: 'relative',
                width: '631px'
              }}
            >
              <div 
                className="framer-fbm6o1"
                style={{
                  outline: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  flexShrink: 0,
                  transform: 'none',
                  flex: 'none',
                  height: 'auto',
                  position: 'relative',
                  whiteSpace: 'pre',
                  width: 'auto'
                }}
                data-framer-component-type="RichTextContainer"
              >
                <p 
                  style={{
                    fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'rgb(136, 136, 136)',
                    margin: 0,
                    padding: 0
                  }} 
                  className="framer-text"
                >
                  Name
                </p>
              </div>
              <div 
                className="framer-form-text-input framer-form-input-wrapper framer-4o233m"
                style={{
                  background: 'rgba(187, 187, 187, 0.15)',
                  borderRadius: '10px',
                  border: '1px solid rgba(136, 136, 136, 0.1)',
                  flex: 'none',
                  height: '40px',
                  maxWidth: '631px',
                  position: 'relative',
                  width: '378px'
                }}
              >
                <input 
                  type="text" 
                  required 
                  name="name" 
                  placeholder="Alex Smith" 
                  className="framer-form-input"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    padding: '12px',
                    fontFamily: '"Inter"',
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#999999',
                    width: '100%',
                    height: '100%',
                    letterSpacing: '0em',
                    lineHeight: '1.2em'
                  }}
                />
              </div>
            </label>

            {/* Phone Number Field */}
            <label 
              className="framer-dq7c2z"
              style={{
                alignContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                flex: 'none',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                gap: '10px',
                height: 'min-content',
                justifyContent: 'flex-start',
                padding: '0',
                position: 'relative',
                width: '380px'
              }}
            >
              <div 
                className="framer-tzsqof"
                style={{
                  outline: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  flexShrink: 0,
                  transform: 'none',
                  flex: 'none',
                  height: 'auto',
                  position: 'relative',
                  whiteSpace: 'pre',
                  width: 'auto'
                }}
                data-framer-component-type="RichTextContainer"
              >
                <p 
                  style={{
                    fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'rgb(136, 136, 136)',
                    margin: 0,
                    padding: 0
                  }} 
                  className="framer-text"
                >
                  Phone Number
                </p>
              </div>
            </label>
            
            <div 
              className="framer-form-text-input framer-form-input-wrapper framer-1du3g77"
              style={{
                background: 'rgba(187, 187, 187, 0.15)',
                borderRadius: '10px',
                border: '1px solid rgba(136, 136, 136, 0.1)',
                flex: 'none',
                height: 'auto',
                position: 'relative',
                width: '379px'
              }}
            >
              <input 
                type="tel" 
                required 
                name="phone" 
                placeholder="(408)-000-0000" 
                className="framer-form-input"
                value={formData.phone}
                onChange={handleInputChange}
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  padding: '12px',
                  fontFamily: '"Inter"',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#999999',
                  width: '100%',
                  height: '40px',
                  letterSpacing: '0em',
                  lineHeight: '1.2em'
                }}
              />
            </div>

            {/* Email Field */}
            <label 
              className="framer-18t5w58"
              style={{
                alignContent: 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
                flex: 'none',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                gap: '10px',
                height: '64px',
                justifyContent: 'flex-start',
                padding: '0',
                position: 'relative',
                width: '379px'
              }}
            >
              <div 
                className="framer-s1jjgm"
                style={{
                  outline: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  flexShrink: 0,
                  transform: 'none',
                  flex: 'none',
                  height: 'auto',
                  position: 'relative',
                  whiteSpace: 'pre',
                  width: 'auto'
                }}
                data-framer-component-type="RichTextContainer"
              >
                <p 
                  style={{
                    fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'rgb(136, 136, 136)',
                    margin: 0,
                    padding: 0
                  }} 
                  className="framer-text"
                >
                  Email
                </p>
              </div>
              
              <div 
                className="framer-form-text-input framer-form-input-wrapper framer-bfbkmp"
                style={{
                  background: 'rgba(187, 187, 187, 0.15)',
                  borderRadius: '10px',
                  border: '1px solid rgba(136, 136, 136, 0.1)',
                  flex: 'none',
                  height: 'auto',
                  position: 'relative',
                  width: '100%'
                }}
              >
                <input 
                  type="email" 
                  required 
                  name="email" 
                  placeholder="alex@fleetbold.com" 
                  className="framer-form-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    padding: '12px',
                    fontFamily: '"Inter"',
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#999999',
                    width: '100%',
                    height: '40px',
                    letterSpacing: '0em',
                    lineHeight: '1.2em'
                  }}
                />
              </div>
            </label>

            {/* Submit Button */}
            <div 
              className="framer-1j4tok6-container"
              style={{
                flex: 'none',
                height: '40px',
                position: 'relative',
                width: '240px',
                zIndex: 1
              }}
            >
              <button 
                type="submit" 
                className="framer-u4eIJ framer-ou3b6x framer-v-ou3b6x" 
                data-reset="button"
                style={{
                  backgroundColor: 'rgb(51, 51, 51)',
                
                  width: '100%',
                  opacity: 1,
                  borderRadius: '10px',
                  willChange: 'transform',
                  border: 'none',
                  cursor: 'pointer',
                  alignContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'nowrap',
                  gap: '0px',
                  height: '40px',
                  justifyContent: 'center',
                  overflow: 'visible',
                  padding: '0',
                  position: 'relative',
                 
                }}
              
                data-framer-name="Default"
              >
                <div 
                  className="framer-equlgp"
                  style={{
                    outline: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    flexShrink: 0,
                    transform: 'none',
                    opacity: 1,
                    flex: 'none',
                    height: 'auto',
                    position: 'relative',
                    userSelect: 'none',
                    whiteSpace: 'pre',
                    width: 'auto'
                  }}
                  data-framer-component-type="RichTextContainer"
                >
                  <p 
                    style={{
                      fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'rgb(255, 255, 255)',
                      margin: 0,
                      padding: 0,
                      cursor: 'pointer',
                      userSelect: 'none'
                    }} 
                    className="framer-text"
                  >
                    Submit
                  </p>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FramerContactForm;