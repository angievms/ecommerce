const Carrito = require('../modelos/carrito');

exports.crearCarrito = async(req, res) =>{
    try{
        const nuevoCarrito = new Carrito(req.body)
        await nuevoCarrito.save();
        res.status(201).json(nuevoCarrito);
    }catch(error){
        res.status(500).json({mensaje: 'Error al crear el carrito: ', error: error.message});
    }
};

exports.obtenerCarrito = async(req, res) => {
    try{
        const carrito = await Carrito.findOne({ usuario: req.params.usuarioId })
                             .populate('usuario')  // Para obtener los detalles del usuario
                             .populate('productos.producto');  // Para obtener los detalles de los productos
        res.status(200).json(carrito)
    }catch(error){
        res.status(500).json({mensaje: 'Error al obtener los usuarios ', error: error.message});
    }
};

exports.actualizarCarrito = async (req, res) =>{
    try{
        const carritoActualizado = await Carrito.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(carritoActualizado);
    }catch(error){
        res.status(500).json({ mensaje: 'Error al actualizar el carrito', error: error.message});
    }
};

exports.eliminarCarrito = async (req, res) =>{
    try{
        await Carrito.findByIdAndDelete(req.params.id);
        res.status(200).json({mensaje: 'Carrito eliminado correctamente'});
    }catch(error){
        res.status(500).json({ mensaje: 'Error al eliminar el carrito', error: error.message });
    }
};