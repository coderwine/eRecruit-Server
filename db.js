const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.NAME, 'postgres', process.env.PASS, {
    host: process.env.HOST,
    // host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(() => console.log('Postgres DB Connected Now'))
    .catch(err => console.log(err))

module.exports = sequelize;