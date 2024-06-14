const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");

const { default: mongoose } = require("mongoose");
// const dayjs = require("dayjs");
const Contribution = require("./schemas/Contribution");
const Feedback = require("./schemas/Feedback");
const ContactUs = require("./schemas/ContactUs");
const LoveForm = require("./schemas/LoveForm");

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
      isApproved: false,
    });

    res.status(200).send("Contribution added successfully");
  } catch (error) {
    res.status(400).send("Error adding contribution");
  }
});

app.get("/api/contributions", async (req, res) => {
  try {
    const contributions = await Contribution.find(
      req.query.topic
        ? { topic: req.query.topic, isApproved: true }
        : {
            isApproved: true,
          }
    );

    res.status(200).send(contributions);
  } catch (error) {
    res.status(400).send("Error fetching contributions");
  }
});

app.post("/api/feedback", jsonParser, async (req, res) => {
  const { feedback, contactMe, email, name } = req.body;

  try {
    await Feedback.create({
      name,
      email,
      feedback,
      contactMe,
    });

    res.status(200).send("Feedback added successfully");
  } catch (error) {
    res.status(400).send("Error adding feedback");
  }
});

app.post("/api/love", jsonParser, async (req, res) => {
  try {
    await LoveForm.create(req.body);

    res.status(201).send("Form data saved successfully!");
  } catch (error) {
    res.status(400).send("Error saving form data: " + error.message);
  }
});

app.post("/api/contact-us", jsonParser, async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await ContactUs.create({
      name,
      email,
      message,
    });

    res.status(200).send("Message sent successfully");
  } catch (error) {
    res.status(400).send("Error sending message");
  }
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});
