const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
  }

  input InputBook {
    bookId: String
    authors: [String]
    title: String
    description: String
  }

  type Query {
    me: User
  }
`;

module.exports = typeDefs;