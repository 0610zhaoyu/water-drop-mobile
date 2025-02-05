/* eslint-disable import/no-extraneous-dependencies */
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { faker } from '@faker-js/faker';

const typeDefs = `#graphql
    type UserType {
        id: String!
        name: String!
        desc: String!
    }

    type Query {
        """查询用户"""
        find(id: String!): UserType!
    }

    type Mutation {
        create(params: UserInput!): Boolean!
    }

    input UserInput {
        name: String!
        desc: String!
    }
`;

const resolvers = {
  UserType: {
    name: () => 'zzzz111',
  },
  Mutation: {
    create: () => true,
  },

};

const mocks = {
  Int: () => 6,
  Float: () => 22.1,
  String: () => faker.name.jobType(),
  Boolean: () => false,
};

const server = new ApolloServer({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    mocks,
    preserveResolvers: true,
  }),
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀 Server listening at: ${url}`);
