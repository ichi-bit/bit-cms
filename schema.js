const { gql } = require('apollo-server-express');

// sample collecltion
const books = [
  {
    title: 'book a',
    author: 'author a',
  },
  {
    title: 'book b',
    author: 'author b',
  }
];

const typeDefs = gql`
  # comment
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
};

module.exports.typeDefs = typeDefs;
module.exports.resolvers = resolvers;
