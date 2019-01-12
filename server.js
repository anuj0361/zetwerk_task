const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const employee = require("./routes/api/employee");
const db = require("./config/keys").mongoURI;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(db)
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use("/api/employee", employee);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server is running"));
