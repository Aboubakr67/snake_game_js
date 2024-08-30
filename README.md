# Jeu Snake (JS)

Bienvenue sur le projet **Jeu Snake** ! Ce projet consiste à réaliser le jeu Snake en js dans un navigateur, en utilisant un élément Canvas pour afficher le jeu. L'objectif est de respecter les règles du jeu traditionnel tout en appliquant une architecture de code modulaire et les concepts de la programmation orientée objet (POO).

## Règles du Jeu

1. **Le corps suit la tête** : Chaque mouvement de la tête du serpent est suivi par le reste du corps, créant une chaîne continue.
2. **Manger un fruit** : Lorsque le serpent mange un fruit, son corps grandit d'une unité et le joueur marque 10 points.
3. **Collision avec le corps** : Si la tête du serpent entre en collision avec une autre partie de son corps, la partie est perdue.
4. **Plateau en forme de Donut** : Le plateau est connecté en boucle, c'est-à-dire que sortir par un bord fait réapparaître le serpent de l'autre côté (le haut communique avec le bas, et la gauche avec la droite).

## Fonctionnalités

- **Affichage des meilleurs scores** : À la fin de chaque partie, le tableau des 20 plus grands scores est affiché.
- **Formulaire de pseudo** : Si un joueur entre dans le top 20, un formulaire contrôlé lui propose de saisir son pseudo (entre 6 et 20 caractères).
- **Initialisation des scores** : Si le tableau des scores est vide, il est initialisé à partir des données fournies par une API externe (https://randomuser.me/api/).
- **Stockage local des scores** : Le tableau des meilleurs scores est conservé dans le stockage local du navigateur, permettant une persistance des données entre les sessions.

## Architecture du Code

L'architecture du code est conçue de manière modulaire, avec une séparation claire des responsabilités entre les différentes classes et modules. Les concepts de la Programmation Orientée Objet (POO) sont appliqués pour améliorer la réutilisabilité et la maintenance du code.

### Principales Classes

- **Snake** : Gère le corps du serpent, ses mouvements, et la détection des collisions.
- **Game** : Gère la logique principale du jeu, y compris la gestion des scores, la création de fruits, et l'interaction avec l'utilisateur.
- **Script** : Programme principal du jeu.

## Installation et Exécution

### Prérequis

Assurez-vous d'avoir un navigateur moderne installé (Google Chrome, Firefox, Edge, etc.).

### Commandes

1. **Clonez le dépôt GitHub sur votre machine locale :**

   ```bash
   git clone https://github.com/Aboubakr67/snake_game_js.git

   ```

2. **Accédez au répertoire du projet :**

   ```bash
   cd snake_game_js

   ```

3. **Ouvrez le fichier index.html dans un navigateur :**

##### Il suffit de double-cliquer sur le fichier index.html, ou d'utiliser la commande suivante dans un terminal si vous avez un serveur local :

```bash
open index.html
```
