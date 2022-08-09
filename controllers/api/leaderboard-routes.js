const router = require('express').Router();
const {Player} = require('../../models');

router.get('/', async (req, res) => {
    res.render('leaderboard', {layout: 'start-end.handlebars'});
});
// router.get('/leaders', async (req, res) => {
//     try {
//       const dbPlayerData = await Player.findAll({
//         include: [
//           {
//             model: Player,
//             attributes: ['username', 'cash'],
//           },
//         ],
//       });
  
//       const Player = dbPlayerData.map((Player) =>
//         Player.get({ plain: true })
//       );
  
//       res.render('homepage', {
//         galleries,
//         loggedIn: req.session.loggedIn,
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });


module.exports = router;
