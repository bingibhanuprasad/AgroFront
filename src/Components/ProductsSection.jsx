import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import chickens from '../assets/chickens.jpg';
import grains from '../assets/grains.jpg';
const ProductsSection = () => {
  const navigate = useNavigate();
  const [productImages, setProductImages] = useState({
    1: chickens,
    2: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    3: grains,
  });

  const fallbackImage = 'https://images.unsplash.com/photo-1500932334442-8761ee4810a7';

  const products = [
    { id: 1, name: 'Organic Poultry', category: 'poultry', description: 'Free-range, organic poultry raised with care for premium quality.' },
    { id: 2, name: 'Fresh Vegetables', category: 'vegetables', description: 'Vibrant, farm-fresh vegetables grown sustainably.' },
    { id: 3, name: 'Premium Grains', category: 'grains', description: 'Nutritious, high-quality grains from our fields to your table.' },
  ];

  const categories = ['poultry', 'vegetables', 'grains'];

  const handleImageError = (e, id) => {
    console.error(`Image failed to load for product ${id}:`, e);
    setProductImages((prev) => ({ ...prev, [id]: fallbackImage }));
  };

  const handleCategoryClick = (category) => {
    navigate(`/${category}`);
  };

  return (
    <div id="products" className="products-section">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Amatic+SC&display=swap');

          .products-section {
            background-color: #f4f7f3;
            padding: 60px 20px;
            font-family: 'Patrick Hand', cursive;
          }
          .products-header {
            text-align: center;
            margin-bottom: 50px;
            animation: slideIn 0.8s ease-in-out;
          }
          .products-header h2 {
            font-size: 3rem;
            font-weight: 700;
            color: #2e4d2a;
            position: relative;
            display: inline-block;
            font-family: 'Amatic SC', cursive;
          }
          .products-header h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 120px;
            height: 5px;
            background: linear-gradient(45deg, #28a745, #2e4d2a);
          }
          .category-btn {
            font-size: 1.2rem;
            padding: 12px 24px;
            margin: 0 10px 30px 0;
            border-radius: 30px;
            background-color: #28a745;
            color: white;
            border: none;
            transition: transform 0.3s ease, background-color 0.3s ease;
            animation: pulse 2s infinite ease-in-out;
          }
          .category-btn:hover {
            transform: scale(1.1);
            background-color: #218838;
          }
          .product-card {
            background: white;
            border-radius: 15px;
            border: 3px solid transparent;
            background-image: linear-gradient(white, white), linear-gradient(45deg, #28a745, #2e4d2a);
            background-origin: border-box;
            background-clip: padding-box, border-box;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
            min-height: 400px;
            display: flex;
            flex-direction: column;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .product-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
          }
          .product-card img {
            height: 200px;
            object-fit: cover;
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
            transition: opacity 0.3s ease;
          }
          .product-card:hover img {
            opacity: 0.9;
          }
          .product-card .card-body {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 25px;
            text-align: center;
          }
          .product-card h5 {
            font-size: 1.6rem;
            font-weight: 700;
            color: #2e4d2a;
            margin-bottom: 10px;
          }
          .product-card p {
            font-size: 1rem;
            color: #555;
            margin-bottom: 15px;
            flex-grow: 1;
          }
          .product-card .btn {
            font-size: 1.1rem;
            padding: 12px 24px;
            border-radius: 25px;
            transition: transform 0.3s ease, background-color 0.3s ease;
            font-family: 'Patrick Hand', cursive;
          }
          .product-card .btn:hover {
            transform: scale(1.05);
            background-color: #218838;
          }
          .product-card:nth-child(1) { animation: fadeIn 1s ease-in-out 0.2s both; }
          .product-card:nth-child(2) { animation: fadeIn 1s ease-in-out 0.4s both; }
          .product-card:nth-child(3) { animation: fadeIn 1s ease-in-out 0.6s both; }
          @keyframes slideIn {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
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
        `}
      </style>
      <div className="container">
        <div className="products-header">
          <h2>Discover Our Categories</h2>
        </div>
        <div className="mb-4 text-center">
          {categories.map(category => (
            <button
              key={category}
              className="category-btn"
              onClick={() => handleCategoryClick(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card product-card">
                <img
                  src={productImages[product.id]}
                  className="card-img-top"
                  alt={product.name}
                  onError={(e) => handleImageError(e, product.id)}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p>{product.description}</p>
                  <button
                    className="btn btn-success"
                    onClick={() => handleCategoryClick(product.category)}
                  >
                    View Category
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
