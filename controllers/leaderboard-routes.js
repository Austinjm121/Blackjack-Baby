const router = require('express').Router();
const {Player} = require('../models');

router.get('/', async (req, res) => {
    try {
        const playerData = await Player.findAll({
            order: [
                ['cash', 'DESC'],                
            ],
            limit: 10,
        });
        res.render('leaderboard', {
            layout: 'start-end.handlebars',
            players: playerData.map((p) => {
                return {username: p.username, cash: p.cash};
            })
        });
      } catch (err) {
        res.status(500).json(err);
      }
    
});

module.exports = router;
