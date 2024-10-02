import PostService from '../_services/api/postService.js'
import BaseController from './_baseController.js'

class PostController extends BaseController {
  constructor() {
    super(PostService)
  }

  async getByFileName(req, res) {
    try {
      const slug = req.params.slug
      const post = await this.service.getByFileName(slug)
      if (!post) {
        res.status(404).json({ message: 'Not found' })
      }
      //   console.log(post)
      res.json(post)
    } catch (error) {
      this.handleError(res, error)
    }
  }
}

const postController = new PostController()
export default postController
