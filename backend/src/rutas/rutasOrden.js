const express = require('express');
const router = express.Router();
const controladorOrden = require('../controladores/controladorOrden');

router.post('/', controladorOrden.crearOrden);
router.get('/', controladorOrden.obtenerOrdenes);
router.put('/:id', controladorOrden.actualizarOrden);
router.delete('/:id', controladorOrden.eliminarOrden);

module.exports = router;