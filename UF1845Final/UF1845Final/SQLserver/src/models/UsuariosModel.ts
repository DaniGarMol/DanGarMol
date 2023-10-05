import { DataTypes } from 'sequelize';
import db from '../config/connectdb';

const Usuarios = db.define('usuarios',{
    nombre: {
        type: DataTypes.STRING
    },
    apellidos: {
        type: DataTypes.STRING
    },
    Fnacimiento: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.NUMBER
    },
    foto: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    tipo: {
        type: DataTypes.STRING
    },
    anotaciones: {
        type: DataTypes.STRING
    }


}, {
    createdAt: false,
    updatedAt: false
});
 export default Usuarios;