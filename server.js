const http = require('http');
const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');

// Serveur HTTP
const server = http.createServer((req, res) => {
	if (req.url === '/') {
		fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
			if (err) {
				res.writeHead(500);
				res.end('Erreur serveur');
			} else {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.end(data);
			}
		});
	} else {
		res.writeHead(404);
		res.end('Not found');
	}
});

// WebSocket
const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
	ws.on('message', message => {
		const msg = message.toString();
		wss.clients.forEach(client => {
			if (client.readyState === WebSocket.OPEN) {
				client.send(msg);
			}
		});
	});
});

server.listen(3000, () => {
	console.log('Serveur chat sur http://localhost:3000');
});
