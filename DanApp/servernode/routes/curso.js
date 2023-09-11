const express = require('express')

const cursoController = require('../controllers/curso')
const router = express.Router()

router.get('/homecurso', cursoController.homeCurso);
router.post('/testcurso', cursoController.testCurso);
router.post('/save-user', cursoController.saveCurso);
router.get('/user/:id?', cursoController.getCurso);
router.get('/users', cursoController.getcurso2);
router.put('/user/:id', cursoController.updateCurso);
router.delete('/user/:id', cursoController.deleteCurso);

// const path = 'curso'

// router.get(
//     `/${path}`,
//     controller.getData
//     )

module.exports = router