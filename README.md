# SAE 2.03 - Déploiement d'un Chat en Temps Réel avec Docker

Projet réalisé dans le cadre de la SAE 2.03 – Déploiement d'un service réseau.

Ce projet consiste à développer un **service de chat en temps réel** utilisant :
- HTML, CSS, JavaScript pour le front-end
- Node.js avec WebSocket pour le back-end
- Docker pour le déploiement et l'isolation de l'application

## Instructions pour lancer le projet sur le terminale

- Vérifiez que Docker est installé sur votre machine :
```bash
docker --version
```

- Cloner ce référentiel :
```bash
git clone https://github.com/hwl4/docker-sae203.git
```

- Aller dans le dossier du projet. Par exemple:
```bash
cd docker-sae203
```

- Construire l'image Docker à partir du Dockerfile :
```bash
docker build -t mon-serveur-chat .
```

- Lancer le conteneur Docker :
```bash
docker run --name mon-serveur-chat-container -d -p 3000:3000 mon-serveur-chat
```

- Accéder à l'application dans un navigateur :
```
http://localhost:3000 ou http://172.26.3.180:3000 (adresse IPv4 du réseau Wi-Fi sur)
```
ou avec l'adresse IPv4 du réseau Wi-Fi actuelle pour le faire sur un autre PC connecté au même réseau

```
http://172.26.3.180:3000
```

- Vérifier que le conteneur est en cours d'exécution :
```bash
docker ps
```

Exemple de sortie :
```bash
CONTAINER ID   IMAGE              COMMAND       CREATED       STATUS       PORTS                    NAMES
8b7e089d2eba   mon-serveur-chat   "/start.sh"   4 hours ago   Up 2 hours   0.0.0.0:3000->3000/tcp   mon-serveur-chat-container
```

- Pour arrêter le conteneur :
```bash
docker stop mon-serveur-chat-container
```

- Pour supprimer l'ancien conteneur :
```bash
docker rm mon-serveur-chat-container
```
