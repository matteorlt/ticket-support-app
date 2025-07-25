import React from 'react';
import { Link } from 'react-router-dom';

const theme = {
  primary: '#22336c',
  secondary: '#3a7bd5',
  light: '#e3ecfa',
  card: '#fff',
  text: '#22223b',
  textSecondary: '#6c757d',
  border: '#d1d9e6',
};

const Tickets = () => {
  // Placeholder tickets (à remplacer par les vrais tickets plus tard)
  const tickets = [];

  return (
    <div style={{ minHeight: '100vh', background: theme.light, fontFamily: 'Poppins, Arial, sans-serif' }}>
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 style={{ color: theme.primary, fontWeight: 700 }}>Mes tickets</h2>
          <Link to="/tickets/create" className="btn btn-primary fw-bold" style={{ borderRadius: '2rem', background: theme.secondary, border: 'none' }}>
            Créer un ticket
          </Link>
        </div>
        {tickets.length === 0 ? (
          <div className="alert alert-info text-center">Aucun ticket pour le moment.<br/>Créez votre premier ticket pour commencer !</div>
        ) : (
          <div className="row g-4">
            {tickets.map((ticket) => (
              <div className="col-md-6 col-lg-4" key={ticket._id}>
                <div style={{ background: theme.card, borderRadius: '1rem', boxShadow: '0 2px 8px rgba(34,51,108,0.04)', border: `1px solid ${theme.border}` }} className="p-4 h-100">
                  <h5 style={{ color: theme.primary, fontWeight: 700 }}>{ticket.title}</h5>
                  <p style={{ color: theme.textSecondary }}>{ticket.description}</p>
                  <span className="badge" style={{ background: theme.secondary, color: '#fff', borderRadius: '1rem', padding: '0.4rem 1.2rem', fontWeight: 600 }}>{ticket.status}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tickets; 