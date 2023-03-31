console.log("hello");
const express = require("express");
const dotenv = require("dotenv").config;
const port = process.env.PORT || 5000;
const path = require("path");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) =>
    res.send(
      `Please set to production, you are currently in ${process.env.NODE_ENV}`
    )
  );
}

app.listen(port, () => console.log(port));
