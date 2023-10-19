const mongoose = require("mongoose");

const scope = "CuadernoDeLaboratorio"
const uri = `mongodb://127.0.0.1:27017/${scope}`;

module.exports = async () => {
  const connect = () => {
    mongoose
      .connect(uri, { useNewUrlParser: true })
      .then(() => console.log("Se ha conectado a mongodb correctamente"))
      .catch((e) => console.log("error de conexión a mongodb", e.message));
  };
  connect();
};

