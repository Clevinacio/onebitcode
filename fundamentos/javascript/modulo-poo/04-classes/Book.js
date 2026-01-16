class Book {
  constructor(title) {
    this.title = title;
    this.published = false;
  }

  publish() {
    this.published = true;
  }
}

const hobbit = new Book("O Hobbit");
hobbit.publish();
console.log(hobbit);
