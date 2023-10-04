const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personaSchema = new Schema({
  nombre:  String,
  apellido: String
});

// Crear el modelo
const Persona = mongoose.model('Persona', personaSchema);

module.exports = Persona;