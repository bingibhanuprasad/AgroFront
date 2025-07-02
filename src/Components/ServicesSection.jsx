import React from 'react';
import { GiPlantSeed, GiFarmTractor, GiDeliveryDrone } from 'react-icons/gi';

const ServicesSection = () => {
  return (
    <div id="services" className="services-section py-5">
      <style>{`
        .services-section {
          background-color: #f8f9fa;
        }
        .services-header {
          text-align: center;
          margin-bottom: 50px;
          animation: fadeInDown 0.8s ease-in-out;
        }
        .services-header h2 {
          font-size: 2.8rem;
          font-weight: bold;
          color: #2e4d2a;
          position: relative;
        }
        .services-header h2::after {
          content: '';
          display: block;
          width: 100px;
          height: 4px;
          background: linear-gradient(45deg, #28a745, #2e4d2a);
          margin: 10px auto 0;
        }

        .service-card {
          background-color: white;
          border-radius: 15px;
          padding: 30px 20px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
        }
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        .service-icon {
          font-size: 4rem;
          color: #28a745;
          margin-bottom: 20px;
        }
        .service-card h4 {
          font-size: 1.8rem;
          font-weight: 600;
          color: #2e4d2a;
          margin-bottom: 15px;
        }
        .service-card p {
          font-size: 1.05rem;
          color: #444;
          line-height: 1.6;
        }

        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .services-header h2 {
            font-size: 2rem;
          }
          .service-icon {
            font-size: 3rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="services-header">
          <h2>Our Services</h2>
        </div>

        <div className="row">
          <div className="col-md-4 d-flex mb-4">
            <div className="service-card w-100">
              <GiPlantSeed className="service-icon" />
              <h4>Organic Farming</h4>
              <p>We promote eco-friendly and sustainable organic farming methods that protect the environment and enhance soil health.</p>
            </div>
          </div>
          <div className="col-md-4 d-flex mb-4">
            <div className="service-card w-100">
              <GiFarmTractor className="service-icon" />
              <h4>Agricultural Consultancy</h4>
              <p>Expert consultancy services to help farmers improve yield, adopt smart agriculture, and maximize profits efficiently.</p>
            </div>
          </div>
          <div className="col-md-4 d-flex mb-4">
            <div className="service-card w-100">
              <GiDeliveryDrone className="service-icon" />
              <h4>Product Delivery</h4>
              <p>Reliable and fast delivery of fresh farm produce and products, right to your doorstep, powered by smart logistics.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
