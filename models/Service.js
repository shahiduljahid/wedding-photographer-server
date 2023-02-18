const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    img: String,
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model("service", serviceSchema);

module.exports = Service;
