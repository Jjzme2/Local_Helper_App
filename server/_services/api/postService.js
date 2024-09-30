import fileUtil from '../utilities/fileUtilities.js'
import markdownUtil from '../utilities/markdownUtilities.js'
import MarkdownUtilities from '../utilities/markdownUtilities.js'

const postDirectory = 'server/_assets/posts'

class PostService {
  /**
   * Validate and process the slug to create a valid path to the markdown file.
   * @param {string} slug - The slug to validate.
   * @returns {string} - A valid file path.
   * @throws {Error} - If the file does not exist or the slug is invalid.
   */
  validateSlug(slug) {
    if (!slug || slug.trim() === '') {
      throw new Error('Invalid slug: File name is required.')
    }

    // Ensure slug ends with '.md' extension
    if (!slug.endsWith('.md')) {
      slug = `${slug}.md`
    }

    // Prepend the post directory if not already included
    if (!slug.startsWith(postDirectory)) {
      slug = `${postDirectory}/${slug}`
    }

    // Check if the file exists
    if (!fileUtil.fileExists(slug)) {
      throw new Error(
        `Post not found: The file "${slug}" does not exist in the directory "${postDirectory}".`
      )
    }

    return slug
  }

  /**
   * Create a post object from metadata and content.
   * @param {object} metaData - Post metadata.
   * @param {string} content - Markdown content.
   * @param {object|null} elements - Extracted elements from markdown.
   * @returns {object} - A post object.
   */
  createPost(
    {
      id = null,
      title = 'Untitled',
      description = 'No description provided.',
      categories = 'Uncategorized',
      author = 'Anonymous',
      date = null,
      coverImage = null,
      tags = '',
      active = 0
    },
    content = '',
    elements = null
  ) {
    return {
      id,
      title,
      description,
      categories: categories.split(','), // Split categories by commas
      content: markdownUtil.markdownToHTML(content),
      elements,
      author,
      date,
      coverImage, // Optional cover image (future: add default)
      tags: tags.split(','), // Split tags by commas
      active
    }
  }

  /**
   * Fetch all posts, optionally as a list of filenames or full post objects.
   * @param {boolean} asList - If true, returns only filenames.
   * @returns {Promise<array>} - An array of post filenames or post objects.
   */
  async getAll(asList = false) {
    try {
      const files = await fileUtil.getFilesInDirectory(postDirectory)

      if (asList) {
        return files
      }

      const posts = await Promise.all(files.map(async (file) => await this.getByFileName(file)))
      return posts
    } catch (error) {
      console.error('Error fetching posts:', error.message)
      throw error
    }
  }

  /**
   * Fetch a post by its filename (slug).
   * @param {string} slug - The filename (slug) of the post.
   * @returns {Promise<object>} - A post object.
   */
  async getByFileName(slug) {
    try {
      // Validate and generate the correct file path
      slug = this.validateSlug(slug)

      // Read file contents
      const fileData = await fileUtil.readFile(slug)

      // Extract metadata, content, and markdown elements
      const metaData = MarkdownUtilities.getMetaDataFromMarkdown(fileData)
      const content = MarkdownUtilities.markdownToText(fileData)
      const elements = MarkdownUtilities.extractElementsFromMarkdown(fileData)

      // Create and return the post object
      return this.createPost(metaData, content, elements)
    } catch (error) {
      console.error(`Error fetching post by slug "${slug}":`, error.message)
      throw error
    }
  }
}

export default new PostService()
