const {Router} = require('express');
const router = Router();
const {AddColumna,UpdateColumna,DeleteColumna,GetColumnaById,GetColumnas} = require('../controller/columna.controller');
const {validateCreate} = require('../validator/columna')

//declarampos nuestra constante para almacenar el path`
const path = 'Columna';


//rutas del proyecto
router.get(`/${path}`,GetColumnas);
router.post(`/${path}`,AddColumna);
router.put(`/${path}/:id`,validateCreate,UpdateColumna);
router.delete(`/${path}/:id`,validateCreate,DeleteColumna);
router.get(`/${path}/:id`,GetColumnaById);

module.exports = router;