import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    readmeCheck: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'SEO Services',
    'Consulting',
    'Other'
  ];

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #6366f1 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  };

  const formCardStyle = {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
    width: '100%',
    maxWidth: '500px',
    padding: '40px',
    border: '1px solid rgba(255, 255, 255, 0.3)'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '30px'
  };

  const formGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  };

  const labelStyle = {
    fontWeight: '600',
    color: '#333',
    fontSize: '14px'
  };

  const inputStyle = {
    padding: '12px 16px',
    border: '2px solid rgba(139, 92, 246, 0.3)',
    borderRadius: '12px',
    fontSize: '14px',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit',
    background: 'rgba(255, 255, 255, 0.8)'
  };

  const inputErrorStyle = {
    ...inputStyle,
    borderColor: '#dc3545',
    background: 'rgba(255, 255, 255, 0.9)'
  };

  const selectStyle = {
    padding: '12px 16px',
    border: '2px solid rgba(139, 92, 246, 0.3)',
    borderRadius: '12px',
    fontSize: '14px',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit',
    background: 'rgba(255, 255, 255, 0.8)',
    cursor: 'pointer',
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    backgroundSize: '16px',
    paddingRight: '40px'
  };

  const selectFocusStyle = {
    ...selectStyle,
    borderColor: '#8b5cf6',
    boxShadow: '0 0 0 3px rgba(139, 92, 246, 0.1)',
    background: 'white',
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238b5cf6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e")`
  };

  const selectErrorStyle = {
    ...selectStyle,
    borderColor: '#dc3545',
    background: 'rgba(255, 255, 255, 0.9)',
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23dc3545' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e")`
  };

  const submitBtnStyle = {
    background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #6366f1 100%)',
    color: 'white',
    border: 'none',
    padding: '16px 30px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '10px',
    boxShadow: '0 4px 15px rgba(139, 92, 246, 0.4)'
  };

  const successStyle = {
    textAlign: 'center',
    padding: '40px 20px'
  };

  const successIconStyle = {
    width: '80px',
    height: '80px',
    background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #6366f1 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
    color: 'white',
    fontSize: '40px',
    fontWeight: 'bold'
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    if (!formData.readmeCheck) {
      newErrors.readmeCheck = 'Please check the readme confirmation';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setTimeout(() => {
        setIsSubmitted(true);
      }, 500);
    } else {
      setErrors(newErrors);
    }
  };

  const handleNewSubmission = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      readmeCheck: false
    });
    setErrors({});
  };

  return (
    <>
      <style>{`
        select option {
          background: linear-gradient(135deg, #fdf2f8 0%, #f3e8ff 50%, #e0e7ff 100%);
          color: #374151;
          padding: 8px 12px;
          border: none;
          font-size: 14px;
        }
        
        select option:hover {
          background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #6366f1 100%);
          color: white;
        }
        
        select option:checked {
          background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #6366f1 100%);
          color: white;
          font-weight: 600;
        }
        
        select::-webkit-scrollbar {
          width: 8px;
        }
        
        select::-webkit-scrollbar-track {
          background: rgba(139, 92, 246, 0.1);
          border-radius: 4px;
        }
        
        select::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #6366f1 100%);
          border-radius: 4px;
        }
        
        select::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #be185d 0%, #7c3aed 50%, #4338ca 100%);
        }
      `}</style>
      
      <div style={containerStyle}>
        <div style={formCardStyle}>
          {!isSubmitted ? (
            <>
              <div style={headerStyle}>
                <h1 style={{ 
                  margin: 0, 
                  background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #6366f1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontSize: '32px', 
                  fontWeight: '700',
                  marginBottom: '10px'
                }}>
                  Contact Us
                </h1>
                <p style={{ color: '#666', fontSize: '16px', margin: 0 }}>
                  We'd love to hear from you. Send us a message!
                </p>
              </div>
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={formGroupStyle}>
                  <label style={labelStyle}>Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={errors.name ? inputErrorStyle : inputStyle}
                    placeholder="Enter your full name"
                    onFocus={(e) => {
                      if (!errors.name) {
                        e.target.style.borderColor = '#8b5cf6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.1)';
                        e.target.style.background = 'white';
                      }
                    }}
                    onBlur={(e) => {
                      if (!errors.name) {
                        e.target.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                        e.target.style.boxShadow = 'none';
                        e.target.style.background = 'rgba(255, 255, 255, 0.8)';
                      }
                    }}
                  />
                  {errors.name && <span style={{ color: '#dc3545', fontSize: '12px' }}>{errors.name}</span>}
                </div>

                <div style={formGroupStyle}>
                  <label style={labelStyle}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={errors.email ? inputErrorStyle : inputStyle}
                    placeholder="Enter your email address"
                    onFocus={(e) => {
                      if (!errors.email) {
                        e.target.style.borderColor = '#8b5cf6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.1)';
                        e.target.style.background = 'white';
                      }
                    }}
                    onBlur={(e) => {
                      if (!errors.email) {
                        e.target.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                        e.target.style.boxShadow = 'none';
                        e.target.style.background = 'rgba(255, 255, 255, 0.8)';
                      }
                    }}
                  />
                  {errors.email && <span style={{ color: '#dc3545', fontSize: '12px' }}>{errors.email}</span>}
                </div>

                <div style={formGroupStyle}>
                  <label style={labelStyle}>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={errors.phone ? inputErrorStyle : inputStyle}
                    placeholder="Enter your phone number"
                    onFocus={(e) => {
                      if (!errors.phone) {
                        e.target.style.borderColor = '#8b5cf6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.1)';
                        e.target.style.background = 'white';
                      }
                    }}
                    onBlur={(e) => {
                      if (!errors.phone) {
                        e.target.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                        e.target.style.boxShadow = 'none';
                        e.target.style.background = 'rgba(255, 255, 255, 0.8)';
                      }
                    }}
                  />
                  {errors.phone && <span style={{ color: '#dc3545', fontSize: '12px' }}>{errors.phone}</span>}
                </div>

                <div style={formGroupStyle}>
                  <label style={labelStyle}>Service *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    style={errors.service ? selectErrorStyle : selectStyle}
                    onFocus={(e) => {
                      if (!errors.service) {
                        Object.assign(e.target.style, selectFocusStyle);
                      }
                    }}
                    onBlur={(e) => {
                      if (!errors.service) {
                        Object.assign(e.target.style, selectStyle);
                      }
                    }}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && <span style={{ color: '#dc3545', fontSize: '12px' }}>{errors.service}</span>}
                </div>

                <div style={formGroupStyle}>
                  <label style={labelStyle}>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    style={errors.message ? { ...inputErrorStyle, resize: 'vertical', minHeight: '100px' } : { ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                    placeholder="Tell us about your project or requirements"
                    rows="4"
                    onFocus={(e) => {
                      if (!errors.message) {
                        e.target.style.borderColor = '#8b5cf6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.1)';
                        e.target.style.background = 'white';
                      }
                    }}
                    onBlur={(e) => {
                      if (!errors.message) {
                        e.target.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                        e.target.style.boxShadow = 'none';
                        e.target.style.background = 'rgba(255, 255, 255, 0.8)';
                      }
                    }}
                  />
                  {errors.message && <span style={{ color: '#dc3545', fontSize: '12px' }}>{errors.message}</span>}
                </div>

                <div style={{ margin: '10px 0' }}>
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer', fontSize: '14px' }}>
                    <input
                      type="checkbox"
                      name="readmeCheck"
                      checked={formData.readmeCheck}
                      onChange={handleInputChange}
                      style={{ marginTop: '2px', accentColor: '#8b5cf6', cursor: 'pointer' }}
                    />
                    <span>I have read and agree to the terms and conditions *</span>
                  </label>
                  {errors.readmeCheck && <span style={{ color: '#dc3545', fontSize: '12px', display: 'block', marginTop: '4px' }}>{errors.readmeCheck}</span>}
                </div>

                <button
                  type="submit"
                  style={submitBtnStyle}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.4)';
                  }}
                >
                  Send Message
                </button>
              </form>
            </>
          ) : (
            <div style={successStyle}>
              <div style={successIconStyle}>✓</div>
              <h2 style={{ 
                background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #6366f1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: '28px', 
                marginBottom: '10px',
                fontWeight: '700'
              }}>
                Message Sent Successfully!
              </h2>
              <p style={{ color: '#666', fontSize: '16px', marginBottom: '30px' }}>
                Thank you for contacting us. We'll get back to you soon.
              </p>
              <button
                onClick={handleNewSubmission}
                style={{
                  background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #6366f1 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(139, 92, 246, 0.4)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.4)';
                }}
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactForm;