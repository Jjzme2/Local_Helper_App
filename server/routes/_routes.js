import productRoutes from './productRoutes.js'
import postRoutes from './postRoutes.js'

// const router = express.Router()

// // Register all your routes here
// router.use('/products', productRoutes) // All routes related to products

// export default router

const applyRoutes = (app) => {
  //   app.use('/', (req, res) => {
  //     res.send('Hello from the server!')
  //   }),
  app.use('/api/products', productRoutes)
  app.use('/api/posts', postRoutes)
}

export default applyRoutes
