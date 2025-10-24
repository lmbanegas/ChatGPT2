import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import sendMessages from './routes/sendMessages.js';

// Configuración del entorno
config();

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
app.use('/', sendMessages);

// Inicio del servidor
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
