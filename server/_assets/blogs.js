// Get all the files from the directory
//   async getBlogs() {
//     const files = await fs.readdir(this.blogsDirectory);
//     const blogs = files.map(async (file) => {
//       const markdownWithMetadata = await fs.readFile(
//         path.join(this.blogsDirectory, file),
//         'utf-8'
//       );

const blogs = [
  {
    id: 1,
    title: 'First Blog Post',
    slug: 'first-blog-post'
  }
]

export { blogs }
