import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContentSection = () => {
  const [imageSrc, setImageSrc] = useState('https://images.unsplash.com/photo-1500595046743-ddf4d3d753fd');
  const fallbackImage = 'https://images.unsplash.com/photo-1500932334442-8761ee4810a7';

  const handleImageError = (e) => {
    console.error('Primary image failed to load:', e);
    setImageSrc(fallbackImage);
  };

  return (
    <div id="about" className="content-section">
      <style>
        {`
          .content-section {
        
            background-color: #f4f7f3;
          }
          .about-card {
            background: white;
            border-radius: 15px;
            border: 3px solid transparent;
            background-image: linear-gradient(white, white), linear-gradient(45deg, #28a745, #2e4d2a);
            background-origin: border-box;
            background-clip: padding-box, border-box;
            box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
            padding: 40px;
            animation: tiltIn 1.2s ease-in-out;
          }
          .about-image {
            max-width: 100%;
            height: auto;
            border-radius: 15px;
            transition: transform 0.3s ease;
            animation: fadeIn 1.5s ease-in-out;
          }
          .about-image:hover {
            transform: scale(1.05);
          }
          .about-card h2 {
            font-size: 2.8rem;
            font-weight: 700;
            color: #2e4d2a;
            margin-bottom: 1.5rem;
          }
          .about-card p {
            font-size: 1.2rem;
            color: #444;
            line-height: 1.8;
            margin-bottom: 2rem;
          }
          .about-card .btn {
            font-size: 1.1rem;
            padding: 0.75rem 2rem;
            background-color: #28a745;
            transition: transform 0.3s ease, background-color 0.3s ease;
            animation: pulse 2s infinite ease-in-out;
          }
          .about-card .btn:hover {
            transform: scale(1.05);
            background-color: #218838;
          }
          @keyframes tiltIn {
            0% { opacity: 0; transform: rotateY(10deg) translateY(20px); }
            100% { opacity: 1; transform: rotateY(0) translateY(0); }
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.03); }
            100% { transform: scale(1); }
          }
          @media (max-width: 768px) {
            .about-card h2 {
              font-size: 2rem;
            }
            .about-card p {
              font-size: 1rem;
            }
            .about-card .btn {
              font-size: 1rem;
              padding: 0.5rem 1.5rem;
            }
            .about-image {
              margin-top: 20px;
            }
          }
        `}
      </style>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="about-card">
              <h2>About AgroFarm</h2>
              <p>
                At BhanuAgroFarm, we are passionate about sustainable agriculture and delivering high-quality organic products. Our mission is to empower farmers and consumers with eco-friendly practices, ensuring fresh, healthy produce that nurtures both people and the planet. With years of expertise, we provide innovative farming solutions and reliable delivery services.
              </p>
              <Link to="/products" className="btn btn-success">
                Discover Products
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={imageSrc}
              alt="Agricultural crops"
              className="about-image"
              onError={handleImageError}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;