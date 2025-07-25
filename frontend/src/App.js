import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Tickets from './pages/Tickets';
import CreateTicket from './pages/CreateTicket';

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Ticket Support App</Link>
        <div>
          <Link to="/tickets" className="btn btn-outline-light me-2">Tickets</Link>
          {user ? (
            <>
              <Link to="/profile" className="btn btn-light me-2">Profile</Link>
              <button onClick={handleLogout} className="btn btn-outline-light">Logout</button>
            </>
          ) : (
            <>
              <Link to="/register" className="btn btn-outline-light me-2">Register</Link>
              <Link to="/login" className="btn btn-light">Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/tickets/create" element={<CreateTicket />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
