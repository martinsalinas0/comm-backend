const express = require("express");
const jwt = require("jsonwebtoken");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load('./api=yaml-file.yaml')
require("dotenv").config();
const router = express.Router();

const app = express();
const queryString = require("querystring");

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

app.use(express.json());

//eror handling
app.use((err, red, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!!");
});

//swagger
app.use("api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//starting the server
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server connected. \nServer is now running on port: ${PORT}`);
});

server.on("error", (err) => {
  console.error(`Error starting the server: ${err.message}`);
});

//middleware for authenticate token.js
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  if (!token) return res.sendStatus(403);

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}


module.exports = authenticateToken; 

//ROUTE IMPORTS GO HERE
const productsRoutes = require('../routes/products.route')

//ROUTES GO HERE 
app.use('/api', productsRoutes); 

module.exports = app; 