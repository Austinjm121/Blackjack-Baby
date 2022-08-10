const router = require('express').Router();
const {Player} = require('../models');

router.get('/', async (req, res) => {
    try {
        const playerData = await Player.findAll({
            order: [
                ['balance', 'DESC'],                
            ],
            limit: 10,
        });
        res.render('leaderboard', {
            layout: 'start-end.handlebars',
            players: playerData.map((p) => {
                return {username: p.username, balance: p.balance};
            })
        });
      } catch (err) {
        res.status(500).json(err);
      }
    
});

module.exports = router;
