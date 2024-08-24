const services = [
  {
    serviceName: 'Mowing & Edging',
    description:
      'We offer mowing and edging services for residential and commercial properties. Our team will keep your lawn looking great!',
    category: 'Seasonal Services,',
    price: 30,
    image: 'mowing.png',
    notes: 'Additional charges may apply for larger properties and further distances.'
  },
  {
    serviceName: 'Shoveling & Snow Removal',
    description:
      'We offer shoveling and snow removal services for residential and commercial properties. Our team will keep your property safe and accessible!',
    category: 'Seasonal Services,',
    price: 50,
    image: 'shoveling.png',
    notes: 'Additional charges may apply for larger properties and further distances.'
  },
  {
    serviceName: 'Grocery Delivery',
    description:
      'We offer grocery delivery services for those who are unable to shop for themselves. Our team will deliver your groceries to your door! Feel comfortable knowing who is delivering your goods.',
    category: 'Recurring Services,',
    price: 30,
    image: 'grocery.png',
    notes:
      'Additional charges may apply for larger orders and further distances. This is considered a monthly expense up to 4 times a month.'
  }
]

const categories = [
  {
    name: 'General Services'
  },
  {
    name: 'Recurring Services'
  },
  {
    name: 'Seasonal Services'
  },
  {
    name: 'Specialty Services'
  },
  {
    name: 'Other Services'
  }
]

export { services, categories }
