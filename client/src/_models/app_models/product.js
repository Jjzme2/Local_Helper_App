class Product {
  constructor(product) {
    try {
      this.id = product.id
      this.name = product.name
      this.category = product.category
      this.url = product.url
      this.linkToImage = product.linkToImage
    } catch (e) {
      console.error
    }
  }
}

export default Product
