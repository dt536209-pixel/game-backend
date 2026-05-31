const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Backend Running"
  });
});

app.get("/health", (req, res) => {
  res.json({
    server: "online",
    time: new Date()
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
