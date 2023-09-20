const express = require('express')
const router = express.Router()
const usuarioController = require('../Controllers/usuarioController')

router.post('/', usuarioController.crearUsuario)
router.get('/', usuarioController.obtenerUsuario)
router.put('/:id', usuarioController.actualizarUsuario)
router.get('/:id', usuarioController.obtenerUsuario)
router.delete('/:id', usuarioController.eliminarUsuario)

module.exports = router