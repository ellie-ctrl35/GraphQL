const express = require("express");
require('dotenv').config();
const { graphqlHTTP }= require('express-graphql')
const port = process.env.PORT || 5000;
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const connectDB = require('./db')
const schema = require('./Schema/schema');

connectDB();
app.use(cors())
app.use('/graphql',graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(port, console.log(`Server running on port ${port}`));