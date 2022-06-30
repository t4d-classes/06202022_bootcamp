import fetch from 'node-fetch';

export const resolvers = {
  Query: {
    message() {
      return 'Welcome to React and Apollo!';
    },
    age() {
      return 23;
    },
    interestRate() {
      return 3.5;
    },
    async color(_, args) {
      const res = await fetch('http://localhost:5050/colors/' + args.colorId);
      return res.json();
    },
    async colors() {
      const res = await fetch('http://localhost:5050/colors');
      return res.json();
    },
    async author() {
      const res = await fetch('http://localhost:5050/authors/1');
      return res.json();
    },
    async book(_, args) {
      const res = await fetch('http://localhost:5050/books?isbn=' + args.isbn);
      const books = await res.json();
      return books.length === 1 ? books[0] : null;
    },
    async books(_, args) {

      const authorId = parseInt(args.authorId);

      let res;
      if (authorId > 0) {
        res = await fetch('http://localhost:5050/books?authorId=' + authorId);
      } else {
        res = await fetch('http://localhost:5050/books')
      }
      return res.json();

    },
    async authors() {
      const res = await fetch('http://localhost:5050/authors');
      return res.json();
    },
  },
  Mutation: {
    addColor(_, args) {
      return fetch('http://localhost:5050/colors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(args.newColor)
      }).then(res => res.json());
    }
  },
  Book: {
    author: async (book) => {
      const res = await fetch('http://localhost:5050/authors/' + book.authorId);
      return res.json();
    }
  }
};
