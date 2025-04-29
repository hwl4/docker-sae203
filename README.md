# SAE 2.03 - Déploiement d’un service de chat avec Docker

## 🎯 Objectif

Déployer un service réseau de type **chat temps réel** avec Docker.  
Ce projet respecte les contraintes : un seul Dockerfile, basé sur Debian, sans Docker Compose.

## ⚙️ Fonctionnalités

- Serveur WebSocket en Node.js
- Interface web simple pour chatter
- Déploiement dans un seul conteneur Docker

## 📁 Arborescence


## 🚀 Lancer le projet

1. **Build Docker :**

docker build -t mon-serveur-chat .

2. **Lancer le conteneur :**

docker run --name mon-serveur-chat-container -d -p 3000:3000 mon-serveur-chat
