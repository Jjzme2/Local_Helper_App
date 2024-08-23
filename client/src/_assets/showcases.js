const authors = [
  {
    name: 'Jj'
  }
]

const canvaDesigns = [
  {
    category: 'resumes',
    directory: '/src/_assets/images/showcase/resumes/',
    designs: [
      {
        title: 'Personal Resume',
        author: authors.find((author) => author.name === 'Jj'),
        images: ['personal_resume.png']
      }
    ]
  },
  {
    category: 'book-covers',
    directory: '/src/_assets/images/showcase/book-covers/',
    designs: [
      {
        title: 'Daily Affirmations for personal Growth',
        author: authors.find((author) => author.name === 'Jj'),
        images: ['Daily_Affirmation_Journal.png']
      },
      {
        title: 'Ollie the Lumberjack',
        authors: authors.find((author) => author.name === 'Jj'),
        images: ['Ollie_the_Lumberjack.png']
      }
    ]
  },
  {
    category: 'business-cards',
    directory: '/src/_assets/images/showcase/business-cards/',
    designs: [
      {
        title: 'Business Card',
        author: authors.find((author) => author.name === 'Jj'),
        subdirectory: 'ilytat-services'
      }
    ]
  }
]

const serviceExamples = [
  {
    category: 'General Services',
    directory: '/src/_assets/images/showcase/general-services/',
    examples: [
      {
        // date_of_completion: '2021-07-01',
        // author: authors.find((author) => author.name === 'Jj')
        images: [] // ,
      }
    ]
  }
]

export { canvaDesigns, serviceExamples }
