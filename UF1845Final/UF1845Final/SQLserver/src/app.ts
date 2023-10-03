import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import sequelize from './config/connectdb'
import routercursos from './routes/CursoRoutes';
import routerusuarios from './routes/UsuariosRoutes';
import routertareas from './routes/TareasRoutes';
import routermensajes from './routes/MensajesRoutes';
import routerarchivos from './routes/ArchivoRoutes';
import routeradmins from './routes/AdminServicesRoutes';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routercursos);
app.use(routerusuarios);
app.use(routertareas);
app.use(routermensajes);
app.use(routerarchivos);
app.use(routeradmins);



app.listen(PORT, () => console.log(`Api conectada por el puerto ${PORT}`));

try {
    sequelize.authenticate();
    console.log('La conexión con la Base de Datos es correcta');
} catch (error){
    console.error('No se puede conectar con la base de datos', error);
}