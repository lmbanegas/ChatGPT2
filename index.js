import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import sendMessages from './routes/sendMessages.js';


import ping from 'ping';


// Configuración del entorno
config();


var hosts = ['192.1633338.1.1', 'google.com'];


hosts.forEach(function (host) {
    ping.promise.probe(host, {
        timeout: 10,
        extra: ['-i', '2'],
    }).then(function (res) {
        console.log(res);
    });
});

// Using http by default
//ping('8.8.8.8', 80 /* optional */)
//  .then(time => console.log(`Response time: ${time}ms`))
//  .catch(() => console.log(`Failed to ping google.com`))

//ping('8.8.8.8')
//  .then(time => console.log(`Response time: ${time}ms`))
//  .catch(() => console.log(`Failed to ping google.com`))

// Or use https
//ping('https://google.com')
//  .then(time => console.log(`Response time: ${time}ms`))
//  .catch(() => console.log('Failed to ping google.com'))


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
