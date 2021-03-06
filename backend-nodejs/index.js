const express = require("express");
const router = require("./src/routes");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./config");

mongoose.connect(config.connectionString, {
  useNewUrlParser: true
});

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", router);

app.use(express.static(__dirname + "../frontend-reactjs"));

// PORT
const port = 3000;
const host = "0.0.0.0";

app.listen(port, host, () => {
  console.log(`Listening on port ${port}...`);
});

app.get("/", (req, res) => {
  console.log("Working ..");
});
