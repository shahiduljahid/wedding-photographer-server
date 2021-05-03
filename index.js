const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const port = 4000;

const uri = `mongodb+srv://doctor:s01955298739@cluster0.z2baq.mongodb.net/weddings?retryWrites=true&w=majority`;

require("dotenv").config();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const client = new MongoClient(
  uri,
  { useUnifiedTopology: true },
  { useNewUrlParser: true },
  { connectTimeoutMS: 30000 },
  { keepAlive: 1 }
);
client.connect((err) => {
  console.log("database connected");
  const weddingCollection = client.db("weddings").collection("appointments");

  app.post("/addappointment", (req, res) => {
    const appointment = req.body;
    console.log(appointment);
    weddingCollection
      .insertOne(appointment)
      .then((result) => {
        res.send(result.insertedCount > 0);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  //   app.post("/appointments", (req, res) => {
  //     const date = req.body;
  //     console.log(date.date);
  //     appointmentCollection
  //       .find({ date: date.date })
  //       .toArray((err, documents) => {
  //         res.send(documents);
  //         console.log(documents);
  //       });
  //   });
  app.get("/totalAppointments", (req, res) => {
    weddingCollection.find({}).toArray((err, documents) => {
      res.send(documents);
    });
  });
});

app.listen(process.env.PORT || port);
