class Product {
  constructor(product) {
    try {
      this.id = product.id
      this.name = product.name
      this.category = product.category
      this.url = product.url
      this.imageName = product.imageName
    } catch (e) {
      console.error
    }
  }
}

export default Product
