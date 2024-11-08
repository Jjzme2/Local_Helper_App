import productRoutes from './productRoutes.js'
import postRoutes from './postRoutes.js'
import videoRoutes from './videoRoutes.js'

const applyRoutes = (app) => {
  app.use('/api/products', productRoutes)
  app.use('/api/posts', postRoutes)
  app.use('/api/videos', videoRoutes)
}

export default applyRoutes
