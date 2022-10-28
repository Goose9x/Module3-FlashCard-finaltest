const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const cors = require("cors");
const morgan = require("morgan");
// const {
//   requireAuth,
//   notRequireAuth,
// } = require("./middlewares/auth.middlewares");
const cookieParser = require("cookie-parser");
//import route
// let userRoutes = require("./routes/users.routes");
// let authRoutes = require("./routes/auth.routes");
// let blogRoutes = require("./routes/blogs.routes");

// Set up view engine
app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);

// use third-party middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(cookieParser("i love feifei"));

// setup route
app.get("/", (req, res) => {
  res.send("Hello world");
});

// get all users
app.use("/users", userRoutes);

// Listen on port
app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});
