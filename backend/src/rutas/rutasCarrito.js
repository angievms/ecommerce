const express = require('express');
const router = express.Router();
const controladorCarrito = require('../controladores/controladorCarrito');

router.post('/', controladorCarrito.crearCarrito);
router.get('/:usuarioId', controladorCarrito.obtenerCarrito);
router.put('/:id', controladorCarrito.actualizarCarrito);
router.delete('/:id', controladorCarrito.eliminarCarrito);

module.exports = router;