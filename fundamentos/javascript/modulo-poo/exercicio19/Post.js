const Comment = require("./Comment");

class Post {
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.comments = [];
    this.createdAt = new Date();
  }

  addComment(comment) {
    this.comments.push(new Comment(comment));
  }
}

module.exports = Post;
