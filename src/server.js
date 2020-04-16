import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello world'
    });
});

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(3000, () => console.log('Server listening on port 3000'));