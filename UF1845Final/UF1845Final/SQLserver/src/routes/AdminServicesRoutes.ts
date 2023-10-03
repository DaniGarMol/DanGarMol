import { Router } from 'express'
import { deleteAdmin, getAdmin, getAdmins, postAdmin, updateAdmin } from '../controllers/AdminServicesController'

const routeradmins = Router();
routeradmins.get('/adminservices/', getAdmins);
routeradmins.get('/adminservices/:id', getAdmin);
routeradmins.delete('/adminservices/:id', deleteAdmin);
routeradmins.post('/adminservices/', postAdmin);
routeradmins.put('/adminservices/:id', updateAdmin);

export default routeradmins;