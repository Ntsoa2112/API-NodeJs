const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const eleveCtrl = require('../controllers/eleve');

router.get('/list', eleveCtrl.list);
router.all('/get', eleveCtrl.get);


module.exports = router;