import { useQuery, gql, useMutation } from "@apollo/client";
import { useCallback, useState } from 'react';

import { Authors } from "./models/Authors";
import { useBooks } from "./hooks/useBooks";
import { useForm } from './hooks/useForm';
import { BookTable } from "./components/BookTable";
import { TextValueDropDown } from "./components/TextValueDropDown";
import { BookForm } from "./components/BookForm";

const APP_QUERY = gql`
  query App($colorId: ID, $authorId: ID) {
    color(colorId: $colorId) {
      id
      name
    }
    books(authorId: $authorId) {
      id title price quantity author { firstName lastName }
    }
    authors {
      id firstName lastName 
    }
  }
`;

const ADD_COLOR_MUTATION = gql`
  mutation AddColor($newColor: NewColor!) {
    addColor(newColor: $newColor) {
      id
    }
  }
`;


function App() {

  const [ colorForm, change ] = useForm({ name: '', hexcode: '' });

  const [ colorId, setColorId ] = useState(1);
  const [ authorId, setAuthorId ] = useState('-1');

  const getRefetchQueries = useCallback(() =>
    ([ {
      query: APP_QUERY,
      variables: { colorId, authorId },
    } ]), [colorId, authorId]);

  const { loading, error, data } = useQuery(
    APP_QUERY, {
      variables: { colorId, authorId },
      fetchPolicy: 'network-only',
    });

  const [ mutateAddColor ] = useMutation(ADD_COLOR_MUTATION);

  const { addBook } = useBooks(getRefetchQueries())


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const authors = new Authors(data.authors);

  const authorTextValueList = authors.toLastNameFirstNameTextValueList();
  authorTextValueList.unshift({ value: '-1', text: "Select One..." });

  const addColor = () => {

    return mutateAddColor({
      variables: {
        newColor: { ...colorForm },
      },
      refetchQueries: getRefetchQueries(),
    });

  };

  return (
    <>
      <div>
        Color: {data.color.name}
        <button type="button" onClick={() => setColorId(colorId-1)}>&lt;</button>
        <button type="button" onClick={() => setColorId(colorId+1)}>&gt;</button>
      </div>
      <form>
        <label>
          Name: <input type="text" name="name"
            value={colorForm.name} onChange={change} />
        </label>
        <label>
          Hexcode: <input type="text" name="hexcode"
            value={colorForm.hexcode} onChange={change} />
        </label>
        <button type="button" onClick={addColor}>Add Color</button>
      </form>
      <TextValueDropDown options={authorTextValueList}
        title="Select Author" name="authorId"
        value={authorId} onChange={e => setAuthorId(e.target.value)} />
      <BookTable books={data.books} />
      <BookForm buttonText="Add Book"
        onSubmitBook={addBook}
        authorOptions={authorTextValueList} />
    </>
  );
}

export default App;
