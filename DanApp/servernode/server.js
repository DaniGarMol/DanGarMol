const express = require('express')

const app = express()

const port = 3700

app.listen(port,() =>{
    console.log('La aplicación está en línea....')
})
const userRouters = require('./routes/user')
app.use(userRouters)

const cursosRouters = require('./routes/cursos')
app.use(cursosRouters)

const cursoRouters = require('./routes/curso')
app.use(cursoRouters)

// Conexión con Base datos

const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/DanApp', {
    useNewUrlParser: true,
})
.then(() => {
    console.log("Conexión establecida...")
})
.catch(err => console.log(err))
