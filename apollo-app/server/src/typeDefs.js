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
    authors: [Author]
    books(authorId: ID): [Book]
  }

  type Mutation {
    addColor(newColor: NewColor!): Color
    addAuthor(newAuthor: NewAuthor!): Author
    addBook(newBook: NewBook!): Book
    deleteBook(bookId: ID!): ID
  }

  type Color {
    id: ID
    name: String
    hexcode: String
  }

  input NewColor {
    name: String
    hexcode: String
  }

  type Author {
    id: ID
    firstName: String
    lastName: String
    phoneNumber: String
  }

  input NewAuthor {
    firstName: String
    lastName: String
    phoneNumber: String
  }

  type Book {
    id: ID
    isbn: String
    title: String
    authorId: ID
    author: Author
    category: String
    price: Float
    quantity: Int
  }

  input NewBook {
    isbn: String
    title: String
    authorId: ID
    category: String
    price: Float
    quantity: Int
  }

`;
