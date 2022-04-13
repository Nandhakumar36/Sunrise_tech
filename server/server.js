const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
let path = require('path');

const routes = require("./routes");
const port = process.env.PORT || 4000;

const app = express();
dotenv.config();

mongoose.connect(process.env.DATABASE_CONNECTION_STRING, () =>
  console.log("Database connected successfully")
);

app.use(express.json());
app.use(cors());
app.use(routes);

app.get("/", (request, response) => {
  response.json({ info: "InterviewDesk APIs are up." });
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).json({
    message: err.message || "Something went wrong!",
  });
});

app.use("/.well-known", express.static(path.join(__dirname, ".well-known")))

app.listen(port, () => console.log('server is up and running on port 4000'));
