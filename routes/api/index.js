const router = require('express').Router();

router.use('/clients', require('./clients'));
router.use('/travels', require('./travels'));

module.exports = router;