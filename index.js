const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const port = 4000;
require("dotenv").config();

const uri = process.env.DB_URI;

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
  const adminCollection = client.db("weddings").collection("admins");
  const serviceCollection = client.db("weddings").collection("services");
  const reviewCollection = client.db("weddings").collection("reviews");

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

  app.post("/addAdmin", (req, res) => {
    const admin = req.body;
    console.log(admin);
    adminCollection
      .insertOne(admin)
      .then((result) => {
        res.send(result.insertedCount > 0);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.post("/admin", (req, res) => {
    const admin = req.body.admin;
    console.log(admin);
    adminCollection.find({ admin: admin }).toArray((err, documents) => {
      res.send(documents.length > 0);
    });
  });

  app.patch("/updateStatus", (req, res) => {
    const id = req.body.bookingId;
    const status = req.body.status;
    weddingCollection
      .updateOne({ _id: ObjectId(id) }, { $set: { status: status } })
      .then((result) => {
        res.send(result.modifiedCount > 0);
      });
  });

  app.get("/totalAppointments", (req, res) => {
    weddingCollection.find({}).toArray((err, documents) => {
      res.send(documents);
    });
  });
  app.get("/services", (req, res) => {
    serviceCollection.find({}).toArray((err, documents) => {
      res.send(documents);
    });
  });
  app.post("/userService", (req, res) => {
    const user = req.body.user;

    weddingCollection.find({ user: user }).toArray((err, documents) => {
      res.send(documents);
    });
  });
  app.post("/addService", (req, res) => {
    const service = req.body;
    serviceCollection
      .insertOne(service)
      .then((result) => {
        res.send(result.insertedCount > 0);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  app.post("/addReview", (req, res) => {
    const review = req.body;
    reviewCollection
      .insertOne(review)
      .then((result) => {
        res.send(result.insertedCount > 0);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  app.get("/reviews", (req, res) => {
    reviewCollection.find({}).toArray((err, documents) => {
      res.send(documents);
    });
  });
});

app.listen(process.env.PORT || port);


