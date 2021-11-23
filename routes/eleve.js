const express = require('express');
const router = express.Router();

const eleveCtrl = require('../controllers/eleve');

router.get('/', eleveCtrl.list);
router.get('/:id', eleveCtrl.get);
router.post('/', eleveCtrl.create);
router.put('/', eleveCtrl.update);

module.exports = router;