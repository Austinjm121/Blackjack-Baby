const router = require('express').Router();
const { Player } = require('../../models');

// Get all players
router.get('/', async (req, res) => {
  try {
    const playerData = await Player.findAll();
    res.status(200).json(playerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE new player
router.post('/', async (req, res) => {
  try {

    const plyr = {
      ...req.body,
      cash: 100,
    };

    const playerData = await Player.create(plyr);
      res.status(200).json(playerData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Player Login
router.post('/login', async (req, res) => {
    try {
      const dbPlayerData = await Player.findOne({
        where: {
          username: req.body.username,
        },
      });
  
      if (!dbPlayerData) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password. Please try again!' });
        return;
      }
  
      const validPassword = await dbPlayerData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password. Please try again!' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = dbPlayerData.id;
        req.session.logged_in = true;
        res
          .status(200)
          .json({ player: dbPlayerData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


// Logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

  module.exports = router;