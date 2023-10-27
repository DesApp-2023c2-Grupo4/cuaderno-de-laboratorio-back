const model = require("../models/curso");
const Alumno = require('./models/alumno'); // Importa el modelo de Alumno

exports.getData = async (req, res) => {
  try {
    const arrayCursos = await model.find();
    console.log(arrayCursos);
    res.send({ arrayCursos });
  } catch (error) {
    console.log(`Ocurrio un error: ${error}`);
  }
};

exports.insertData = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const response = await model.create(data);
    res.status(201).json(response);
  } catch (error) {
    console.log(
      "Ocurrio un error al insertar un elemento en la tabla Curso: ",
      error
    );
    res.send({ error: "Error" }, 422);
  }
};

//Función para Obtener Lista de Alumnos para un Curso Específico
async function getAlumnosByCursoId(cursoId) {
    try {
        // Encuentra el curso por su ID
        const curso = await Curso.findById(cursoId);

        if (!curso) {
            throw new Error('Curso no encontrado');
        }

        // Obtiene la lista de alumnos para el curso
        const alumnos = await Alumno.find({ cursos: cursoId });

        return alumnos;
    } catch (error) {
        throw new Error(`Error al obtener alumnos: ${error.message}`);
    }
}

// Ejemplo de uso:
const cursoId = 'ID_del_curso'; // Reemplaza con el ID del curso específico
getAlumnosByCursoId(cursoId)
    .then(alumnos => {
        console.log('Lista de alumnos para el curso:');
        console.log(alumnos);
    })
    .catch(error => {
        console.error(error.message);
    });