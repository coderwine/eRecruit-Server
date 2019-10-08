module.exports = (sequelize, DataTypes) => {
    const Log = sequelize.define('log', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      comments: {
        type: DataTypes.STRING,
        allowNull: true
      },
      linkedin: {
        type: DataTypes.STRING,
        allowNull: true
      }
    })
    return Log;
  }
