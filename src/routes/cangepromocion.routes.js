const { Router } = require('express');
const { Participar, Testear } = require('../controller/cangePromocion.controller');
const router = Router();



const path = 'cangePromocion';

router.post(`/${path}`, Participar);

router.post(`/${path}/Test`, Testear);

module.exports = router