const categories = [
  {
    id: '1',
    categoryName: 'General',
    description: 'General services that can be requested at any time.',
    value: 'general'
  },
  {
    id: '2',
    categoryName: 'Recurring',
    description: 'Services that are scheduled on a recurring basis.',
    value: 'recurring'
  },
  {
    id: '3',
    categoryName: 'Seasonal',
    description: 'Services that are performed seasonally.',
    value: 'seasonal'
  },
  {
    id: '4',
    categoryName: 'Specialty',
    description: 'Specialized services for unique needs.',
    value: 'specialty'
  },
  {
    id: '5',
    categoryName: 'Other',
    description: 'Other services that do not fit into the other categories.',
    value: 'other'
  }
]

const services = [
  {
    id: '0119eb51-f771-4b9e-b021-6a447150a677',
    serviceName: 'Mulch Installation & Bed Edging',
    description:
      'Enhance your garden beds with our mulch installation and bed edging services. We help retain moisture and improve the overall aesthetics of your landscape, ensuring your outdoor spaces look their best.',
    category: categories.seasonal,
    price: 125,
    image: 'mulch.png',
    notes: 'Pricing is per cubic yard of mulch installed.'
  },
  {
    id: 'b21218ea-bc7b-4264-be31-289682494525',
    serviceName: 'Seasonal Clean-Up',
    description:
      'Prepare your property for the changing seasons with our comprehensive seasonal clean-up services. Our team will remove leaves, debris, and other unwanted materials from your outdoor spaces, ensuring a clean and tidy appearance.',
    category: categories.seasonal,
    price: 100,
    image: 'clean_up.png',
    notes: 'Includes lawn mowing, shovel snow, and other seasonal tasks.'
  },
  {
    id: '5c3216f3-3e86-4770-91e7-05664d618fba',
    serviceName: 'Grocery Delivery - Recurring',
    description:
      'Enjoy the convenience of our grocery delivery services. We shop for your groceries and deliver them to your doorstep on a recurring basis, saving you time and hassle. Accept deliveries comfortably, knowing that your groceries are in good hands.',
    category: categories.recurring,
    price: 100,
    image: 'grocery_recurring.png',
    notes: ''
  },
  {
    id: '4eacdf8c-6d60-4be6-aaa2-a070fa21cdb7',
    serviceName: 'Grocery Delivery - One-Time',
    description:
      "Need groceries but don't have the time to shop? Let us handle it! Our team will shop for your groceries and deliver them to your doorstep, ensuring you have everything you need without the hassle of going to the store.",
    category: categories.general,
    price: 25,
    image: 'grocery.png',
    notes: 'Prices may vary based on the total of the order.'
  },
  {
    id: 'd50b7e8f-07c1-476d-a885-5fe4ef240d04',
    serviceName: 'Interior Car Detailing',
    description:
      'Keep your vehicle spotless with our interior car detailing services. Our team thoroughly cleans your vehicle inside and out, providing a fresh and tidy environment.',
    category: categories.general,
    price: 50,
    image: 'car_detailing_interior.png',
    notes: ''
  },
  {
    id: '4f7de700-f5cc-40c5-bc38-322cd79ef238',
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
