const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

router.get('/appointments', appointmentController.getAllAppointments);
router.get('/appointments/:id', appointmentController.getAppointmentById);
router.post('/appointments/add', appointmentController.addAppointment);
router.delete('/appointments/delete/:id', appointmentController.deleteAppointment);

module.exports = router;