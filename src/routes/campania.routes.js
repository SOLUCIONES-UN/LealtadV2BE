const {Router} = require('express');
const router = Router();
const {AddCampania} = require('../controller/campania.controller');
//const {validateCreate} = require('../validator/categoria')

//declarampos nuestra constante para almacenar el path`
const path = 'Campania';


//rutas del proyecto
//router.get(`/${path}`,GetCategorias);
router.post(`/${path}`,AddCampania);
// router.put(`/${path}/:id`,validateCreate,UpdateCategoria);
// router.delete(`/${path}/:id`,validateCreate,DeleteCategoria);
// router.get(`/${path}/:id`,GetCategoriaById);

module.exports = router;