import productService from '../_services/api/printifyProducts.js'
import BaseController from './_baseController.js'

class ProductController extends BaseController {
  constructor() {
    super(productService) // Pass the product service to the base class
  }

  async getByVisibility(req, res) {
    const visibility = req.query.visibility
    try {
      const products = await this.service.getByVisibility(visibility, 3)
      res.json(products)
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

const productController = new ProductController()
export default productController
