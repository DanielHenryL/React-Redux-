const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors')
require('dotenv').config();


// Crear servidor express
const app = express();

// Base de datos
dbConnection();

app.use(cors());

// Directorio publico
app.use( express.static('public'))

// Lectura y parseo del body
app.use( express.json() );

// Rutas 
app.use( '/api/auth', require('./routes/auth'))
// TODO: CRUD: Events


// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})
