const router = require('express').Router();
const {Player} = require('../models');

router.get('/', async (req, res) => {
    // console.log('#$%@#$%@#$%', req.session, 'user_id', req.session.user_id)
    const player = await Player.findByPk(req.session.user_id);
    // console.log('PLAYER', player);
    res.render('singleplayer', {layout: 'game.handlebars', player: {username: player.username}});
});

module.exports = router