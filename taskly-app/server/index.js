//main dependencies::::    npm install express express-graphql graphql mongoose cors --save  ///dev:  npm i -D nodemon dotenv

const express = require("express");
require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();

app.listen(
  port,
  console.log(`Server running on port http://localhost:${port}`)
);
//npm run dev
