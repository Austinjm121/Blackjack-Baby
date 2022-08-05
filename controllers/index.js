const router = require('express').Router();

const apiRoutes = require('./api');
const welcomeRoutes = require('./welcome');

router.use('/api', apiRoutes);
router.use('/', welcomeRoutes);

module.exports = router;