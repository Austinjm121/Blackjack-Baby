const router = require('express').Router();
const { Player } = require('../../models');

router.post('/add-cash', async (req, res) => {
    const player = await Player.findByPk(req.session.user_id);
    const oldCash = player.cash;
    const newCashVal = player.cash + req.body.cash;
    await player.update({
        cash: newCashVal,
    });
    await player.save();
    // console.log(player);
    res.status(200).json({newCash: newCashVal, oldCash});
    console.log(newCashVal);
    console.log(oldCash)
});

module.exports = router;