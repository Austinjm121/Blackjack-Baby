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
        passowrd:{
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
            validate:{
                isUsername: true,
            },
        },
        cash: {
            type: DataType,INTEGER,
            allowNull: false,
        },
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
              newUserData.password = await bcrypt.hash(newUserData.password, 10);
              return newUserData;
            },
          },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Player',
    }
);

module.exports = Player;

