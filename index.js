// external imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

// internal imports
const AdminRouter = require("./routers/AdminRouter");
const AppointmentRoute = require("./routers/AppointmentRoute");
const ReviewRoute = require("./routers/ReviewRoute");
const ServiceRoute = require("./routers/ServiceRoute");

const app = express();
// database connection
const uri = process.env.DB_URI;
mongoose.set("strictQuery", false);
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5050;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,PUT,DELETE,OPTIONS"
  );
  next();
});
app.use(cors());
app.use(
  bodyParser.json({
    limit: "50MB",
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "50MB",
    parameterLimit: 100000,
    extended: true,
  })
);
app.use(express.json());
//routing setup
app.use("/admin", AdminRouter);
app.use("/appointment", AppointmentRoute);
app.use("/review", ReviewRoute);
app.use("/service", ServiceRoute);

app.use("/", (req, res) => {
  res.json({ mess: "iam ALive" });
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
