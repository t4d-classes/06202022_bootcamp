import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    message: String
    age: Int
    interestRate: Float
    color(colorId: ID): Color
    colors: [Color]
    author: Author
    book(isbn: String): Book
  }

  type Color {
    id: ID
    name: String
    hexcode: String
  }

  type Author {
    id: ID
    firstName: String
    lastName: String
    phoneNumber: String
  }

  type Book {
    id: ID
    isbn: String
    title: String
    authorId: ID
    category: String
    price: Float
    quantity: Int
  }
`;
