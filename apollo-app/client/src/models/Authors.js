


export class Authors {

  #authors = [];

  constructor(authors) {
    this.#authors = authors;
  }

  // toLastNameFirstNameMap() {
  //   return new Map(this.#authors.map(author =>
  //       ([ author.id, `${author.lastName}, ${author.firstName}` ])));
  // }

  toLastNameFirstNameTextValueList() {
    return this.#authors.map(author => {
      return {
        value: author.id,
        text: `${author.lastName}, ${author.firstName}`
      };
    });    
  }

}