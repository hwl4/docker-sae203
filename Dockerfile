FROM debian:latest

# Mettre à jour Debian et installer Node.js et npm
RUN apt-get update && \
    apt-get install -y curl gnupg bash && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean

# Créer le dossier de l'application
RUN mkdir -p /app

# Copier le serveur et la page web
COPY server.js /app/server.js
COPY public/ /app/public/
COPY setup/start.sh /start.sh

# Se placer dans /app
WORKDIR /app

# Installer le module WebSocket
RUN npm install ws

# Donner les droits d'exécution au script de démarrage
RUN chmod +x /start.sh

# Exposer le port du chat
EXPOSE 3000

# Lancer le serveur de chat
CMD ["/start.sh"]
