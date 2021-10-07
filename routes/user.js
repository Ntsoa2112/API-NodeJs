const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const userCtrl = require('../controllers/user');

router.post('/register', userCtrl.register);
router.all('/login', userCtrl.login);

module.exports = router;