const router = require('express').Router();
const playerRoutes = require('./player-routes')
const gameRoutes = require('./game-routes');
const leaderRoutes = require('./leaderboard-routes');

router.use('/game', gameRoutes);
router.use('/leaders', leaderRoutes);
router.use('/player', playerRoutes);

module.exports = router;