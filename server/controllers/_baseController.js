class BaseController {
  constructor(service) {
    this.service = service
  }

  async getAll(req, res) {
    try {
      const data = await this.service.getAll()
      if (data) {
        res.json(data)
      }
    } catch (error) {
      this.handleError(res, error, 'Error fetching data')
    }
  }

  async getById(req, res) {
    try {
      const id = req.params.id
      const data = await this.service.getById(id)
      if (data) {
        res.json(data)
      } else {
        res.status(404).json({ message: 'Not found' })
      }
    } catch (error) {
      this.handleError(res, error)
    }
  }

  handleError(res, error, additionalMessage) {
    res.status(500).json({
      message: error.message || 'An error occurred',
      additionalInformation: additionalMessage
    })
  }
}

export default BaseController
