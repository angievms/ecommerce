const mongoose = require('mongoose')
const dotev = require('dotenv')
dotev.config()

const conectarBD = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        }catch(error){
            console.error('Error en la conexion a MongoDB: ', error)
            process.exit(1)
    }
}

module.exports = conectarBD