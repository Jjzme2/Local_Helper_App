const authors = [
  {
    name: 'Jj'
  }
]

const authorMap = authors.reduce((acc, author) => {
  acc[author.name] = author
  return acc
}, {})

const showCaseItems = [
  //  * Seasonal Services | Category
  // Mulch Installation & Bed Edging | ServiceName
  // ID: 0119eb51-f771-4b9e-b021-6a447150a677

  // Seasonal Clean-Up | ServiceName
  // ID: b21218ea-bc7b-4264-be31-289682494525

  //  * Recurring Services | Category
  // Grocery Delivery - Recurring | ServiceName
  // ID: 5c3216f3-3e86-4770-91e7-05664d618fba

  //  * General Services | Category
  //  Grocery Delivery - One Time | ServiceName
  // ID: 4eacdf8c-6d60-4be6-aaa2-a070fa21cdb7

  //  Interior Car Detailing | ServiceName
  // ID: d50b7e8f-07c1-476d-a885-5fe4ef240d04

  // Exterior Car Detailing | ServiceName
  //  ID: 4f7de700-f5cc-40c5-bc38-322cd79ef238

  // * Specialty Services | Category
  // Event Setup & Takedown | ServiceName
  // ID: bbcf0e3f-41b5-4383-b480-d1db3fa9a3fd

  //  Wellness Check-In | ServiceName
  // ID: f7e7d6b4-5a9c-4e5a-9c9e-1c1e6e7d6b4c

  // * Design Items | Category

  // Resume Design & Writing | ServiceName
  // ID: 55758f18-2e80-425a-b098-c3f0a0a33e3f
  {
    serviceId: '55758f18-2e80-425a-b098-c3f0a0a33e3f',
    directory: '/images/app/showcase/resumes/',
    showcaseImages: [
      {
        title: 'Sample Resume 1',
        author: authorMap['Jj'],
        images: ['resume_0.png']
      }
    ]
  },

  // Logo Design | ServiceName
  // ID: 3e7d1e2b-1f3b-4e2b-8c5e-7b4e7d2f3b6c

  // Specialty Design | ServiceName
  // ID: e6b4c5d8-7d6b-4e5a-9c9e-1c1e6e7d6b4c
  {
    serviceId: 'e6b4c5d8-7d6b-4e5a-9c9e-1c1e6e7d6b4c',
    directory: '/images/app/showcase/book-covers/',
    showcaseImages: [
      {
        title: 'Daily Affirmations for personal Growth',
        author: authorMap['Jj'],
        images: ['Daily_Affirmation_Journal.png']
      },
      {
        title: 'Ollie the Lumberjack',
        author: authorMap['Jj'],
        images: ['Ollie_the_Lumberjack.png']
      }
    ]
  },
  {
    serviceId: 'e6b4c5d8-7d6b-4e5a-9c9e-1c1e6e7d6b4c',
    directory: '/images/app/showcase/business-cards/',
    showcaseImages: [
      {
        title: 'Business Card',
        author: authorMap['Jj'],
        images: ['ilytat-services/front.png', 'ilytat-services/back.png']
      }
    ]
  }
]

export { showCaseItems }
