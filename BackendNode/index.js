const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/check', (req, res) => {
  res.send('¡Hola, Mundo!');
});

app.get('/', (req, res) => {
  const datos = { 
    Instancia: "Inatancia #1 - API #1",
    Curso: "Seminario de Sistemas 1",
    Seccion: "Seccion A",
    Periodo: "2do Semestre 2024",
    Estudiante: "Kelly Mischel Herrera Espino - 201900716"
   };
  res.json(datos);
});


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
