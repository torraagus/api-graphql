import express from "express";
import graphqlHTTP from "express-graphql";

import { connect_firebase, connect_mongodb } from "./database";
import schema from "./schema/schema";

const app = express();
connect_mongodb();
connect_firebase();

// settings
app.set("PORT", 3000);

// middlewares

// routes
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
    rootValue: {},
    context: {
      db: process.env.current_db,
      collections: {
        users: process.env.current_db == 'memory' ? require('./data/users') : 'clientes'
      }
    },
  })
);

app.listen(app.get("PORT"), () =>
  console.log(`Server listening on port ${app.get("PORT")}`)
);
