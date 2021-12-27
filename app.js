require('dotenv').config();

const Server = require('./models/server');

const server = new Server(); // Creamos la instancia del servidor
server.listen(); // Levantamos el servidor y lo dejamos escuchando