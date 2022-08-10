const router = require('express').Router();
const { Player } = require('../../models');

router.post('/add-balance', async (req, res) => {
    const player = await Player.findByPk(req.session.user_id);
    const oldBalance = player.balance;
    const newBalanceVal = player.balance + req.body.balance;
    await player.update({
        balance: newBalanceVal,
    });
    await player.save();
    // console.log(player);
    res.status(200).json({newBalance: newBalanceVal, oldBalance});
    console.log(newBalanceVal);
    console.log(oldBalance)
});

module.exports = router;