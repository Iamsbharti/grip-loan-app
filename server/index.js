const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const Router = require("./router/router");
const bodyParser = require("body-parser");

const connectMysql = require("./mysqldb");

// env vars intialisation
dotenv.config();

const connection = connectMysql();

// used for calling app using http server
const app = express();

// middlewares
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authToken, access-control-allow-origin"
  );
  next();
});

// set api router
let BASE_URL = process.env.API_VERSION;
app.use(BASE_URL, Router);

// heroku/ production fe-render
if (process.env.NODE_ENV === "production") {
  // api home
  app.get("/api", function (request, response) {
    response.sendFile(path.resolve(__dirname, "public", "index.html"));
  });

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, "../client/build")));

  // All remaining requests return the React app, so that it can handle routing.
  app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}
// serve local /api
app.get("/api", function (request, response) {
  response.sendFile(path.resolve(__dirname, "public", "index.html"));
});
app.get("/api-doc", function (request, response) {
  response.sendFile(path.resolve(__dirname, "public", "index.html"));
});

// init http server
let PORT = process.env.PORT;
app.listen(PORT, () => console.log(`loan server-app running ${PORT}`));
