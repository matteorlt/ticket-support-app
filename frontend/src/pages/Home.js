import React from 'react';
import { Link } from 'react-router-dom';

const theme = {
  primary: '#1a237e', // bleu foncé
  secondary: '#64b5f6', // bleu clair
  accent: '#f5f7fa', // gris très clair
  text: '#22223b',
  card: '#fff',
  border: '#e3e6f0',
};

const Home = () => {
  return (
    <div style={{ minHeight: '100vh', background: `linear-gradient(120deg, ${theme.primary} 0%, ${theme.secondary} 100%)`, fontFamily: 'Poppins, Arial, sans-serif' }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-12">
            <div style={{ background: theme.card, borderRadius: '1.5rem', boxShadow: '0 8px 32px rgba(26,35,126,0.12)', border: `1px solid ${theme.border}` }} className="p-5 mb-4">
              <h1 className="mb-3 text-center" style={{ color: theme.primary, fontWeight: 800, letterSpacing: 1 }}>🎫 Ticket Support App</h1>
              <p className="lead text-center mb-4" style={{ color: theme.text }}>
                Welcome to your modern internal platform for managing support tickets.<br/>
                Fast, simple, and secure for all your IT and service needs.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
                <Link to="/register" style={{
                  background: theme.secondary,
                  color: '#fff',
                  border: 'none',
                  borderRadius: '2rem',
                  padding: '0.75rem 2.5rem',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  boxShadow: '0 2px 8px rgba(100,181,246,0.15)',
                  transition: 'background 0.2s',
                  textDecoration: 'none',
                  marginRight: 10
                }}>Register</Link>
                <Link to="/login" style={{
                  background: '#fff',
                  color: theme.primary,
                  border: `2px solid ${theme.secondary}`,
                  borderRadius: '2rem',
                  padding: '0.75rem 2.5rem',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  boxShadow: '0 2px 8px rgba(100,181,246,0.10)',
                  transition: 'background 0.2s',
                  textDecoration: 'none',
                }}>Login</Link>
              </div>
              <div className="row text-center mt-4">
                <div className="col-md-4 mb-3">
                  <div style={{ background: theme.accent, borderRadius: '1rem', padding: '1.2rem 0.5rem', boxShadow: '0 2px 8px rgba(26,35,126,0.04)' }}>
                    <h5 style={{ color: theme.primary, fontWeight: 700 }}>🔒 Secure Auth</h5>
                    <p className="small" style={{ color: theme.text }}>JWT, password hashing, role management</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div style={{ background: theme.accent, borderRadius: '1rem', padding: '1.2rem 0.5rem', boxShadow: '0 2px 8px rgba(26,35,126,0.04)' }}>
                    <h5 style={{ color: theme.primary, fontWeight: 700 }}>📋 Ticket Management</h5>
                    <p className="small" style={{ color: theme.text }}>Create, assign, comment, track history</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div style={{ background: theme.accent, borderRadius: '1rem', padding: '1.2rem 0.5rem', boxShadow: '0 2px 8px rgba(26,35,126,0.04)' }}>
                    <h5 style={{ color: theme.primary, fontWeight: 700 }}>📊 Dashboard</h5>
                    <p className="small" style={{ color: theme.text }}>Filters, search, statistics (coming soon)</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span style={{ background: theme.secondary, color: '#fff', borderRadius: '1rem', padding: '0.4rem 1.2rem', fontWeight: 600, margin: '0 0.3rem', fontSize: '1rem', letterSpacing: 1 }}>User</span>
                <span style={{ background: theme.primary, color: '#fff', borderRadius: '1rem', padding: '0.4rem 1.2rem', fontWeight: 600, margin: '0 0.3rem', fontSize: '1rem', letterSpacing: 1 }}>Technician</span>
                <span style={{ background: '#fff', color: theme.primary, border: `2px solid ${theme.secondary}`, borderRadius: '1rem', padding: '0.4rem 1.2rem', fontWeight: 600, margin: '0 0.3rem', fontSize: '1rem', letterSpacing: 1 }}>Admin</span>
              </div>
              <div className="mt-4 text-center">
                <p className="mb-1" style={{ color: theme.text, fontWeight: 500 }}>Upcoming features:</p>
                <ul className="list-unstyled mb-0" style={{ color: theme.primary, fontWeight: 500 }}>
                  <li>• Profile & account management</li>
                  <li>• Real-time notifications</li>
                  <li>• Advanced analytics</li>
                  <li>• Mobile-friendly experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 