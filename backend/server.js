const express = require("express");
const dotenv = require("dotenv").config(); // Ensure dotenv is called as a function
const port = process.env.PORT || 5000;
const path = require("path");
const cors = require("cors");
const app = express();

// Apply CORS policy for all requests
app.use(
  cors({
    origin: "*", // This allows all domains. Adjust as needed for production.
  })
);

// Define routes after setting CORS policy
app.use("/api/testing", require("./Routes/TestRoutes"));

// Production settings
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "dist", "index.html")
    )
  );
} else {
  app.get("/", (req, res) =>
    res.send(
      `Please set to production, you are currently in ${process.env.NODE_ENV}`
    )
  );
}

app.listen(port, () => console.log(`Server running on port ${port}`));

//Old code
// console.log("hello");

// const express = require("express");
// const dotenv = require("dotenv").config;
// const port = process.env.PORT || 5000;
// const path = require("path");
// const cors = require("cors");
// const app = express();

// app.use("/api/testing", require("./Routes/TestRoutes"));

// app.use(
//   cors({
//     origin: "*",
//   })
// );

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));

//   app.get("*", (req, res) =>
//     res.sendFile(
//       path.resolve(__dirname, "../", "frontend", "dist", "index.html")
//     )
//   );
// } else {
//   app.get("/", (req, res) =>
//     res.send(
//       `Please set to production, you are currently in ${process.env.NODE_ENV}`
//     )
//   );
// }

// app.listen(port, () => console.log(port));
