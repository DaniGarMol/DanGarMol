const mongoose = require('mongoose')

const CursosSchema = new mongoose.Schema(
    {
        nombre: {
            type: String
        },
        info: {
            type: String
        },
        horas: {
            type: String
        }
    }
)
    
module.exports = mongoose.model('cursos', CursosSchema)