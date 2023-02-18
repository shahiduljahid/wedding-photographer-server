const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    admin: String,
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;
