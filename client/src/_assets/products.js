const categories = [
  {
    id: '',
    name: 'Apparel'
  },
  {
    id: '',
    name: 'Books'
  }
]

const categoryMap = categories.reduce((map, category) => {
  map[category.name] = category
  return map
}, {})

const products = [
  // Apparel
  {
    id: '9d81da06-07dd-4576-82c7-0b4aef8fddf8',
    name: 'Spooky Night: Haunted House & Scary Pumpkins Halloween T-Shirt',
    category: categoryMap['Apparel'].name,
    url: 'https://ilytat-apparel.printify.me/product/12475932/spooky-night-haunted-house-and-amp-scary-pumpkins-halloween-t-shirt',
    imageName: 'unisex-t-halloween'
  },
  {
    id: '',
    name: 'Magic Stirrer: Witchy Raccoon T-Shirt',
    category: categoryMap['Apparel'].name,
    url: 'https://ilytat-apparel.printify.me/product/12512339/magic-stirrer-witchy-raccoon-t-shirt',
    imageName: 'unisex-soft-t-magic-raccoon'
  },

  //   Notebooks
  {
    id: '42a20700-751e-4654-be3f-7a8c9b23a5e9',
    name: 'Daily Affirmations: For Personal Growth',
    category: categoryMap['Books'].name,
    url: 'https://www.amazon.com/dp/B0DF2GP8DK',
    imageName: 'daily-affirmation-journal'
  }
]

export { products, categories }
