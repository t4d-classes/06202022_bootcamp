import { useQuery, gql } from "@apollo/client";

const APP_QUERY = gql`
  query App {
    message
    age
    color(colorId: 2) {
      id
      name
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(APP_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <p>{data.message}</p>
      <p>{data.age}</p>
      <p>{data.color.name}</p>
    </div>
  );
}

export default App;
