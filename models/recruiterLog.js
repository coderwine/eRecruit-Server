//! Need to verify the image upload and how that will need to be displayed on the table. 

module.exports = (sequelize, DataTypes) => {
    const RecruiterLog = sequelize.define('recruiter-log', {
      messages: {
        type: DataTypes.STRING,
        allowNull: true
      },
      linkedInURL: {
        type: DataTypes.STRING,
        allowNull: true
      },
      img: {
        type: DataTypes.STRING,
        allowNull: true
      }
    })
    return RecruiterLog
  }
