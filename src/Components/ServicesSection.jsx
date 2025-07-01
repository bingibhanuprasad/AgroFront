import React, { useState } from 'react';

const ServicesSection = () => {
  const [organicImage, setOrganicImage] = useState('https://images.unsplash.com/photo-1461354464878-ad92f492a5a0');
  const [consultancyImage, setConsultancyImage] = useState('https://images.unsplash.com/photo-1510076500-d480ae3a6f1f');
  const [deliveryImage, setDeliveryImage] = useState('https://images.unsplash.com/photo-1586525156503-99d6d156f3f1');
  const fallbackImage = 'https://images.unsplash.com/photo-1500932334442-8761ee4810a7';

  const handleImageError = (e, setImage) => {
    console.error('Service image failed to load:', e);
    setImage(fallbackImage);
  };

  return (
    <div id="services" className="services-section">
      <style>
        {`
          .services-section {
           
            background-color: #f8f9fa;
          }
          .services-header {
            text-align: center;
            margin-bottom: 50px;
            animation: slideIn 0.8s ease-in-out;
          }
          .services-header h2 {
            font-size: 2.8rem;
            font-weight: 700;
            color: #2e4d2a;
            position: relative;
            display: inline-block;
          }
          .services-header h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 4px;
            background: linear-gradient(45deg, #28a745, #2e4d2a);
          }
          .service-card {
            background: white;
            border-radius: 15px;
            border: 3px solid transparent;
            background-image: linear-gradient(white, white), linear-gradient(45deg, #28a745, #2e4d2a);
            background-origin: border-box;
            background-clip: padding-box, border-box;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            padding: 30px;
            text-align: center;
            min-height: 350px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            animation: fadeIn 1s ease-in-out;
          }
          .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          }
          .service-icon {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            margin: 0 auto 20px;
            transition: transform 0.3s ease;
          }
          .service-icon:hover {
            transform: scale(1.1);
          }
          .service-card h4 {
            font-size: 1.8rem;
            font-weight: 700;
            color: #2e4d2a;
            margin-bottom: 15px;
          }
          .service-card p {
            font-size: 1.1rem;
            color: #444;
            line-height: 1.6;
            flex-grow: 1;
          }
          @keyframes slideIn {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @media (max-width: 768px) {
            .services-header h2 {
              font-size: 2rem;
            }
            .service-card h4 {
              font-size: 1.5rem;
            }
            .service-card p {
              font-size: 1rem;
            }
            .service-card {
              margin-bottom: 20px;
              min-height: 300px;
            }
            .service-icon {
              width: 60px;
              height: 60px;
            }
          }
        `}
      </style>
      <div className="container">
        <div className="services-header">
          <h2>Our Services</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="service-card">
              <img
                src={organicImage}
                alt="Organic Farming"
                className="service-icon"
                onError={(e) => handleImageError(e, setOrganicImage)}
              />
              <h4>Organic Farming</h4>
              <p>We provide innovative organic farming solutions to grow healthy, sustainable crops free from harmful chemicals.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card">
              <img
                src={consultancyImage}
                alt="Consultancy"
                className="service-icon"
                onError={(e) => handleImageError(e, setConsultancyImage)}
              />
              <h4>Consultancy</h4>
              <p>Our experts offer tailored advice on modern farming techniques to maximize yield and sustainability.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card">
              <img
                src={deliveryImage}
                alt="Product Delivery"
                className="service-icon"
                onError={(e) => handleImageError(e, setDeliveryImage)}
              />
              <h4>Product Delivery</h4>
              <p>Fast, reliable delivery of fresh agricultural products straight to your door, ensuring quality and convenience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;