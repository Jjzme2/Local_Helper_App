const categories = [
  {
    id: 'ab50f6a2-64f7-4455-b6ac-8b609eb9a777',
    name: 'Apparel'
  },
  {
    id: '2b0cc2da-f228-4478-a5a5-cb49d69efd1b',
    name: 'Phone Cases'
  },
  {
    id: '9bdec32b-6069-41c3-a376-4a2bb01d62eb',
    name: 'Blankets'
  },
  {
    id: '9e0585d7-6b7a-47dc-a988-5c59d8c78db4',
    name: 'Books'
  },
  {
    id: '8db11860-ec53-40a3-8def-53b2d5df20a2',
    name: 'Candles'
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
    url: 'https://ilytat-design.printify.me/product/12475932/spooky-night-haunted-house-and-amp-scary-pumpkins-halloween-t-shirt',
    imageName: 'unisex-t-halloween'
  },
  {
    id: '45131698-321d-4f29-8dd4-08eb2d8cf839',
    name: 'Magic Stirrer: Witchy Raccoon T-Shirt',
    category: categoryMap['Apparel'].name,
    url: 'https://ilytat-design.printify.me/product/12512339/magic-stirrer-witchy-raccoon-t-shirt',
    imageName: 'unisex-soft-t-magic-raccoon'
  },
  {
    id: '7511b0ff-75e4-4d90-a825-f35252c1f353',
    name: 'Patriotic Tee with Eagle - Unisex',
    category: categoryMap['Apparel'].name,
    url: 'https://ilytat-design.printify.me/product/12722172/patriotic-tee-with-eagle-unisex',
    imageName: 'patriotic-t-unisex'
  },
  {
    id: '367e68b0-8ea4-4a18-aed2-ebe25a02fa53',
    name: 'Christmas Crewneck Sweatshirt - Simple Holiday Design',
    category: categoryMap['Apparel'].name,
    url: 'https://ilytat-design.printify.me/product/12737758/christmas-crewneck-sweatshirt-simple-holiday-design',
    imageName: 'christmas-crewneck-sweatshirt'
  },

  //   Phone Cases
  {
    id: 'bce78e90-cec6-4e6a-909b-8028d80bdc62',
    name: 'Galactic Constellations Tough Phone Case',
    category: categoryMap['Phone Cases'].name,
    url: 'https://ilytat-design.printify.me/product/12638815/galactic-constellations-tough-phone-case',
    imageName: 'galactic-constellations-tough-phone-case'
  },
  {
    id: 'e41a8c12-681e-4d69-9a34-a4c22d39dd61',
    name: 'Azure Waves Tough Phone Case',
    category: categoryMap['Phone Cases'].name,
    url: 'https://ilytat-design.printify.me/product/12638712/azure-waves-tough-phone-case',
    imageName: 'azure-waves-tough-phone-case'
  },
  {
    id: '88580528-cba1-459e-9967-7e59da4d9e2f',
    name: 'Modern Tough Phone Case',
    category: categoryMap['Phone Cases'].name,
    url: 'https://ilytat-design.printify.me/product/12638342/modern-tough-phone-case',
    imageName: 'modern-tough-phone-case'
  },
  {
    id: '6eb9b164-b0cc-4400-9764-f45903c4d591',
    name: 'Phone Case Beautiful Modern Design',
    category: categoryMap['Phone Cases'].name,
    url: 'https://ilytat-design.printify.me/product/12638198/phone-case-beautiful-modern-design',
    imageName: 'phone-case-beautiful-modern-design'
  },

  //   Blankets
  {
    id: 'd91e79fd-d1a1-4ff0-869b-15fccd4ab172',
    name: 'Plush Blanket Winter Vibes Cabin Mountains Fleece',
    category: categoryMap['Blankets'].name,
    url: 'https://ilytat-design.printify.me/product/12596160/plush-blanket-winter-vibes-cabin-mountains-fleece',
    imageName: 'chill-outside-cozy-inside'
  },
  {
    id: '5115ca5d-ddac-44b8-aea9-84f702009196',
    name: 'Sweet Dreams Swaddle Blanket',
    category: categoryMap['Blankets'].name,
    url: 'https://ilytat-design.printify.me/product/12747498/sweet-dreams-swaddle-blanket',
    imageName: 'sweet-dreams-swaddle-blanket'
  },

  // Candles
  {
    id: '5d81fa70-0e52-455d-bc6c-9030b6da4816',
    name: 'Soy Candle',
    category: categoryMap['Candles'].name,
    url: 'https://ilytat-design.printify.me/product/12748557/soy-candle',
    imageName: 'soy-candle'
  },
  {
    id: 'c6ef9a21-c6f3-4ec3-b96c-d8b9d5d04f8d',
    name: 'Yuletide Glow Christmas Candle',
    category: categoryMap['Candles'].name,
    url: 'https://ilytat-design.printify.me/product/12673230/yuletide-glow-christmas-candle',
    imageName: 'glow-christmas-candle'
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
