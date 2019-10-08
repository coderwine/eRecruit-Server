// fullname, email, username, password

module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('admin', {
      name: {
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
    return Admin
  }