const { Model, DataType } = require('sequelize');
const sequelize = require('../controllers/api/index');

class Dealer extends Model {}

Dealer.init(
    {
        id:{
            type: DataType,INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cash: {
            type: DataType,INTEGER,
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