const { createClient } = require("@supabase/supabase-js")
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const client = createClient(supabaseUrl, supabaseKey)

class PostService {
  async getAll() {
    const posts = await client.from("Post").select()
    return posts.data
  }

  async getById(id) {
    const post = await client.from("Post").select().eq("id", id)
    return post.data
  }

  async create(post) {
    const createdPost = await client.from("Post").insert(post)
    return createdPost.data
  }

  async update(post) {
    const updatedPost = await client.from("Post").update(post)
    return updatedPost.data
  }
}

exports.PostService = PostService
