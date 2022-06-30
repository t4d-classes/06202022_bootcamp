export const BookTable = ({ books }) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => <tr key={book.id}>
          <td>{book.title}</td>
          <td>{book.author.lastName}, {book.author.firstName}</td>
          <td>{book.price}</td>
          <td>{book.quantity}</td>
        </tr>)}
      </tbody>
    </table>
  )
};