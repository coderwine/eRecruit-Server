module.exports = (sequelize, DataTypes) => {
    const Logs = sequelize.define('logs', {
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true
      },
      skills: {
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
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      message: {
        type: DataTypes.STRING,
        allowNull: true
      }
    })

    return Logs
  }
