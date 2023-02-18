const express = require("express");

// internal imports
const Admin = require("../models/Admin");

const router = express.Router();

router.post("/addAdmin", async (req, res) => {
  try {
    const newData = new Admin(req.body);
    const result = await newData.save();

    if (result) {
      res.send(true);
    }
  } catch (error) {
    res.json({ err: "unknown error" });
  }
});
router.post("/", async (req, res) => {
  const admin = req.body.admin;
  try {
    const docs = await Admin.find({ admin: admin });
    res.send(docs.length > 0);
  } catch (err) {
    res.json({ error: "Admin not found" });
  }
});

module.exports = router;
