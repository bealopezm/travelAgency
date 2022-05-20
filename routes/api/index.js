const router = require('express').Router();

router.use('/clients', require('./clients'));
router.use('/travels', require('./travels'));
router.use('/hotels', require('./hotels'));

module.exports = router;