// full name, email, password

module.exports = function (sequelize, DataTypes) { 

    const Client = sequelize.define('client', {
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        passwordhash: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Client;
};
