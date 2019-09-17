/**
 * GraphQL API Example (https://graphqlstart.com)
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

import { GraphQLSchema, GraphQLObjectType } from "graphql";
import * as queries from "./queries";

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      ...queries
    }
  })
});
