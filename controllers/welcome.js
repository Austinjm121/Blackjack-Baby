const router = require('express').Router();
const { Player } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// Render welcomepage
router.get('/', async (req, res) => {
    res.render('main');
});

module.exports = router;
