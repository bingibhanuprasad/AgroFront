import React, { useState, useEffect } from 'react';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', quantity: '' });
  const [successMessage, setSuccessMessage] = useState('');

  // Dummy API fetch
  useEffect(() => {
    const fetchProducts = async () => {
      // Simulate API call
      const dummyProducts = [
        { id: 1, name: "Organic Wheat", price: 50, image: "https://images.unsplash.com/photo-1574323347407-f3e1ad6d015d" },
        { id: 2, name: "Fresh Vegetables", price: 30, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd" },
        { id: 3, name: "Rice Grains", price: 60, image: "https://images.unsplash.com/photo-1586201375761-83865001e8c5" },
      ];
      setProducts(dummyProducts);
    };
    fetchProducts();
  }, []);

  const handleBookClick = (product) => {
    setSelectedProduct(product);
    setIsSidebarOpen(true);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate backend submission
    setSuccessMessage(`Successfully booked ${formData.quantity}kg of ${selectedProduct.name}!`);
    setFormData({ name: '', email: '', quantity: '' });
    setTimeout(() => {
      setIsSidebarOpen(false);
      setSuccessMessage('');
    }, 2000);
  };

  return (
    <div className="products-section">
      <div className="container">
        <h2>Our Products</h2>
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card product-card">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}/kg</p>
                  <button className="btn btn-success" onClick={() => handleBookClick(product)}>Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        {selectedProduct && (
          <>
            <h3>Book {selectedProduct.name}</h3>
            <div className="mb-3">
              <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Quantity (kg)</label>
                <input
                  type="number"
                  className="form-control"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleFormChange}
                  min="1"
                  required
                />
              </div>
              <button className="btn btn-success" onClick={handleFormSubmit}>Submit</button>
              <button className="btn btn-secondary ms-2" onClick={() => setIsSidebarOpen(false)}>Close</button>
              {successMessage && <div className="success-message">{successMessage}</div>}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;