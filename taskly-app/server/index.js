// index.js
const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');

const schema = require('./graphql/schema'); // Define your GraphQL schema

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/calendar', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define your GraphQL endpoint
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
