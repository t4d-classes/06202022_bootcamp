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
    async color() {
      const res = await fetch('http://localhost:5050/colors/1');
      return res.json();
    },
    async colors() {
      const res = await fetch('http://localhost:5050/colors');
      return res.json();
    }
  },
};
