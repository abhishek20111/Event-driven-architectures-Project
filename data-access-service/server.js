const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');
const ordersRoute = require('./routes/Order');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const app = express();
const PORT = process.env.PORT || 5000;

// Establish a single MongoDB connection
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api', ordersRoute);

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true // Enables GraphiQL for easy testing
}));


app.get('/', (req, res) => {
    res.send('Data Access Service is Running...');
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
