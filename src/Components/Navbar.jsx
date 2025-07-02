import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" style={{ fontFamily: "'Kalam', cursive" }}>
    <div className="container">
      <Link className="navbar-brand" to="/" style={{ color: 'green', fontWeight: 'bold', fontSize: '1.5rem' }}>
        LavanyaAgroWorks
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/#about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/#services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/#cart">Cart</Link>
          </li>
          <li className="nav-item">
            {user ? (
              <span className="nav-link text-success fw-bold">{user.name}</span>
            ) : (
              <Link className="btn btn-success ms-2" to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
