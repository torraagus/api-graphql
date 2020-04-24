import express from "express";
import graphqlHTTP from "express-graphql";

import { connect_mongodb } from "./database";
import schema from "./schema/schema";

const app = express();
connect_mongodb();
//connect_firebase();

// settings
app.set("PORT", process.env.PORT);

// middlewares

// routes
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
    rootValue: {},
    context: {}
  })
);

app.listen(app.get("PORT"), () =>
  console.log(`Server listening on port ${app.get("PORT")}`)
);
