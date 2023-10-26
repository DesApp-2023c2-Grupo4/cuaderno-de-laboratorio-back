const model = require("../models/alumno");

exports.getData = async (req, res) => {
  try {
    const arrayAlumno = await model.find();
    console.log(arrayAlumno);
    res.send({ arrayAlumno });
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
      "Ocurrio un error al insertar un elemento en la tabla Alumno: ",
      error
    );
    res.send({ error: "Error" }, 422);
  }
};

// Obtener cursos de un alumno por su ID
exports.getCursosByAlumnoId = async (req, res) => {
  const alumnoId = req.params.alumnoId;

  try {
    // Busca al alumno por su ID
    const alumno = await model.findById(alumnoId).populate('cursos');

    // Si se encontró al alumno, obtén la lista de cursos
    const cursos = alumno.cursos;

    res.json({ cursos });
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: `Error al obtener los cursos del alumno ${alumnoId}` });
  }
};
