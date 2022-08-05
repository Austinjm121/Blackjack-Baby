const router = require('express').Router();
const {Player} = require('../../models');

// Display players in descending order by their Cash Value amount
// Route to get all players
router.get('/', async (req, res) => {
    try {
    // I'm not sure if Player.findAll() is correct here:
        const dbPlayerData = await Player.findAll({
            include: [
                {
                    model: Player,
                    attributes: ['username', 'cash'],
                },
            ],
        });

        const leaders = dbPlayerData.map((player) =>
        player.get({plain:true})
        );

        res.render('leaderboard', {
            leaders,
            loggedIn: req.session.logged_In,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



// localhost3001/ - welcome screen
// /Login view or take them to Game view
// 