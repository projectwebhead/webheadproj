const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

/* Middleware */
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});



/* Routes */
const answersRoutes = require("./routes/Answers");

app.use("/answers", answersRoutes);

/* Connection to MongoDB */
const dbConfig = "mongodb://127.0.0.1:27017";
const dbName = "webheadDB";

mongoose.connect(`${dbConfig}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = 3001;

app.listen(port, () => {
  console.log("Listening on port: ", port);
});
