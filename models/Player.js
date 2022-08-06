const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Player extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Player.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
                type: DataTypes.STRING,
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
            type: DataTypes.INTEGER,
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

