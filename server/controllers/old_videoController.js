import videoService from '../_services/api/videoService.js'
import BaseController from './_baseController.js'

class VideoController extends BaseController {
  constructor() {
    super(videoService) // Pass the video service to the base class
  }

  async getAllIncludingInactiveAsObjects(req, res) {
    try {
      const data = await this.service.getAll(false, true)
      if (data) {
        res.json(data)
      }
    } catch (error) {
      this.handleError(res, error, 'Error fetching data')
    }
  }

  async getAllIncludingInactiveAsList(req, res) {
    try {
      const data = await this.service.getAll(true, true)
      if (data) {
        res.json(data)
      }
    } catch (error) {
      this.handleError(res, error, 'Error fetching data')
    }
  }

  async getAllAsList(req, res) {
    try {
      const data = await this.service.getAll(true, false)
      if (data) {
        res.json(data)
      }
    } catch (error) {
      this.handleError(res, error, 'Error fetching data')
    }
  }
}

const controller = new VideoController()
export default controller
