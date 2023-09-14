# Projet6-Hot-Takes
Développement d'une API pour une application de critique de sauces piquantes.

Dans ce projet le code front-end été déjà fournit.

La mission : 

- Construire une API REST avec Node.js, express.js et en stockant les données sur MongoBD.
  
- Créer les routes et la logique pour qu'un utilisateur puisse se créer un compte sur le site.
  - Les données de l'utilisateur sont sécurisées à laide d'un hash pour le mot de passe et d'un token pour la session.
    
- Créer les routes pour que les utilisateurs avec un compte puissent.
  - Créer une sauce à l'aide d'un formulaire.
  - Modifier une sauce à l'aide d'un formulaire également (si l'utilisateur est identifié comme celui qui l'a créé).
  - De supprimer une sauce (si l'utilisateur est identifié comme celui qui l'a créé).
  - De récupérer les informations des sauces stocker dans la base de données.
  - De liker et disliker une sauce.

Plus d'informations sur ce projet dans cette vidéo : https://www.youtube.com/watch?v=OS3lKkxY-cQ 

ARCHITECTURE DE L'API : (dossier backend)

- Le fichier "server.js" --> création du serveur Node.js, gestion des ports et des erreurs les plus communes.
  
- Le fichier "app.js" --> contient le code pour la création de l'application express qui va s'éxécuter sur le serveur, la connexion à la base de données MongoDB, l'ajout des headers nécéssaires pour les requêtes, la définition des diférentes routes de l'API.

- Le dossier "routes" --> contient deux fichiers avec des routes pour le parcours utilisateur et le parcours de création de sauce.
  
- Le dissier "models" --> contient deux fichiers avec les modèles de données à ajouter pour créer un utilisateur et une sauce.
  
- Le dossier "middleware" --> contient deux fichiers pour le code qui permet l'autentification des utilisateurs et un autre pour travailler sur les images importer dans le site.
  
- Le dossier "controllers" --> qui contient deux fichiers avec la logique pour les différentes routes du parcours utilisateur et d'ajout de sauce.

