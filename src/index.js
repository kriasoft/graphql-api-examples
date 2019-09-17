/**
 * GraphQL API Example (https://graphqlstart.com)
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

import express from "express";
import graphql from "express-graphql";
import schema from "./schema";
import { Context } from "./context";

const app = express();
const port = process.env.PORT || 8080;

app.use(
  "/",
  graphql(req => ({
    schema,
    context: new Context(req),
    graphiql: process.env.NODE_ENV !== "production"
  }))
);

app.listen(port, () => {
  console.log(`GraphQL API listening on http://localhost:${port}/`);
});
