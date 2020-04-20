import express from "express";
import graphqlHTTP from "express-graphql";

import schema from "./schema/schema";
import { connect } from "./database";
import { users } from './data/users';


const app = express();
//connect();

// settings
app.set("PORT", 3000);

// middlewares

// routes
app.get("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
        users: users
    }
  })
);

app.listen(app.get("PORT"), () =>
  console.log(`Server listening on port ${app.get("PORT")}`)
);
