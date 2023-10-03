import { DataTypes } from 'sequelize';
import db from '../config/connectdb';

const Mensajes = db.define('Mensajes',{
    remitente: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    asunto: {
        type: DataTypes.STRING
    },
    mensaje: {
        type: DataTypes.STRING
    },
    fecha_envio: {
        type: DataTypes.NUMBER
    }

}, {
    createdAt: false,
    updatedAt: false
});
 export default Mensajes;