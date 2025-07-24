# Ticket Support App

Plateforme de gestion de tickets/support interne pour entreprise.

## Stack technique

- **Frontend** : React, Material UI, Axios, React Router
- **Backend** : Node.js, Express, MongoDB, JWT, Mongoose
- **Tests** : Jest, Supertest (backend), React Testing Library (frontend)
- **Déploiement** : Docker (optionnel)

## Structure du projet

```
/ticket-support-app
│
├── backend/                # API Node.js (Express)
│   ├── src/
│   ├── tests/
│   ├── .env.example
│   ├── package.json
│   └── ...
│
├── frontend/               # Application React
│   ├── public/
│   ├── src/
│   ├── .env.example
│   ├── package.json
│   └── ...
│
├── docker-compose.yml      # (optionnel, pour le déploiement)
├── README.md               # Documentation globale du projet
└── .gitignore
```

## Installation et lancement

### Prérequis
- Node.js >= 18
- npm >= 9
- MongoDB (local ou cloud)

### Backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### Frontend
```bash
cd ../frontend
cp .env.example .env
npm install
npm start
```

## Gestion des environnements
- Les variables d'environnement sont définies dans `.env` (dev) et `.env.production` (prod).
- Ne jamais versionner les fichiers `.env` contenant des secrets.
- Adapter les valeurs selon l'environnement (voir les fichiers `.env.example`).

## Bonnes pratiques
- Respecter le clean code (noms explicites, fonctions courtes, séparation des responsabilités)
- Documenter les endpoints et les composants
- Écrire des tests unitaires et d’intégration
- Utiliser des commits clairs et réguliers

## Fonctionnalités principales
- Authentification JWT
- Gestion des rôles (utilisateur, technicien, admin)
- Création et gestion de tickets
- Attribution, commentaires, historique
- Tableau de bord, filtres, recherche

## Pour contribuer
1. Fork & clone le repo
2. Crée une branche (`feature/ma-fonctionnalite`)
3. Push et ouvre une Pull Request

---

Prêt à coder ! 