const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema(
  {
    user: String,
    booking: Object,
    paymentId: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

const Appointment = mongoose.model("appointment", appointmentSchema);

module.exports = Appointment;
