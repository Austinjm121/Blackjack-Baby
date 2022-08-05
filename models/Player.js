const { Model, DataTypes } = require('sequelize');
const sequelize = require('../controllers/api/index');

class Player extends Model {}

Player.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
                type: DataTypes, STRING,
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
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Player',
    },
);

module.exports = Player;

