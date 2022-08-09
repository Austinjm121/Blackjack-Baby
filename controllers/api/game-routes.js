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
    res.status(200).json({newCash: newCashVal, oldCash});
});

module.exports = router;