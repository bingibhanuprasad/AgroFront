import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import tomatoes from '../assets/tomatoes.jpg';  
import carrots from '../assets/carrots.jpg';
import surface from '../assets/surface.jpg';
import green from '../assets/green.jpg';
import brinjal from '../assets/brijal.jpg';
const vegetables = [
  {
    id: 1,
    name: 'Fresh Carrot',
    image: carrots ,
       price: '₹40/kg',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Organic Tomato',
    image: tomatoes, // ✅ Local image used correctly
    price: '₹30/kg',
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Green Capsicum',
    image: surface,
      price: '₹60/kg',
    rating: 4.6,
  },
  {
    id: 4,
    name: 'Spinach',
    image: green ,
     price: '₹25/bunch',
    rating: 4.8,
  },
  {
    id: 5,
    name: 'Brinjal',
    image: brinjal,
       price: '₹35/kg',
    rating: 4.4,
  },
];

const VegetableCategoryPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (veg) => {
    setCart([...cart, veg]);
    alert(`${veg.name} added to cart!`);
  };

  return (
    <div className="container py-5" style={{ fontFamily: "'Kalam', cursive" }}>
      <h2 className="text-center mb-5 text-success fw-bold">Fresh Vegetables for You</h2>
      <div className="row g-4">
        {vegetables.map((veg) => (
          <div className="col-md-4" key={veg.id}>
            <div className="card shadow-sm border-0 h-100">
              <img
                src={veg.image}
                className="card-img-top"
                alt={veg.name}
                style={{
                  height: '220px',
                  objectFit: 'cover',
                  borderRadius: '10px 10px 0 0',
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
                }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold text-success">{veg.name}</h5>
                <p className="text-muted">{veg.price}</p>
                <p>
                  {'⭐'.repeat(Math.floor(veg.rating))}{' '}
                  <span className="text-warning">({veg.rating})</span>
                </p>
                <button
                  className="btn btn-outline-success px-4"
                  onClick={() => addToCart(veg)}
                >
                  Add to Cart 🛒
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VegetableCategoryPage;
