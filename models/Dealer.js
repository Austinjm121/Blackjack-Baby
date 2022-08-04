const { Model, DataType } = require('sequalize');
const sequalize = require('../controllers/api/index');

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
        winnings: {
            type: DataType,INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'gallery',
      }
);

module.exports = Dealer;