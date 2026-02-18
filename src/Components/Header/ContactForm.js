import React, { useState } from 'react';
import './ContactForm.css';

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
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.readmeCheck) newErrors.readmeCheck = 'Please check the readme confirmation';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setTimeout(() => { setIsSubmitted(true); }, 500);
    } else {
      setErrors(newErrors);
    }
  };

  const handleNewSubmission = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', phone: '', service: '', message: '', readmeCheck: false });
    setErrors({});
  };

  return (
    <div className="cf-container">
      {/* Background image — semi-transparent */}
      <div className="cf-bg-image" />
      {/* Colour tint overlay */}
      <div className="cf-bg-overlay" />

      <div className="cf-card">
        {!isSubmitted ? (
          <>
            <div className="cf-header">
              <h1 className="cf-title">Contact Us</h1>
              <p className="cf-subtitle">We'd love to hear from you. Send us a message!</p>
            </div>

            <form onSubmit={handleSubmit} className="cf-form">
              {/* Name */}
              <div className="cf-form-group">
                <label className="cf-label">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`cf-input${errors.name ? ' cf-input--error' : ''}`}
                  placeholder="Enter your full name"
                />
                {errors.name && <span className="cf-error-msg">{errors.name}</span>}
              </div>

              {/* Email */}
              <div className="cf-form-group">
                <label className="cf-label">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`cf-input${errors.email ? ' cf-input--error' : ''}`}
                  placeholder="Enter your email address"
                />
                {errors.email && <span className="cf-error-msg">{errors.email}</span>}
              </div>

              {/* Phone */}
              <div className="cf-form-group">
                <label className="cf-label">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`cf-input${errors.phone ? ' cf-input--error' : ''}`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <span className="cf-error-msg">{errors.phone}</span>}
              </div>

              {/* Service */}
              <div className="cf-form-group">
                <label className="cf-label">Service *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className={`cf-select${errors.service ? ' cf-input--error' : ''}`}
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
                {errors.service && <span className="cf-error-msg">{errors.service}</span>}
              </div>

              {/* Message */}
              <div className="cf-form-group">
                <label className="cf-label">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`cf-input cf-textarea${errors.message ? ' cf-input--error' : ''}`}
                  placeholder="Tell us about your project or requirements"
                  rows="4"
                />
                {errors.message && <span className="cf-error-msg">{errors.message}</span>}
              </div>

              {/* Checkbox */}
              <div className="cf-checkbox-group">
                <label className="cf-checkbox-label">
                  <input
                    type="checkbox"
                    name="readmeCheck"
                    checked={formData.readmeCheck}
                    onChange={handleInputChange}
                    className="cf-checkbox"
                  />
                  <span>I have read and agree to the terms and conditions *</span>
                </label>
                {errors.readmeCheck && <span className="cf-error-msg">{errors.readmeCheck}</span>}
              </div>

              <button type="submit" className="cf-submit-btn">
                Send Message
              </button>
            </form>
          </>
        ) : (
          <div className="cf-success">
            <div className="cf-success-icon">✓</div>
            <h2 className="cf-success-title">Message Sent Successfully!</h2>
            <p className="cf-success-text">Thank you for contacting us. We'll get back to you soon.</p>
            <button onClick={handleNewSubmission} className="cf-new-btn">
              Send Another Message
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;