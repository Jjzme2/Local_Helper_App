class ServicedLocation {
	constructor(location) {
		try {
			this.townName = location.townName
			this.state = location.state
			this.zipCode = location.zipCode
			this.latitude = location.latitude
			this.longitude = location.longitude
			this.surcharge = location.surcharge
		} catch (e) {
			console.error(e)
		}
	}
}

export default ServicedLocation
