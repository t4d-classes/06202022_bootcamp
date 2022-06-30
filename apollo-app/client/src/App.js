import { useQuery, gql } from "@apollo/client";
import { useState } from 'react';

import { BookTable } from "./components/BookTable";
import { DropDownList2 } from "./components/DropDownList2";

const APP_QUERY = gql`
  query App($colorId: ID) {
    color(colorId: $colorId) {
      id
      name
    }
    books {
      id title price quantity
    }
    authors {
      id firstName lastName 
    }
  }
`;

function App() {

  const [ colorId, setColorId ] = useState(1);

  const { loading, error, data } = useQuery(
    APP_QUERY, { variables: { colorId } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const authorOptions = data.authors.map(author => {
    return {
      value: author.id,
      text: `${author.lastName}, ${author.firstName}`
    };
  });

  return (
    <>
      <div>
        Color: {data.color.name}
        <button type="button" onClick={() => setColorId(colorId-1)}>&lt;</button>
        <button type="button" onClick={() => setColorId(colorId+1)}>&gt;</button>
      </div>
      <DropDownList2 options={authorOptions}
        title="Select Author" name="authorId"
        value={0} onChange={() => undefined} />
      <BookTable books={data.books} />
    </>
  );
}

export default App;
