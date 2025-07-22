import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminHome = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column font-noto-serif">
      {/* Header */}
      <header className="bg-success text-white py-3 shadow">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="h3 mb-0">BhanuAgroFarm Admin</h1>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <a href="/dashboard" className="nav-link text-white">Dashboard</a>
              </li>
              <li className="nav-item">
                <a href="/crops" className="nav-link text-white">Crops</a>
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
      <div className="container my-4 flex-grow-1">
        <div className="row">
          {/* Sidebar */}
          <aside className="col-md-3 mb-4">
            <div className="bg-white border rounded p-3 shadow-sm">
              <h5 className="text-success mb-3">Admin Menu</h5>
              <ul className="list-group">
                <li className="list-group-item">
                  <a href="/manage-crops" className="text-decoration-none text-success">Manage Crops</a>
                </li>
                <li className="list-group-item">
                  <a href="/manage-inventory" className="text-decoration-none text-success">Manage Inventory</a>
                </li>
                <li className="list-group-item">
                  <a href="/reports" className="text-decoration-none text-success">Reports</a>
                </li>
                <li className="list-group-item">
                  <a href="/settings" className="text-decoration-none text-success">Settings</a>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Dashboard */}
          <main className="col-md-9">
            <div className="bg-white border rounded p-4 shadow-sm">
              <h2 className="mb-3 text-success">Welcome to BhanuAgroFarm Admin</h2>
              <p className="text-muted mb-4">
                Manage your farm operations efficiently. Monitor crops, track inventory, and generate reports with ease.
              </p>

              {/* Dashboard Cards */}
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="card border-success">
                    <div className="card-body">
                      <h5 className="card-title text-success">Crop Status</h5>
                      <p className="card-text">View and manage all active crops in the field.</p>
                      <a href="/crops" className="btn btn-outline-success btn-sm">View Details</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card border-secondary">
                    <div className="card-body">
                      <h5 className="card-title text-secondary">Inventory</h5>
                      <p className="card-text">Track seeds, fertilizers, and equipment.</p>
                      <a href="/inventory" className="btn btn-outline-secondary btn-sm">View Details</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card border-warning">
                    <div className="card-body">
                      <h5 className="card-title text-warning">Reports</h5>
                      <p className="card-text">Generate yield and performance reports.</p>
                      <a href="/reports" className="btn btn-outline-warning btn-sm">View Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-success text-white text-center py-3 mt-auto">
        <div className="container">
          <p className="mb-0">&copy; 2025 BhanuAgroFarm. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AdminHome;
