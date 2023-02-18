const express = require("express");

// internal imports
const Appointment = require("../models/Appointment");

const router = express.Router();

//get all appointment
router.get("/", async (req, res) => {
  try {
    const docs = await Appointment.find();
    res.json(docs);
  } catch {
    res.json({ error: "unknown error" });
  }
});

router.post("/addappointment", async (req, res) => {
  try {
    const newData = new Appointment(req.body);
    const result = await newData.save();

    if (result) {
      res.send(true);
    }
  } catch (error) {
    res.json({ err: "unknown error" });
  }
});
router.post("/userService", async (req, res) => {
  const user = req.body.user;
  try {
    const docs = await Appointment.find({ user: user });
    res.json(docs);
  } catch (err) {
    res.json({ error: "Admin not found" });
  }
});
router.patch("/updateStatus", async (req, res) => {
  const id = req.body.bookingId;
  const status = req.body.status;

  try {
    const stats = await Appointment.updateOne(
      { _id: id },
      {
        status: status,
      }
    );

    if (stats) {
      res.send(true);
    }
  } catch (err) {
    res.json({ error: err });
  }
});
router.delete("/:id", async (req, res) => {
    try {
      const data = await Appointment.findByIdAndDelete({
        _id: req.params.id,
      });
      res.send(data);
    } catch {
      res.send("Wrong parameter detected");
    }
  });

module.exports = router;
