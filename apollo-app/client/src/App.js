import { useQuery, gql } from "@apollo/client";
import { useState } from 'react';

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

function App() {

  const [ colorId, setColorId ] = useState(1);
  const [ authorId, setAuthorId ] = useState('-1');

  const { loading, error, data } = useQuery(
    APP_QUERY, { variables: { colorId, authorId } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const authorOptions = data.authors.map(author => {
    return {
      value: author.id,
      text: `${author.lastName}, ${author.firstName}`
    };
  });
  authorOptions.unshift({ value: '-1', text: "Select One..." });

  return (
    <>
      <div>
        Color: {data.color.name}
        <button type="button" onClick={() => setColorId(colorId-1)}>&lt;</button>
        <button type="button" onClick={() => setColorId(colorId+1)}>&gt;</button>
      </div>
      <DropDownList2 options={authorOptions}
        title="Select Author" name="authorId"
        value={authorId} onChange={e => setAuthorId(e.target.value)} />
      <BookTable books={data.books} />
    </>
  );
}

export default App;
