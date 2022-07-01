import { useQuery, gql, useMutation } from "@apollo/client";
import { useState } from 'react';

import { useForm } from './hooks/useForm';
import { BookTable } from "./components/BookTable";
import { DropDownList2 } from "./components/DropDownList2";

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

  const { loading, error, data } = useQuery(
    APP_QUERY, {
      variables: { colorId, authorId },
      fetchPolicy: 'network-only',
    });

  const [ mutateAddColor ] = useMutation(ADD_COLOR_MUTATION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const authorOptions = data.authors.map(author => {
    return {
      value: author.id,
      text: `${author.lastName}, ${author.firstName}`
    };
  });
  authorOptions.unshift({ value: '-1', text: "Select One..." });

  const addColor = () => {

    return mutateAddColor({
      variables: {
        newColor: { ...colorForm },
      },
      refetchQueries: [ { query: APP_QUERY } ],
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
      <DropDownList2 options={authorOptions}
        title="Select Author" name="authorId"
        value={authorId} onChange={e => setAuthorId(e.target.value)} />
      <BookTable books={data.books} />
    </>
  );
}

export default App;
