import express from "express";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
// import axios from "axios";
import { TODOS } from "./testdata/todos";
import { USERS } from "./testdata/user";

const startServer = async () => {
  dotenv.config();
  const app = express();
  app.use(express.json());
  app.use(
    cors({
      origin: process.env.ORIGIN,
    })
  );

  const server = new ApolloServer({
    typeDefs: `
    # User Schema
    type User {
        id: ID!
        name: String!
        username: String!
        phone: String!
        website: String!
        email: String!
    }
    # Todo Schema
    type Todo {
        id: ID!
        title: String!
        completed: Boolean
        user: User
    }
    # To fetch the list of todos
    type Query {
        todos: [Todo]
        users: [User]
        user(id: ID!): User
    }
    `,
    resolvers: {
      Todo: {
        // user: async (todo) =>
        //   (
        //     await axios.get(
        //       `https://jsonplaceholder.typicode.com/users/${todo.id}`
        //     )
        //   ).data,
        user: async (todo) => USERS.find((user) => user.id === todo.id),
      },

      Query: {
        //! Logic to fetch the data
        // todos: async () =>
        //   (await axios.get("https://jsonplaceholder.typicode.com/todos")).data,
        todos: () => TODOS,
        // getUsers: async () =>
        //   (await axios.get("https://jsonplaceholder.typicode.com/users")).data,
        users: () => USERS,
        // getUser: async (parent, { id }) =>
        //   (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`))
        //     .data,
        user: async (parent, { id }) => USERS.find((user) => user.id === id),
      },
    },
  });

  await server.start();
  app.use("/graphql", expressMiddleware(server));

  app.listen(process.env.PORT, () =>
    console.log(`Server is listening at http://localhost:${process.env.PORT}`)
  );
};

startServer();
