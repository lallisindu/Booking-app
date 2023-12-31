const Appointment = require('../models/Appointment');

exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll();
    res.render('appointments', { appointments });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAppointmentById = async (req, res) => {
  const { id } = req.params;
  try {
    const appointment = await Appointment.findByPk(id);
    res.render('appointments', { appointments: [appointment] });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addAppointment = async (req, res) => {
  const { username, email, phoneNumber } = req.body;
  try {
    await Appointment.create({ username, email, phoneNumber });
    res.sendFile('success.html', { root: './views' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteAppointment = async (req, res) => {
  const { id } = req.params;
  try {
    await Appointment.destroy({ where: { id } });
    res.sendFile('success.html', { root: './views' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};