class BlogModel {
  constructor(blog) {
    try {
      this.id = blog.metaData.id
      this.title = blog.title
      this.description = blog.metaData.description
      this.content = blog.contentAsHTML
      this.author = blog.metaData.author
      this.date = blog.metaData.date
      this.coverImage = blog.metaData.coverImage
    } catch (e) {
      console.error(e)
    }
  }
}

export default BlogModel
