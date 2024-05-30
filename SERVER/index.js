import express from 'express';
import {PORT} from './config.js';
import cors from 'cors'
import indexRoutes from './routes/index.route.js';

import taskRoutes from "./routes/tasks.routes.js";





const app =express();
app.use(cors())
/*
app.use(cors({
    origin:'http://localhost:573'
}))
*/
app.use(express.json());
app.use(taskRoutes);
app.use(indexRoutes);


const validar = app.listen(PORT)

if(validar){
    console.log('Servidor Iniciado')
}else{
    console.log('Problema al iniciar el servidor')
}

// Consultar el servidor
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
  
  // Verificar si el servidor se ha iniciado correctamente
  server.on('listening', () => {
    console.log('El servidor se ha iniciado correctamente');
  });
// Manejo de errores al iniciar el servidor
server.on('error', (error) => {
    console.error('Error al iniciar el servidor:', error);
  });

//app.listen(PORT)
console.log('Servidor Iniciado');