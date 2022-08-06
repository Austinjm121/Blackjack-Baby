const router = require('express').Router();

const apiRoutes = require('./api');
const welcomeRoutes = require('./welcome');

router.use('/', welcomeRoutes);
router.use('/api', apiRoutes);

module.exports = router;



// const router = require('express').Router();
// router.get('/', async (req, res) => {
//   res.render('welcome');
// });

// module.exports = router;