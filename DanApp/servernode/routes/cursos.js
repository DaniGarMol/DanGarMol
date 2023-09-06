const express = require('express')

const CursosController = require('../controllers/cursos')
const router = express.Router()

router.get('/homecursos', CursosController.homeCursos);
router.post('/testcursos', CursosController.testCursos);
router.post('/save-user', CursosController.saveCursos);
router.get('/user/:id?', CursosController.getCurso);
router.get('/users', CursosController.getCursos);
router.put('/user/:id', CursosController.updateCursos);
router.delete('/user/:id', CursosController.deleteCursos);

// const path = 'cursos'

// router.get(
//     `/${path}`,
//     controller.getData
//     )

module.exports = router