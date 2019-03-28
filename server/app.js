const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb://vine:test123@ds155845.mlab.com:55845/gql-learn');
mongoose.connection.once('open', () => {
    console.log('connected to database');
})

app.use('/graphql', graphqlHTTP({
   schema,
   graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening on requests on port 4000');
});