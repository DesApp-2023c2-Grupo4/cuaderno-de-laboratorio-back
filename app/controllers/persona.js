const model = require("../models/persona");
const { ObjectId } = require("mongodb");

//Obtener lista de persona:
exports.getData = async (req, res) => {
  try {
    const arrayPersonas = await model.find().maxTimeMS(20000);
    console.log(arrayPersonas);
    res.send({ arrayPersonas });
  } catch (error) {
    console.log(`Ocurrio un error: ${error}`);
    res.status(500).send("Error interno en el servidor");
  }
};

//Insertar datos en modelo Persona:
exports.insertData = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const response = await model.create(data);
    res.status(201).json(response);
  } catch (error) {
    console.log(
      "Ocurrio un error al insertar un elemento en la tabla Persona: ",
      error
    );
    res.send({ error: "Error" }, 422);
  }
};

//Crear persona en la DB:
exports.createPersona = async (req, res) => {
  const { nombre, edad } = req.body;

  try {
    const nuevaPersona = new model({
      nombre,
      apellido,
      edad,
    });

    await nuevaPersona.save();

    res.status(201).send(nuevaPersona);
  } catch (error) {
    console.error("Ocurrió un error al crear la persona:", error);
    res.status(500).send("Error interno en el servidor");
  }
};

//Eliminar una Persona por ID:
exports.deletePersonaById = async (req, res) => {
  const personaId = req.params.id;

  try {
    const personaObjectId = new ObjectId(personaId);
    const persona = await model.findOneAndDelete({ _id: personaId });

    if (!persona) {
      return res.status(404).send("Persona no encontrada");
    }

    return res.status(200).send("Persona eliminada correctamente");
  } catch (error) {
    console.error("Ocurrió un error al eliminar la persona:", error);
    res.status(500).send("Error interno en el servidor");
  }
};

//Eliminar Todas las Personas:
exports.deleteAllPersonas = async (req, res) => {
  try {
    const result = await model.deleteMany();

    return res
      .status(200)
      .send(`${result.deletedCount} personas eliminadas correctamente`);
  } catch (error) {
    console.error("Ocurrió un error al eliminar todas las personas:", error);
    res.status(500).send("Error interno en el servidor");
  }
};

//Actualizar campo por id:
exports.updatePersona = async (req, res) => {
  const personaId = req.params.id;
  const newData = req.body;

  try {
    const persona = await model.findByIdAndUpdate(personaId, newData, {
      new: true,
    });

    if (!persona) {
      return res.status(404).send("Persona no encontrada");
    }

    return res.status(200).send(persona);
  } catch (error) {
    console.error("Ocurrió un error al actualizar la persona:", error);
    res.status(500).send("Error interno en el servidor");
  }
};
