import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Kalam&family=Playfair+Display:wght@600&family=Roboto:wght@400;500&display=swap"
        rel="stylesheet"
      />

      {/* Embedded CSS Styles */}
      <style>{`
        .contactus-wrapper {
          background: linear-gradient(to bottom, #f3fdf5, #ffffff);
          font-family: 'Roboto', sans-serif;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          color: #2f7a3e;
          font-weight: 600;
        }

        .info-card {
          background-color: #eafaf0;
          border: 2px solid #c8e6c9;
          border-radius: 15px;
          padding: 20px;
          text-align: center;
          transition: 0.3s ease;
        }

        .info-card:hover {
          background-color: #d0f0dd;
          transform: translateY(-5px);
        }

        .info-icon {
          font-size: 2rem;
          color: #388e3c;
          margin-bottom: 10px;
        }

        .form-card {
          background: #ffffff;
          border-left: 6px solid #4caf50;
          border-radius: 15px;
        }

        .form-title {
          font-family: 'Kalam', cursive;
          font-size: 1.8rem;
          color: #2f7a3e;
        }

        .btn-green {
          background-color: #4caf50;
          color: white;
          font-weight: bold;
          border-radius: 8px;
          font-family: 'Roboto', sans-serif;
        }

        .btn-green:hover {
          background-color: #388e3c;
        }
      `}</style>

      <div className="contactus-wrapper">
        <div className="container py-5">
          <h2 className="section-title text-center mb-5">🌿 Get in Touch with Lavanya Agro</h2>

          <div className="row g-4">
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
    </>
  );
};

export default ContactUs;
