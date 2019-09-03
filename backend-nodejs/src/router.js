const express = require('express');
const router = express.Router();
const requireDir = require('require-dir')

requireDir('./models')

router.use('/', require('./controllers/posts'))
router.use('/', require('./controllers/comments'))

module.exports = router;