const Post = require("./Post");

class Author {
  constructor(name) {
    this.name = name;
    this.posts = [];
  }

  createPost(title, content) {
    const newPost = new Post(title, content);
    this.posts.push(newPost);
    return newPost;
  }
}

module.exports = Author;
