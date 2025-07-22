import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminHome = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulated fetch from API
    const fetchProducts = async () => {
      const dummyProducts = [
        { id: 1, name: "Organic Wheat", price: 50, image: "https://images.unsplash.com/photo-1574323347407-f3e1ad6d015d" },
        { id: 2, name: "Fresh Vegetables", price: 30, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd" },
        { id: 3, name: "Rice Grains", price: 60, image: "https://images.unsplash.com/photo-1586201375761-83865001e8c5" },
      ];
      setProducts(dummyProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-vh-100 bg-light font-noto-serif">
      {/* Header */}
      <header className="bg-success text-white py-3 shadow-sm">
        <div className="container d-flex justify-content-between align-items-center">
          <h2 className="mb-0">BhanuAgroFarm Admin</h2>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <a href="/dashboard" className="nav-link text-white">Dashboard</a>
              </li>
              <li className="nav-item">
                <a href="/products" className="nav-link text-white">Products</a>
              </li>
              <li className="nav-item">
                <a href="/inventory" className="nav-link text-white">Inventory</a>
              </li>
              <li className="nav-item">
                <a href="/logout" className="nav-link text-white">Logout</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mt-4">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3">
            <div className="bg-white p-3 rounded shadow">
              <h5 className="text-success mb-3">Admin Menu</h5>
              <ul className="list-group">
                <li className="list-group-item">
                  <a href="/manage-products" className="text-decoration-none text-dark">Manage Products</a>
                </li>
                <li className="list-group-item">
                  <a href="/manage-inventory" className="text-decoration-none text-dark">Manage Inventory</a>
                </li>
                <li className="list-group-item">
                  <a href="/view-bookings" className="text-decoration-none text-dark">View Bookings</a>
                </li>
                <li className="list-group-item">
                  <a href="/settings" className="text-decoration-none text-dark">Settings</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Dashboard Section */}
          <div className="col-md-9">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-success mb-3">Welcome to Admin Dashboard</h3>
              <p className="text-muted">Monitor and manage products, inventory, and customer bookings efficiently.</p>

              <h4 className="mt-4">Available Products</h4>
              <div className="row mt-3">
                {products.map(product => (
                  <div key={product.id} className="col-md-4 mb-4">
                    <div className="card h-100">
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.name}
                        style={{ height: '180px', objectFit: 'cover' }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">Price: ₹{product.price}/kg</p>
                        <a href={`/edit-product/${product.id}`} className="btn btn-outline-success btn-sm">Edit</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-success text-white py-3 mt-5">
        <div className="container text-center">
          &copy; 2025 BhanuAgroFarm. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default AdminHome;
