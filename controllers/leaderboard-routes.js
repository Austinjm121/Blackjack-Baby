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
        // res.status(200).json(playerData);
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

// // Get all players
// router.get('/', async (req, res) => {
//     try {
//       const playerData = await Player.findAll();
//       res.status(200).json(playerData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

// // route to get all dishes
// router.get('/', async (req, res) => {
//     // We find all dishes in the db and set the data equal to dishData
//     const playerData = await Player.findAll().catch((err) => { 
//       res.json(err);
//     });
//     // We use map() to iterate over dishData and then add .get({ plain: true }) each object to serialize it. 
//     const players = playerData.map((player) => player.get({ plain: true }));
//     // We render the template, 'all', passing in dishes, a new array of serialized objects.
//     res.render('leaderboard', {layout: 'start-end.handlebars', players });
//     });



// router.get('/', async (req, res) => {
//     try {
//       const dbPlayerData = await Player.findAll({
//         include: [
//           {
//             model: Player,
//             attributes: ['username', 'cash'],
//           },
//         ],
//       });
  
//       const players = dbPlayerData.map((player) =>
//         player.get({ plain: true })
//       );
  
//       res.render('leaderboard', {
//         layout: 'start-end.handlebars',
//         players,
//         loggedIn: req.session.logged_in,
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });


module.exports = router;
