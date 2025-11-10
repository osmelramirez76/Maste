// ✅ Cargar variables de entorno primero
require('dotenv').config();

// 🔧 Importar dependencias
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');

// 🔧 Crear aplicación Express
const app = express();

// ✅ Conectar a la base de datos
connectToDb();

// 🧩 Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 🚦 Rutas principales
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes');

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);

// 🚀 Exportar app
module.exports = app;
