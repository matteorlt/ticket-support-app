import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const theme = {
  primary: '#22336c',
  secondary: '#3a7bd5',
  light: '#e3ecfa',
  card: '#fff',
  text: '#22223b',
  textSecondary: '#6c757d',
  border: '#d1d9e6',
};

const CreateTicket = () => {
  const [form, setForm] = useState({ title: '', description: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/tickets', form, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setSuccess('Ticket créé avec succès !');
      setTimeout(() => navigate('/tickets'), 1200);
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur lors de la création du ticket');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: theme.light, fontFamily: 'Poppins, Arial, sans-serif' }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5 col-12">
            <div style={{ background: theme.card, borderRadius: '1.5rem', boxShadow: '0 8px 32px rgba(34,51,108,0.12)', border: `1px solid ${theme.border}` }} className="p-4">
              <h2 className="mb-4 text-center" style={{ color: theme.primary, fontWeight: 700 }}>Créer un ticket</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label" style={{ color: theme.text }}>Titre</label>
                  <input type="text" name="title" value={form.title} onChange={handleChange} required className="form-control" style={{ borderRadius: '1rem', border: `1px solid ${theme.secondary}` }} />
                </div>
                <div className="mb-4">
                  <label className="form-label" style={{ color: theme.text }}>Description</label>
                  <textarea name="description" value={form.description} onChange={handleChange} required className="form-control" rows={5} style={{ borderRadius: '1rem', border: `1px solid ${theme.secondary}` }} />
                </div>
                <button type="submit" className="btn w-100 fw-bold" style={{ background: theme.secondary, color: '#fff', borderRadius: '2rem', fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(58,123,213,0.15)' }}>Créer le ticket</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket; 