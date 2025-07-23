import express from 'express'
import { auth } from '../../middlewares/auth/auth-middleware.js'
import { upload } from '../../middlewares/multer/multer.js'
import { createProduct, getAllProducts, getLikes, likeProduct, specificProduct, updateProduct, deleteProduct, companyAllProducts, isLiked } from '../../controllers/products/product-controller.js'
import { authorizeUser } from '../../middlewares/authorize/authorize-middleware.js'

const router = express.Router()

router.post('/createProduct', auth, authorizeUser("user"), upload.single('productImage'), createProduct)
router.post('/updateProduct/:id', auth, authorizeUser("user"), updateProduct)
router.get('/products', auth, authorizeUser("user"), getAllProducts)
router.get('/product/:id', auth, authorizeUser("user"), specificProduct)
router.get('/getCompanyProducts', auth, authorizeUser("user"), companyAllProducts)
router.delete('/deleteProduct/:id', auth, authorizeUser("user"), deleteProduct)

// Like Product
router.post('/likeProduct/:productId', auth, authorizeUser("user"), likeProduct)
router.post('/getLikes/:id', auth, authorizeUser("user"), getLikes)
router.post('/isLiked/:productId', auth, authorizeUser("user"), isLiked)

export default router