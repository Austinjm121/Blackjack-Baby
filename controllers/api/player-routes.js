const router = require('express').Router();
const { Player } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbPlayerData = await Player.create({
      Username: req.body.Username,
      Password: req.body.Password,
    });

    req.session.save(() => {
      req.session.player_id = playerData.id;
      req.session.logged_in = true;

      res.status(200).json(dbPlayerData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
    try {
      const dbPlayerData = await Player.findOne({
        where: {
          Username: req.body.Username,
        },
      });
  
      if (!dbPlayerData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      const validPassword = await dbPlayerData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      req.session.save(() => {
        req.session.player_id = playerData.id;
        req.session.logged_in = true;
  
        res
          .status(200)
          .json({ user: dbPlayerData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;