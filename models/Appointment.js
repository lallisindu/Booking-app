const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Appointment = sequelize.define('Appointment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

exports.createAppointment = async (req, res) => {
    const { username, email, phoneNumber } = req.body;
  
    try {
      // Create a new appointment using Sequelize model
      const newAppointment = await Appointment.create({ username, email, phoneNumber });
  
      // Respond with a success message or the newly created appointment data
      res.status(201).json({ message: 'Appointment created successfully', appointment: newAppointment });
    } catch (error) {
      // Handle errors
      console.error('Error creating appointment:', error);
      res.status(500).json({ message: 'Failed to create appointment' });
    }
  };

module.exports = Appointment;