const {Router} = require('express');
const router = Router();
const {GetPromocion,AddPromocion, GetPromocionById, UpdatePromocion, PausarPromocion, ActivarPromocion,TestearCodigo, DeletePromocion} = require('../controller/promocion.controller')


//declarampos nuestra constante para almacenar el path`
const path = 'Promocion';


//rutas del proyecto
router.get(`/${path}`, GetPromocion);
router.get(`/${path}/:id`,GetPromocionById);
router.post(`/${path}`,AddPromocion);
router.put(`/${path}/:id`,UpdatePromocion);
router.put(`/${path}/Pau/:id`,PausarPromocion);
router.put(`/${path}/Act/:id`,ActivarPromocion);
//router.post(`/${path}/Testear`,TestearCodigo);
 router.delete(`/${path}/:id`,DeletePromocion);
 


module.exports = router