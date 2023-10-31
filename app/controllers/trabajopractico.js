const model = require("../models/trabajopractico");

exports.getData = async (req, res) => {
  try {
    const arrayTps = await model.find();
    console.log(arrayTps);
    res.send({ arrayTps });
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
      "Ocurrio un error al insertar un elemento en la tabla TrabajoPractico: ",
      error
    );
    res.send({ error: "Error" }, 422);
  }
};

// Obtener grupos de un trabajo practico por su ID
exports.getGruposByTpId = async (req, res) => {
  const tpId = req.params.tpId;

  try {
    // Busca al tp por su ID
    const trabajoPractico = await model.findById(tpId).populate('grupos');

    // Si se encontró al tp, obtén la lista de grupos
    const grupos = trabajoPractico.grupos;

    res.json({ grupos });
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: `Error al obtener los grupos para un tp ${tpId}` });
  }
};