const router = require('express').Router();
const withAuth = require('../../utils/auth');
const playerRoutes = require('./player-routes');
const gameApiRoutes = require('./game-routes');

router.use('/game', withAuth, gameApiRoutes);
router.use('/players', playerRoutes);

module.exports = router;