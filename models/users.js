'use strict';

module.exports = (sequelize, DataTypes) => {
    var users = sequelize.define('Users', {
        userName: { type: DataTypes.STRING, allowNull: false },
        userAddress: { type: DataTypes.DATE, allowNull: false },
        birthday: DataTypes.DATE
    }, {});
    return Users;
};