// fullname, email, username, password

module.exports = function (sequelize, DataTypes) { 

    return sequelize.define('recruiter', {
        fullName: DataTypes.STRING,
        userName: DataTypes.STRING,
        email: DataTypes.STRING,
        passwordhash: DataTypes.STRING
    });
};