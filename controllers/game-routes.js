const router = require('express').Router();
const {Player} = require('../models');

router.get('/', async (req, res) => {
    const player = await Player.findByPk(req.session.user_id);
    res.render('singleplayer', {layout: 'game.handlebars', player: {username: player.username, balance: player.balance}});
});

module.exports = router