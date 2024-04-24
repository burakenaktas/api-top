const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");

const { default: mongoose } = require("mongoose");
// const dayjs = require("dayjs");
const Contribution = require("./schemas/Contribution");

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
mongoose.connect(process.env.MONGODB_URL).catch((err) => {
  console.log(err);
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const jsonParser = bodyParser.json();

app.get("/");

app.post("/api/contribute", jsonParser, async (req, res) => {
  const { name, realization, title, email, topic } = req.body;

  try {
    await Contribution.create({
      name,
      realization,
      title,
      email,
      topic,
      isAprroved: false,
    });

    res.status(200).send("Contribution added successfully");
  } catch (error) {
    res.status(400).send("Error adding contribution");
  }
});

app.get("/api/contributions", async (req, res) => {
  try {
    const contributions = await Contribution.find(
      req.params.topic
        ? { topic: req.params.topic, isApproved: true }
        : {
            isApproved: true,
          }
    );
    res.status(200).send(contributions);
  } catch (error) {
    res.status(400).send("Error fetching contributions");
  }
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});
