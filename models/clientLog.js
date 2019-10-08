//! May need to include another line for images.  - verify how this will need to be pulled.

module.exports = function (sequelize, DataTypes) { 

    const ClientLog = sequelize.define('client-log', {
        location: {
            type: DataTypes.STRING,
            allowNull: true
        },
        skills: {
            type: DataTypes.STRING,
            allowNull: true
        },
        messages: {
            type: DataTypes.STRING,
            allowNull: true
        },
        linkedInURL: {
            type: DataTypes.STRING,
            allowNull: true
        },
        gitHubURL: {
            type: DataTypes.STRING,
            allowNull: true
        },
        portfolioURL: {
            type: DataTypes.STRING,
            allowNull: true
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true
          }
    });

    return ClientLog;
};
