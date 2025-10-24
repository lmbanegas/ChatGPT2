import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import sendMessages from './routes/sendMessages.js';
import ping from 'ping';

// Configuración del entorno
config();

var hosts = ['192.168.1.1', 'google.com']; // Dirección IP corregida

hosts.forEach(function (host) {
    ping.promise.probe(host, {
        timeout: 10,
        extra: ['-i', '2'],
    }).then(function (res) {
        console.log(res);
    }).catch(function (error) {
        console.error(`Failed to ping ${host}:`, error);
    });
});

// Inicialización de la aplicación
const app = express();
const port = process.env.PORT || 8000;

// Configuración de la vista
app.set('view engine', 'ejs');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/sendText', sendMessages);

// Inicio del servidor
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
