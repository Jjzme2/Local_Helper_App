class PostModel {
  constructor(post) {
    try {
      this.id = post.id
      this.title = post.title
      this.description = post.description
      this.categories = post.categories
      this.content = post.content
      this.elements = post.elements
      this.author = post.author
      this.date = post.date
      this.coverImage = post.coverImage
      this.tags = post.tags
      this.active = post.active
    } catch (e) {
      console.error(e)
    }
  }
}

export default PostModel
