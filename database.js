const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bookingappointment', 'root', 'lallisindu', {
  host: 'localhost',
  dialect: 'mysql', // or other supported databases
});

module.exports = sequelize;