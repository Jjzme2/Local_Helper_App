const categories = {
  general: 'General Services',
  recurring: 'Recurring Services',
  seasonal: 'Seasonal Services',
  specialty: 'Specialty Services',
  other: 'Other Services'
}

const services = [
  {
    serviceName: 'Mulch Installation & Bed Edging',
    description:
      'Enhance your garden beds with our mulch installation and bed edging services. We help retain moisture and improve the overall aesthetics of your landscape, ensuring your outdoor spaces look their best.',
    category: categories.seasonal,
    price: 125,
    image: 'mulch.png',
    notes: 'Pricing is per cubic yard of mulch installed.'
  },
  {
    serviceName: 'Seasonal Clean-Up',
    description:
      'Prepare your property for the changing seasons with our comprehensive seasonal clean-up services. Our team will remove leaves, debris, and other unwanted materials from your outdoor spaces, ensuring a clean and tidy appearance.',
    category: categories.seasonal,
    price: 100,
    image: 'clean_up.png',
    notes: 'Includes lawn mowing, shovel snow, and other seasonal tasks.'
  },
  {
    serviceName: 'Grocery Delivery - Recurring',
    description:
      'Enjoy the convenience of our grocery delivery services. We shop for your groceries and deliver them to your doorstep on a recurring basis, saving you time and hassle. Accept deliveries comfortably, knowing that your groceries are in good hands.',
    category: categories.recurring,
    price: 100,
    image: 'grocery_recurring.png',
    notes: ''
  },
  {
    serviceName: 'Grocery Delivery - One-Time',
    description:
      "Need groceries but don't have the time to shop? Let us handle it! Our team will shop for your groceries and deliver them to your doorstep, ensuring you have everything you need without the hassle of going to the store.",
    category: categories.general,
    price: 25,
    image: 'grocery.png',
    notes: 'Prices may vary based on the total of the order.'
  },
  {
    serviceName: 'Interior Car Detailing',
    description:
      'Keep your vehicle spotless with our interior car detailing services. Our team thoroughly cleans your vehicle inside and out, providing a fresh and tidy environment.',
    category: categories.general,
    price: 50,
    image: 'car_detailing_interior.png',
    notes: ''
  },
  {
    serviceName: 'Exterior Car Detailing',
    description:
      "Maintain the exterior of your vehicle with our professional detailing services. We clean, polish, and protect your car's exterior, ensuring a shiny and well-maintained appearance.",
    category: categories.general,
    price: 50,
    image: 'car_detailing_exterior.png',
    notes: ''
  }
]

export { services, categories }
