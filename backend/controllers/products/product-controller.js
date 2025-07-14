import fs from "fs";
import path from "path";

import asyncHandler from '../../utils/asyncErrorHandler/asyncHandler.js'
import Product from '../../models/products/product-model.js'
import User from "../../models/user/user-model.js";


// 1- create Product

export const createProduct = asyncHandler(async (req, res) => {
    const companyId = req.user.company[0]

    const { productName, productDescription, productPrice } = req.body

    const productImage = req.file.filename

    if (!productImage) throw new Error("Product Image is Required.")
    if (!companyId) throw new Error("Company Id is Required.")

    if (!productDescription || !productName || !productPrice || !productImage) throw new Error("All fields are required.")

    const newProduct = new Product({
        productName,
        productDescription,
        productPrice,
        productImage,
        company: companyId
    })

    await newProduct.save()

    return res.status(200).json({ success: true })

})


// 2- update Product

export const updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params
    const profileImage = req.file.filename
    const { productName, productDescription, productPrice } = req.body

    const product = await Product.findById(id)

    if (!product) throw new Error("No Products Found.")

    if (profileImage) product.profileImage = profileImage
    if (productName) product.productName = productName
    if (productDescription) product.productDescription = productDescription
    if (productPrice) product.productPrice = productPrice

    await product.save()

    return res.status(200).json({ success: true, product })
})


// 3- Get All Products

export const getAllProducts = asyncHandler(async (req, res) => {
    const allProducts = await Product.find({})

    return res.status(200).json({ success: true, allProducts })
})


// 4- get a Specific Product

export const specificProduct = asyncHandler(async (req, res) => {
    const { id } = req.params

    const product = await Product.findById(id)

    if (!product) throw new Error("Product not Exsist.")

    return res.status(200).json({ success: true, product })
})


// 5- get all products of a company.

export const companyAllProducts = asyncHandler(async (req, res) => {
    const companyId = req.user.company[0]

    const companyAllProducts = await Product.find({ company: companyId })

    if (!companyAllProducts) throw new Error("No Products to Show")

    return res.status(200).json({ success: true, companyAllProducts })
})


// 6- delete Product

export const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) throw new Error("Product not found");

    // Delete image from filesystem
    const imagePath = path.join(process.cwd(), "uploads", "products", product.productImage);
    if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath); // delete image
    }

    await product.deleteOne(); // delete from database

    return res.status(200).json({ success: true, message: "Product deleted with image" });
});


// 7- like Product

export const likeProduct = asyncHandler(async (req, res) => {
    const userId = req.user._id
    const { productId } = req.params

    const product = await Product.findById(productId)
    if (!product) throw new Error("Product not Found.")

    const user = await User.findById(userId)
    if (!user) throw new Error("User not Found.")

    const isLiked = user.likedProducts.include(productId)

    if (isLiked) {
        // unlike
        user.likedProducts.pull(productId)
    } else {
        // like
        user.likedProducts.push(productId)
    }

    return res.status(200).json({ success: true })
})


// 8- get Likes

export const getLikes = asyncHandler(async (req, res) => {
    const { productId } = req.params

    const users = await User.find({ likedProducts: productId })
    const likes = users.length

    return res.status(200).json({ success: true, likes, users })
})
