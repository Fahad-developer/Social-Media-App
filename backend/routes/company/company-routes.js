import { checkFollowing, createCompany, follow, getAllCompanies, getCompanyProducts, getCompanyProductsCount, profileStatistics, searchCompanies, specificProfile, updateCompany, viewProfile } from "../../controllers/company/company-controller.js";
import { auth } from "../../middlewares/auth/auth-middleware.js";
import { authorizeUser } from "../../middlewares/authorize/authorize-middleware.js";
import { upload } from '../../middlewares/multer/multer.js'

import express from 'express'

let router = express.Router()


router.post('/createCompany', auth, authorizeUser("user"), upload.single('profile'), createCompany)
router.patch('/updateCompany', auth, authorizeUser("user"), upload.single('profile'), updateCompany)
router.get('/viewProfile', auth, authorizeUser("user"), viewProfile)
router.get('/specificProfile/:id', auth, authorizeUser("user"), specificProfile)
router.get("/getProducts/:id", auth, authorizeUser("user"), getCompanyProducts)
router.get('/getCount/:id', auth, authorizeUser("user"), getCompanyProductsCount)
router.post('/following/:targetId', auth, authorizeUser("user"), follow)
router.get('/search', auth, authorizeUser("user"), searchCompanies)
router.get('/getStatistics', auth, authorizeUser("user"), profileStatistics)
router.get('/allCompanies', getAllCompanies)
router.get('/checkFollowing/:targetId', auth, authorizeUser("user"), checkFollowing)

export default router