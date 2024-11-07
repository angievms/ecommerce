const Usuario = require('../modelos/usuario');

exports.crearUsuario = async(req, res) =>{
    try{
        const nuevoUsuario = new Usuario(req.body)
        await nuevoUsuario.save()
        res.status(201).json(nuevoUsuario);
    }catch(error){
        res.status(500).json({mensaje: 'Error al crear el usuario: ', error: error.message});
    }
};

exports.obtenerUsuarios = async(req, res) => {
    try{
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios)
    }catch(error){
        res.status(500).json({mensaje: 'Error al obtener los usuarios ', error: error.message});
    }
};

exports.actualizarUsuario = async (req, res) =>{
    try{
        const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(usuarioActualizado);
    }catch(error){
        res.status(500).json({ mensaje: 'Error al actualizar el usuario', error: error.message});
    }
};

exports.eliminarUsuario = async (req, res) =>{
    try{
        await Usuario.findByIdAndDelete(req.params.id);
        res.status(200).json({mensaje: 'Usuario eliminado correctamente'});
    }catch(error){
        res.status(500).json({ mensaje: 'Error al eliminar el usuario', error: error.message});
    }
};