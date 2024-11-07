const Orden = require('../modelos/orden');

exports.crearOrden = async(req, res) =>{
    try{
        const nuevaOrden = new Orden(req.body)
        await nuevaOrden.save();
        res.status(201).json(nuevaOrden);
    }catch(error){
        res.status(500).json({mensaje: 'Error al crear la orden', error: error.message});
    }
};

exports.obtenerOrdenes = async(req, res) => {
    try{
        const ordenes = await Orden.find().populate('usuario').populate('productos.producto');
        res.status(200).json(ordenes);
    }catch(error){
        res.status(500).json({mensaje: 'Error al obtener los usuarios ', error: error.message});
    }
};

exports.actualizarOrden = async (req, res) =>{
    try{
        const ordenActualizada = await Orden.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(ordenActualizada);
    }catch(error){
        res.status(500).json({ mensaje: 'Error al actualizar el usuario', error: error.message});
    }
};

exports.eliminarOrden = async (req, res) =>{
    try{
        await Orden.findByIdAndDelete(req.params.id);
        res.status(200).json({mensaje: 'Orden eliminada correctamente'});
    }catch(error){
        res.status(500).json({ mensaje: 'Error al eliminar la orden', error: error.message});
    }
};