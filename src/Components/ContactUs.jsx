import React from 'react';
import '../CSS/ContactUs.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="contactus-wrapper">
      <div className="container py-5">
        <h2 className="section-title text-center mb-5">🌿 Get in Touch with Lavanya Agro</h2>

        <div className="row g-4">
          {/* Contact Info Cards */}
          <div className="col-md-4">
            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <h5>Our Office</h5>
              <p>123 Green Field Road, Agro City, Telangana, India - 500001</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-card">
              <FaPhoneAlt className="info-icon" />
              <h5>Call Us</h5>
              <p>+91 98765 43210</p>
              <p>+91 91234 56789</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-card">
              <FaEnvelope className="info-icon" />
              <h5>Email Us</h5>
              <p>support@lavanyaagro.com</p>
              <p>info@lavanyaagro.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <div className="form-card p-4 p-md-5 shadow-lg">
              <h4 className="form-title mb-4">🌱 We'd love to hear from you</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Type your message here..."></textarea>
                </div>
                <button type="submit" className="btn btn-green w-100">Send Message 🌾</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
