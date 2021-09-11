const express = require('express');
const router = express.Router();

const productosController = require("../controllers/productosController");

//Mostrar todos los productos(GET)
router.get('/',productosController.mostrar);
//Crear producto(POST)
router.post('/crear',productosController.crear);
//Actualizar producto(POST)
router.post('/editar',productosController.editar);
//Eliminar
router.get('/borrar/:id', productosController.borrar);
module.exports = router;