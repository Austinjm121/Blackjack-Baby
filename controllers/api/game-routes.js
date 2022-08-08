const router = require('express').Router();
const {Player} = require('../../models');

router.get('/', async (req, res) => {
    res.render('singleplayer', {layout: 'game.handlebars'});
});

module.exports = router