const categories = [
  {
    id: '51da6e02-af76-4411-8d87-bc1a61707a5b',
    categoryName: 'General',
    description: 'General services that can be requested at any time.',
    value: 'general'
  },
  {
    id: '7386c96c-5cdb-48da-8115-ef13c854fb5d',
    categoryName: 'Recurring',
    description: 'Services that are scheduled on a recurring basis.',
    value: 'recurring'
  },
  {
    id: 'cf22113e-e523-41aa-9b97-7b58f9991931',
    categoryName: 'Seasonal',
    description: 'Services that are performed seasonally.',
    value: 'seasonal'
  },
  {
    id: 'dcdfaf8e-fb19-4546-be86-76173a90885b',
    categoryName: 'Specialty',
    description: 'Specialized services for unique needs.',
    value: 'specialty'
  },
  {
    id: 'a121444a-2256-4d15-b61f-eb9bc56642a6',
    categoryName: 'Design',
    description: 'Custom design services for logos, resumes, and more.',
    value: 'design'
  },
  {
    id: '39c4236f-26ad-4696-825d-2d2c528d5546',
    categoryName: 'Other',
    description: 'Other services that do not fit into the other categories.',
    value: 'other'
  }
]

// Create a map for quick category lookup
const categoryMap = categories.reduce((map, category) => {
  map[category.value] = category
  return map
}, {})

const services = [
  // Seasonal Services
  {
    id: '0119eb51-f771-4b9e-b021-6a447150a677',
    serviceName: 'Mulch Installation & Bed Edging',
    description:
      'Enhance your garden beds with our mulch installation and bed edging services. We help retain moisture and improve the overall aesthetics of your landscape, ensuring your outdoor spaces look their best.',
    category: categoryMap['seasonal'].categoryName,
    price: 125,
    image: 'mulch.png',
    notes: 'Pricing is per cubic yard of mulch installed.'
  },
  {
    id: 'b21218ea-bc7b-4264-be31-289682494525',
    serviceName: 'Seasonal Clean-Up',
    description:
      'Prepare your property for the changing seasons with our comprehensive seasonal clean-up services. Our team will remove leaves, debris, and other unwanted materials from your outdoor spaces, ensuring a clean and tidy appearance.',
    category: categoryMap['seasonal'].categoryName,
    price: 100,
    image: 'clean_up.png',
    notes: 'Includes lawn mowing, shovel snow, and other seasonal tasks.'
  },

  // Recurring Services
  {
    id: '5c3216f3-3e86-4770-91e7-05664d618fba',
    serviceName: 'Grocery Delivery - Recurring',
    description:
      'Enjoy the convenience of our grocery delivery services. We shop for your groceries and deliver them to your doorstep on a recurring basis, saving you time and hassle. Accept deliveries comfortably, knowing that your groceries are in good hands.',
    category: categoryMap['recurring'].categoryName,
    price: 100,
    image: 'grocery_recurring.png',
    notes: ''
  },

  // General Services
  {
    id: '4eacdf8c-6d60-4be6-aaa2-a070fa21cdb7',
    serviceName: 'Grocery Delivery - One-Time',
    description:
      "Need groceries but don't have the time to shop? Let us handle it! Our team will shop for your groceries and deliver them to your doorstep, ensuring you have everything you need without the hassle of going to the store.",
    category: categoryMap['general'].categoryName,
    price: 25,
    image: 'grocery.png',
    notes: 'Prices may vary based on the total of the order.'
  },
  {
    id: 'd50b7e8f-07c1-476d-a885-5fe4ef240d04',
    serviceName: 'Interior Car Detailing',
    description:
      'Keep your vehicle spotless with our interior car detailing services. Our team thoroughly cleans your vehicle inside and out, providing a fresh and tidy environment.',
    category: categoryMap['general'].categoryName,
    price: 50,
    image: 'car_detailing_interior.png',
    notes: ''
  },
  {
    id: '4f7de700-f5cc-40c5-bc38-322cd79ef238',
    serviceName: 'Exterior Car Detailing',
    description:
      "Maintain the exterior of your vehicle with our professional detailing services. We clean, polish, and protect your car's exterior, ensuring a shiny and well-maintained appearance.",
    category: categoryMap['general'].categoryName,
    price: 50,
    image: 'car_detailing_exterior.png',
    notes: ''
  },

  // Specialty Services
  {
    id: 'bbcf0e3f-41b5-4383-b480-d1db3fa9a3fd',
    serviceName: 'Event Setup & Breakdown',
    description:
      'Let us handle the setup and breakdown of your next event. Our team will take care of all the details, ensuring a seamless and stress-free experience for you and your guests.',
    category: categoryMap['specialty'].categoryName,
    price: 150,
    image: 'event_setup.png',
    notes: 'Pricing is per event and may vary based on the size and scope of the event.'
  },
  {
    id: 'f7e7d6b4-5a9c-4e5a-9c9e-1c1e6e7d6b4c',
    serviceName: 'Wellness Check-In',
    description:
      'Let us enusre that your loved ones are safe and sound. Our team will check in on your loved ones to ensure they are safe and well. See if there is any assistance that can be offered, or just to provide some company.',
    category: categoryMap['specialty'].categoryName,
    price: 50,
    image: 'wellness_check.png',
    notes: 'Pricing is per visit.'
  },

  // Design Services
  {
    id: '55758f18-2e80-425a-b098-c3f0a0a33e3f',
    serviceName: 'Resume Design & Writing',
    description:
      'Stand out from the crowd with a professionally designed resume. Our team will create a custom resume that highlights your skills, experience, and qualifications, helping you land your dream job.',
    category: categoryMap['design'].categoryName,
    price: 75,
    image: 'resume.png',
    notes: ''
  },
  {
    id: '3e7d1e2b-1f3b-4e2b-8c5e-7b4e7d2f3b6c',
    serviceName: 'Logo Design',
    description:
      'Make a lasting impression with a custom logo design. Our team will work with you to create a unique and memorable logo that reflects your brand and identity.',
    category: categoryMap['design'].categoryName,
    price: 100,
    image: 'logo.png',
    notes: ''
  },
  {
    id: 'e6b4c5d8-7d6b-4e5a-9c9e-1c1e6e7d6b4c',
    serviceName: 'Specialty Design',
    description:
      'Specialized design services for unique needs. Our team will work with you to create custom designs that meet your specific requirements.',
    category: categoryMap['design'].categoryName,
    price: 150,
    image: 'specialty_design.png',
    notes: ''
  }
]

export { services, categories }
