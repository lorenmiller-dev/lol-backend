const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
const summonerRoutes = require("./routes/summonerRoutes");

app.use("/", summonerRoutes);

// TODO: error handling

// Start server
const port = 3003;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
