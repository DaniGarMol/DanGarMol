import { Router } from 'express'
import { getArchivo } from '../controllers/ArchivoController'

const routerarchivos = Router();
routerarchivos.post('/archivos/:id', getArchivo);

export default routerarchivos;