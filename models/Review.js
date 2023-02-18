const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    name: String,
    companyName: String,
    Designation: String,
    description: String,
    rating: String,
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("review", reviewSchema);

module.exports = Review;
