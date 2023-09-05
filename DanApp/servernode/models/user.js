const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema(
    {
        nombre: {
            type: String
        },
        apellidos: {
            type: String
        },
        edad: {
            type: Number
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        telefono: {
            type: String,
            required: true
        },
        imagen: {
            type: String
        },
        estado: {
            type: Boolean
        },
        nota: {
            type: Number
        },
        tipo: {
            type: String
        }
    }
)

module.exports = mongoose.model('users', UserSchema)