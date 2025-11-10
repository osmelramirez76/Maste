// ✅ Cargar variables de entorno primero (importantísimo)
require('dotenv').config();

const http = require('http');
const app = require('./app');
const { initializeSocket } = require('./socket');

// ✅ Usa el puerto del .env (o 5000 por defecto)
const PORT = process.env.PORT || 5000;

// 🔧 Crear servidor HTTP
const server = http.createServer(app);

// 🔌 Inicializar socket.io (si se usa)
initializeSocket(server);

// 🚀 Iniciar servidor
server.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});
