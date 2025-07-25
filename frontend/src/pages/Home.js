import React from 'react';
import { Link } from 'react-router-dom';

const theme = {
  primary: '#22336c', // bleu foncé
  secondary: '#3a7bd5', // bleu moyen
  light: '#e3ecfa', // bleu très clair
  card: '#fff',
  text: '#22223b', // noir/gris foncé
  textSecondary: '#6c757d', // gris doux
  border: '#d1d9e6',
};

const Home = () => {
  return (
    <div style={{ fontFamily: 'Poppins, Arial, sans-serif', background: theme.light, minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ background: theme.primary, color: '#fff', padding: '3rem 0 2rem 0' }}>
        <div className="container-fluid px-5">
          <h1 style={{ fontWeight: 800, fontSize: '2.7rem', letterSpacing: 1 }}>Ticket Support App</h1>
          <p style={{ fontSize: '1.3rem', maxWidth: 600, color: '#e3ecfa' }}>La plateforme moderne et simple pour gérer tous vos tickets de support interne, suivre les demandes et collaborer efficacement.</p>
        </div>
      </header>

      {/* À propos */}
      <section className="py-5" style={{ background: theme.light }}>
        <div className="row justify-content-center mx-0">
          <div className="col-md-8 col-lg-6">
            <h2 className="mb-3" style={{ color: theme.primary, fontWeight: 700 }}>Pourquoi Ticket Support App ?</h2>
            <p style={{ color: theme.textSecondary, fontSize: '1.1rem' }}>
              Centralisez la gestion de vos demandes, gagnez du temps, améliorez la satisfaction de vos utilisateurs et gardez une trace claire de l’historique des tickets. Notre solution s’adapte à tous les métiers et à toutes les tailles d’équipe.
            </p>
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="py-5" style={{ background: theme.card, borderTop: `1px solid ${theme.border}` }}>
        <div className="container-fluid px-5">
          <h2 className="mb-4 text-center" style={{ color: theme.primary, fontWeight: 700 }}>Fonctionnalités principales</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div style={{ background: theme.light, borderRadius: '1rem', padding: '2rem', minHeight: 200, boxShadow: '0 2px 8px rgba(34,51,108,0.04)', border: `1px solid ${theme.border}` }}>
                <h5 style={{ color: theme.primary, fontWeight: 700 }}>Authentification sécurisée</h5>
                <p style={{ color: theme.textSecondary }}>Connexion par email/mot de passe, gestion des rôles, sécurité JWT.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div style={{ background: theme.light, borderRadius: '1rem', padding: '2rem', minHeight: 200, boxShadow: '0 2px 8px rgba(34,51,108,0.04)', border: `1px solid ${theme.border}` }}>
                <h5 style={{ color: theme.primary, fontWeight: 700 }}>Gestion des tickets</h5>
                <p style={{ color: theme.textSecondary }}>Création, suivi, attribution, commentaires, historique détaillé.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div style={{ background: theme.light, borderRadius: '1rem', padding: '2rem', minHeight: 200, boxShadow: '0 2px 8px rgba(34,51,108,0.04)', border: `1px solid ${theme.border}` }}>
                <h5 style={{ color: theme.primary, fontWeight: 700 }}>Tableau de bord</h5>
                <p style={{ color: theme.textSecondary }}>Filtres, recherche, statistiques, vue d’ensemble de l’activité.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-5" style={{ background: theme.secondary }}>
        <div className="row justify-content-center mx-0">
          <div className="col-md-8 col-lg-6 text-center">
            <h2 className="mb-3" style={{ color: '#fff', fontWeight: 700 }}>Prêt à commencer ?</h2>
            <p style={{ color: '#e3ecfa', fontSize: '1.1rem' }}>Créez un compte ou connectez-vous pour accéder à votre espace personnel et gérer vos tickets.</p>
            <div className="d-flex justify-content-center gap-3 mt-4">
              <Link to="/register" className="btn btn-primary btn-lg fw-bold" style={{ borderRadius: '2rem', minWidth: 140, background: theme.primary, border: 'none' }}>S’inscrire</Link>
              <Link to="/login" className="btn btn-outline-light btn-lg fw-bold" style={{ borderRadius: '2rem', minWidth: 140, color: '#fff', borderColor: '#fff' }}>Se connecter</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-5" style={{ background: theme.card, borderTop: `1px solid ${theme.border}` }}>
        <div className="container-fluid px-5">
          <h2 className="mb-4 text-center" style={{ color: theme.primary, fontWeight: 700 }}>Roadmap</h2>
          <ul className="list-unstyled mx-auto" style={{ maxWidth: 600, color: theme.textSecondary, fontSize: '1.1rem' }}>
            <li><strong style={{ color: theme.primary }}>✔️ Authentification & gestion des rôles</strong></li>
            <li><strong style={{ color: theme.primary }}>✔️ Création et suivi des tickets</strong></li>
            <li>🔜 Notifications temps réel</li>
            <li>🔜 Statistiques avancées</li>
            <li>🔜 Application mobile</li>
            <li>🔜 Intégration outils externes (Slack, Teams...)</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4" style={{ background: theme.primary, color: '#fff', textAlign: 'center', fontSize: '1rem' }}>
        <div>© {new Date().getFullYear()} Ticket Support App &middot; <a href="https://github.com/matteorlt/ticket-support-app" style={{ color: theme.secondary, textDecoration: 'underline' }}>GitHub</a></div>
      </footer>
    </div>
  );
};

export default Home; 