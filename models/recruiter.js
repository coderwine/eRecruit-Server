
module.exports = (sequelize, DataTypes) => {
    const Recruiter = sequelize.define('recruiter', {
      fullName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    })
    return Recruiter
  }
