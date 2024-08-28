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
  {
    id: '9d81da06-07dd-4576-82c7-0b4aef8fddf8',
    name: 'Halloween Unisex Tee Shirt',
    category: categoryMap['Apparel'].name,
    url: 'https://ilytat-apparel.printify.me/product/12475932/halloween-unisex-tee-shirt',
    linkToImage: 'images/app/products/halloween-unisex-tee-shirt.png'
  },
  {
    id: '42a20700-751e-4654-be3f-7a8c9b23a5e9',
    name: 'Daily Affirmations: for personal growth',
    category: categoryMap['Books'].name,
    url: 'https://www.amazon.com/dp/B0DF2GP8DK',
    linkToImage: 'images/app/products/daily-affirmation-journal.png'
  }
]

export { products, categories }
