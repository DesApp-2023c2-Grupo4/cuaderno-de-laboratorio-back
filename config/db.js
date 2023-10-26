const mongoose = require("mongoose");

const scope = "local"
const uri = `mongodb://127.0.0.1:27017/${scope}`;

module.exports = () => {
  const connect = () => {
    mongoose
      .connect(uri, { useNewUrlParser: true })
      .then(() => console.log("Se ha conectado a mongodb correctamente"))
      .catch((e) => console.log("error de conexión a mongodb", e.message));
  };
  connect();
};
