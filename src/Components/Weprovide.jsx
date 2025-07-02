import React from 'react';
import { FaLeaf, FaHeadset, FaTruck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../CSS/Weprovide.css'; // Optional for extra styles

const Weprovide = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4" style={{ fontFamily: "'Kalam', cursive", color: 'green' }}>
        What We Provide
      </h2>
      <div className="row g-4">
        {/* Card 1: Today's Offer */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <FaLeaf size={40} color="green" />
              <h5 className="card-title mt-3" style={{ fontFamily: "'Kalam', cursive" }}>
                Today's Offer
              </h5>
              <p className="card-text">
                Get fresh produce at unbeatable prices. Limited time deals on all organic vegetables and fruits!
              </p>
              <Link to="/products" className="btn btn-success">Shop Now</Link>
            </div>
          </div>
        </div>

        {/* Card 2: Customer Service */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <FaHeadset size={40} color="green" />
              <h5 className="card-title mt-3" style={{ fontFamily: "'Kalam', cursive" }}>
                24/7 Customer Service
              </h5>
              <p className="card-text">
                Our dedicated support team is available 24/7 to assist you with orders, queries, and guidance.
              </p>
              <Link to="/#contact" className="btn btn-outline-success">Contact Us</Link>
            </div>
          </div>
        </div>

        {/* Card 3: Free Shipping */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <FaTruck size={40} color="green" />
              <h5 className="card-title mt-3" style={{ fontFamily: "'Kalam', cursive" }}>
                Free Shipping
              </h5>
              <p className="card-text">
                Enjoy fast and free delivery on orders above ₹499. Freshness guaranteed right to your doorstep!
              </p>
              <Link to="/products" className="btn btn-success">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weprovide;
