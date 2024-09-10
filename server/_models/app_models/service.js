class Service {
  constructor(service) {
    try {
      this.id = service.id
      this.serviceName = service.serviceName
      this.description = service.description
      this.category = service.category
      this.price = service.price
      this.image = service.image
      this.notes = service.notes
    } catch (e) {
      console.error(e)
    }
  }
}

export default Service
