const Author = require("./Author");

const john = new Author("John Doe");

const firstPost = john.createPost(
  "Primeiro Post",
  "Olá, galerinha. Esse é meu primeiro post"
);

firstPost.addComment("que post cansado. Melhore");

console.log(john);
console.log(firstPost);
