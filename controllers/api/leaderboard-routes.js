const router = require('express').Router();
const {Player} = require('../../models');

router.get('/', async (req, res) => {
    res.render('leaderboard', {layout: 'start-end.handlebars'});
});

module.exports = router;
