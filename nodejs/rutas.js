const express = require('express')
const controlador = require('./controlador')
const router = express.Router()

router.get('/personajes', controlador.getPersonajes)
router.get('/personaje', controlador.getPersonaje)

module.exports = router