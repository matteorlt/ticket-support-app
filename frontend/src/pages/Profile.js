import React from 'react';

const theme = {
  primary: '#1a237e',
  secondary: '#64b5f6',
  accent: '#f5f7fa',
  text: '#22223b',
  card: '#fff',
  border: '#e3e6f0',
};

const Profile = () => {
  // Récupère l'utilisateur connecté depuis le localStorage
  const user = JSON.parse(localStorage.getItem('user')) || {
    name: 'Unknown',
    email: 'unknown@email.com',
    role: 'user',
  };

  return (
    <div style={{ minHeight: '100vh', background: `linear-gradient(120deg, ${theme.primary} 0%, ${theme.secondary} 100%)`, fontFamily: 'Poppins, Arial, sans-serif' }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9 col-12">
            <div style={{ background: theme.card, borderRadius: '1.5rem', boxShadow: '0 8px 32px rgba(26,35,126,0.12)', border: `1px solid ${theme.border}` }} className="p-5 mb-4">
              <h2 className="mb-4 text-center" style={{ color: theme.primary, fontWeight: 700 }}>My Profile</h2>
              <div className="mb-4 text-center">
                <div style={{
                  width: 90, height: 90, borderRadius: '50%', background: theme.secondary, color: '#fff',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, fontWeight: 700, marginBottom: 10
                }}>{user.name ? user.name[0] : '?'}</div>
                <h4 style={{ color: theme.primary, fontWeight: 700 }}>{user.name}</h4>
                <p className="mb-1" style={{ color: theme.text }}>{user.email}</p>
                <span style={{ background: theme.secondary, color: '#fff', borderRadius: '1rem', padding: '0.4rem 1.2rem', fontWeight: 600, fontSize: '1rem', letterSpacing: 1 }}>{user.role}</span>
              </div>
              <div className="text-center mb-4">
                <button className="btn fw-bold" style={{ background: theme.primary, color: '#fff', borderRadius: '2rem', fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(26,35,126,0.15)' }}>
                  Edit my info
                </button>
              </div>
              <hr className="my-4" />
              <div>
                <h5 style={{ color: theme.primary, fontWeight: 700 }}>My Tickets</h5>
                <div className="alert alert-info mt-3">No tickets yet. (Coming soon: you will see your created tickets here!)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 