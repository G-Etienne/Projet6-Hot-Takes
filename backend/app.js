// *******************************************------------------------*************************************
// Importation d'express, des routes et mongoose
// Importation de path pour accéder au path du serveur.
// Création de l'application (app)
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const saucesRoutes = require('./routes/sauceRoutes');
const path = require('path');
const mongoose = require('mongoose');

// Utilisation de express.json() pour l'analyse du corps de la requête
app.use(express.json());

// *******************************************------------------------*************************************
//Connexion à la base de données MongoDB Atlas
mongoose.connect('mongodb+srv://e-gUser_31:62R9BV79bwkHD7yc@cluster0.thnn26q.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser: true,
useUnifiedTopology: true})
    .then(() => console.log('Connexion à MongoDB réussit.'))
    .catch(() => console.log('Échec de la connexion à MongoDB.'));

// *******************************************------------------------*************************************
//Ajout des headers nécessaires

app.use((req, res, next) => {
    //Toutes les origines peuvent accéder à l'API
    res.setHeader('Access-Control-Allow-Origin', '*');
    //Ajoute les headers nécessaires aux requêtes envoyées à l'API
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    //Définit les routes pour nous permettre d'envoyer différentes requêtes
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// *******************************************------------------------*************************************
// Indique à l'application comment traiter la requête vers la route image
// Utilisation des routes pour le parcours utilisateur
// Utilisation des routes pour le parcours des sauces
// Exportation de l'application
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
app.use('/api/sauces', saucesRoutes);

module.exports = app;

