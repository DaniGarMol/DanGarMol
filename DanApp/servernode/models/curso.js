const mongoose = require('mongoose')

const CursoSchema = new mongoose.Schema(
    {
       _id: String,
       nombre_usuario: String,
       tarea_code: String,
       tarea_description: String,
       puntuacion: Number,
       estado: String
    }
)
    
module.exports = mongoose.model('curso', CursoSchema)