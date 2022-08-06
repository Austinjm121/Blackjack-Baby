const router = require('express').Router();
const { Player } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// Render welcomepage
router.get('/', async (req, res) => {
    res.render('welcome', {layout: 'start-end.handlebars'});
});

module.exports = router;
