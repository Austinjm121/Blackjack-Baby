const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dealer extends Model {}

Dealer.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cash: {
            type: DataTypes.INTEGER,
            allowNull: false,
    },
},
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'dealer',
      }
);

module.exports = Dealer;