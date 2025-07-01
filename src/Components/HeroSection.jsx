import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <div className="hero-section">
    <style>
      {`
        .hero-section {
          position: relative;
          height: 100vh;
          /* Primary background image showing agricultural work (farmers in field) */
          background: url('https://images.unsplash.com/photo-1500932334442-8761ee4810a7') no-repeat center center/cover;
          /* Fallback image if primary fails: https://images.unsplash.com/photo-1592982538447-2e5b2d90ca7e */
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          overflow: hidden;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          padding: 20px;
          animation: fadeIn 1.5s ease-in-out;
        }
        .hero-content h1 {
          font-size: 4rem;
          font-weight: 700;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        .hero-content p {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }
        .hero-content .btn {
          font-size: 1.2rem;
          padding: 0.75rem 2rem;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }
        .hero-content .btn:hover {
          transform: scale(1.1);
          background-color: #218838;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
          .hero-content p {
            font-size: 1.2rem;
          }
          .hero-content .btn {
            font-size: 1rem;
            padding: 0.5rem 1.5rem;
          }
        }
      `}
    </style>
    <div className="hero-overlay"></div>
    <div className="hero-content">
      <h1>Grow with AgroFarm</h1>
      <p>Discover premium organic products for sustainable farming</p>
      <Link to="/products" className="btn btn-success">
        Shop Now
      </Link>
    </div>
  </div>
);

export default HeroSection;