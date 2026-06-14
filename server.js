const express = require("express");
const PORT = 3000;
const app = express();

app.get("/api/vitals", (req, res) => {
  res.json({
    status: "UP",
    timestamp: new Date(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
  });
});

app.listen(PORT, () => console.log(`App is running on port: ${PORT}`));
