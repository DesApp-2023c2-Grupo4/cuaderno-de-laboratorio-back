const express = require("express");
const cors = require("cors"); // Importa el paquete CORS

const app = express();
const initDb = require("./config/db");
const profesorRouter = require('./app/routes/profesor');
const alumnoRouter = require('./app/routes/alumno');
const tpRouter = require('./app/routes/trabajopractico');
const cursoRouter = require('./app/routes/curso');
const grupoRouter = require('./app/routes/grupo');

const port = "8080";

app.use(cors()); // Agrega el middleware CORS

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.use(express.json());

// Usa el enrutador de Persona.js para manejar las rutas definidas en ese archivo
app.use(profesorRouter);
app.use(alumnoRouter);
app.use(tpRouter);
app.use(cursoRouter);
app.use(grupoRouter);

initDb();
