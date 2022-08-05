const router = require('express').Router();

const gameRoutes = require('./game-routes');
const leaderRoutes = require('./leaderboard-routes');

router.use('/game', gameRoutes);
router.use('/leaders', leaderRoutes);

module.exports = router;