const express = require("express");
const bodyParser = require("body-parser");
const serveStatic = require("serve-static");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(serveStatic("public"))

app.use(require("./routes"));

mongoose
  .connect("mongodb+srv://danny060893:AshleyFlock08@cluster0.y7ql1.mongodb.net/workout-db?retryWrites=true&w=majority" || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });