const { randomBytes } = require("crypto")

class PostServiceMock {
  constructor() {
    this.posts = {}
  }
  async getAll() {
    return Object.values(this.posts)
  }

  async getById(id) {
    if (!this.posts[id]) throw new Error("Post not found")
    return this.posts[id]
  }

  async create(post) {
    const id = randomBytes(4).toString("hex")
    const { title, description, author } = post
    this.posts[id] = {
      id,
      author,
      title,
      description,
    }
    return this.posts[id]
  }

  async update(post) {
    const { id, title, author, description } = post
    if (!this.posts[id]) throw new Error("Post not found")
    this.posts[id] = {
      id,
      title,
      author,
      description,
    }
    return this.posts[id]
  }
  async delete(id) {
    if (!this.posts[id]) throw new Error("Post not found")
    delete this.posts[id]
  }
}

exports.PostServiceMock = PostServiceMock
