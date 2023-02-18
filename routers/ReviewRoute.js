const express = require("express");

// internal imports
const Review = require("../models/Review");

const router = express.Router();

//get all Reviews
router.get("/", async (req, res) => {
  try {
    const docs = await Review.find();
    res.json(docs);
  } catch {
    res.json({ error: "unknown error" });
  }
});

router.post("/addReview", async (req, res) => {
  try {
    const newData = new Review(req.body);
    const result = await newData.save();

    if (result) {
      res.send(true);
    }
  } catch (error) {
    res.json({ err: "unknown error" });
  }
});

module.exports = router;
