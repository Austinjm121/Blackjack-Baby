const Player = require('./Player');
const Dealer = require('./Dealer');
const Card = require('./Card');


Player.hasOne(Card,{
    foreignKey: 'card_id',
    onDelete: 'CASCADE',
});

Card.belongsTo(Player,{
    foreignKey: 'card_id',
    onDelete: 'CASCADE',
});

Dealer.hasOne(Card,{
    foreignKey: 'card_id',
    onDelete: 'CASCADE',
});

Dealer.belongsTo(Player,{
    foreignKey: 'card_id',
    onDelete: 'CASCADE',
});

Player.hasMany(Card,{
    foreignKey: 'card_id',
    onDelete:'CASCADE',
});

Dealer.hasMany(Card,{
    foreignKey: 'card_id',
    onDelete: 'CASCADE',
})



module.exports = {Player, Dealer, Card };