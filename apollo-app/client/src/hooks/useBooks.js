import { gql, useMutation } from "@apollo/client";

const ADD_BOOK_MUTATION = gql`
  mutation AddBook($newBook: NewBook!) {
    addBook(newBook: $newBook) {
      id
    }
  }
`;


export const useBooks = (refetchQueries = []) => {
  const [ mutateAddBook ] = useMutation(ADD_BOOK_MUTATION);
  const addBook = newBook => {
    mutateAddBook({ variables: { newBook }, refetchQueries });
  };
  return { addBook };
};