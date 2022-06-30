# Exercise 1

1. Inspect the `db.json` file. You will see a list of books and authors. Create a GraphQL Object Type for a book and for an author.

2. Wire up a field on the `Query` type to return a single book and a single author. In the resolver, call the REST API to retrieve any book/author you would like and return it.

3. Query the GraphQL Server from the GraphQL Client tool. In you query request, specify the message field, the author field, and the book field. On the book field only query the id, the title, and price. For the author, query all of the fields.

4. Ensure it works!