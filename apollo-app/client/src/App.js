import { useQuery, gql } from "@apollo/client";

import { BookTable } from "./components/BookTable";
import { DropDownList2 } from "./components/DropDownList2";

const APP_QUERY = gql`
  query App {
    books {
      id title price quantity
    }
    authors {
      id firstName lastName 
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(APP_QUERY);

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
      <DropDownList2 options={authorOptions}
        title="Select Author" name="authorId"
        value={0} onChange={() => undefined} />
      <BookTable books={data.books} />
    </>
  );
}

export default App;
