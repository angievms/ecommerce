const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const conectarBD = require('./src/configuracion/baseDatos')

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

conectarBD()

//rutas
app.use('/api/autenticacion', require('./src/rutas/rutasAutenticacion'))
app.use('/api/productos', require ('./src/rutas/rutasProducto'))
app.use('/api/usuarios', require('./src/rutas/rutasUsuario'))
app.use('/api/ordenes', require('./src/rutas/rutasOrden'))
app.use('/api/carrito', require('./src/rutas/rutasCarrito'))
app.use('/api/categorias', require('./src/rutas/rutasCategoria'))

app.use((req, res, next)=>{
    res.status(404).json({ mensaje: 'Ruta no encontrada'})
})

app.use((error, req, res, next)=>{
    console.error(error.stack)
    res.status(500).json({mensaje: 'Error en el servidor ', error: error.message})
})

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Servidor ejecutandose en el puerto ${PORT}`)
})