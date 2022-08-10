const router = require('express').Router();
const withAuth = require('../utils/auth');
const apiRoutes = require('./api');
const welcomeRoutes = require('./welcome');
const gameRoutes = require('./game-routes');
const leaderboardRoutes = require('./leaderboard-routes');

router.use('/', welcomeRoutes);
router.use('/game', withAuth, gameRoutes);
router.use('/leaderboard', withAuth, leaderboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;