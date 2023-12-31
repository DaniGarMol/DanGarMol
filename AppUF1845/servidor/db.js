const mongoose = require('mongoose')
require('dotenv').config({path: 'variable.env'})

const conectarDB = async () => {
    try{
        await mongoose.connect(process.env.DB_MONGO,{
            // useNewUrlParser: true,
            // useUnitfiedTopology: true
        })
        console.log('BD conectada')
    }catch (error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = conectarDB