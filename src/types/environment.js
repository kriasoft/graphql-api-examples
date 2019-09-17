/**
 * GraphQL API Example (https://graphqlstart.com)
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

import { GraphQLObjectType, GraphQLString, GraphQLFloat } from "graphql";

export const EnvironmentType = new GraphQLObjectType({
  name: "Environment",

  fields: {
    arch: {
      type: GraphQLString,
      resolve: () => process.arch
    },

    platform: {
      type: GraphQLString,
      resolve: () => process.platform
    },

    uptime: {
      type: GraphQLFloat,
      resolve: () => process.uptime()
    },

    hostname: {
      type: GraphQLString,
      resolve(self, args, ctx) {
        return ctx.hostname;
      }
    }
  }
});
