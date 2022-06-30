import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    message: String
    age: Int
    interestRate: Float
    color: Color
    colors: [Color]
  }

  type Color {
    id: ID
    name: String
    hexcode: String
  }
`;
