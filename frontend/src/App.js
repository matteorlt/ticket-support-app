import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Tickets from './pages/Tickets';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <Link className="navbar-brand fw-bold" to="/">Ticket Support App</Link>
            <div>
              <Link to="/tickets" className="btn btn-outline-light me-2">Tickets</Link>
              <Link to="/register" className="btn btn-outline-light me-2">Register</Link>
              <Link to="/login" className="btn btn-light">Login</Link>
            </div>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/tickets" element={<Tickets />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
