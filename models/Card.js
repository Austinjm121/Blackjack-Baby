const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Card extends Model {}

Card.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      card_number:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      card_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'card',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'card',
    }
  );
  
  module.exports = Card;