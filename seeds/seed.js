const sequelize = require('../config/connection');
const { Player, Dealer, Card } = require('../models');

const playerData = require('./playerData.json');
const dealerData = require('./dealerData.json');
const cardData = require('./cardData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const players = await Player.bulkCreate(playerData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
