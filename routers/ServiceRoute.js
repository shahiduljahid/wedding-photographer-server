const express = require("express");

// internal imports
const Service = require("../models/Service");

const router = express.Router();

//get all services
router.get("/", async (req, res) => {
  try {
    const docs = await Service.find();
    res.json(docs);
  } catch {
    res.json({ error: "unknown error" });
  }
});

router.post("/addService", async (req, res) => {
  try {
    const newData = new Service(req.body);
    const result = await newData.save();

    if (result) {
      res.send(true);
    }
  } catch (error) {
    res.json({ err: "unknown error" });
  }
});
router.delete("/:id", async (req, res) => {
    try {
      const data = await Service.findByIdAndDelete({
        _id: req.params.id,
      });
      res.send(data);
    } catch {
      res.send("Wrong parameter detected");
    }
  });

module.exports = router;
