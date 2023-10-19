const express = require("express");
const router = express.Router();
const controller = require("../controllers/persona");

router.delete("/persona/:id", controller.deletePersonaById);

router.delete("/personas", controller.deleteAllPersonas);

router.get('/personas', controller.getData);

router.post('/persona', controller.insertData);

router.post('/persona', controller.createPersona);



router.put("/persona/:id", controller.updatePersona);


module.exports = router;
