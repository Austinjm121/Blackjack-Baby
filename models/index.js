const Player = require('./Player');
const Dealer = require('./Dealer');
const Card = require('./Cards');


Player.hasOne(Card,{
    foreignKey: 'card_id',
    onDelete: 'CASCADE',
});

Card.belongTo(Player,{
    foreignKey: 'card_id',
    onDelete: 'CASCADE',
});

Dealer.hasOne(Card,{
    foreignKey: 'card_id',
    onDelete: 'CASCADE',
});

Dealer.belongTo(Player,{
    foreignKey: 'card_id',
    onDelete: 'CASCADE',
});


module.exports = {Player, Dealer, Card };