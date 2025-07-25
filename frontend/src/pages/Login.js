import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const theme = {
  primary: '#1a237e',
  secondary: '#64b5f6',
  accent: '#f5f7fa',
  text: '#22223b',
  card: '#fff',
  border: '#e3e6f0',
};

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/profile');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: `linear-gradient(120deg, ${theme.primary} 0%, ${theme.secondary} 100%)`, fontFamily: 'Poppins, Arial, sans-serif' }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5 col-12">
            <div style={{ background: theme.card, borderRadius: '1.5rem', boxShadow: '0 8px 32px rgba(26,35,126,0.12)', border: `1px solid ${theme.border}` }} className="p-4">
              <h2 className="mb-4 text-center" style={{ color: theme.primary, fontWeight: 700 }}>Login</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label" style={{ color: theme.text }}>Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="form-control" style={{ borderRadius: '1rem', border: `1px solid ${theme.secondary}` }} />
                </div>
                <div className="mb-4">
                  <label className="form-label" style={{ color: theme.text }}>Password</label>
                  <input type="password" name="password" value={form.password} onChange={handleChange} required className="form-control" style={{ borderRadius: '1rem', border: `1px solid ${theme.secondary}` }} />
                </div>
                <button type="submit" className="btn w-100 fw-bold" style={{ background: theme.primary, color: '#fff', borderRadius: '2rem', fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(26,35,126,0.15)' }}>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 