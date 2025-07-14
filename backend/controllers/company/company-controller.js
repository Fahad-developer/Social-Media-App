import Company from "../../models/company/company-model.js";
import Product from "../../models/products/product-model.js";
import User from "../../models/user/user-model.js";
import asyncHandler from "../../utils/asyncErrorHandler/asyncHandler.js";



// 1- Create Company

export const createCompany = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const profile = req.file?.filename;
    const { name, description, contact, email, city, address } = req.body;

    if (!name || !description || !contact || !email || !city || !address)
        throw new Error("All Fields are Required.");

    if (!profile) throw new Error("Profile image is necessary.");

    const companyExsist = await Company.findOne({ owner: userId });
    if (companyExsist) throw new Error("Company already exists.");

    const newCompany = new Company({
        name,
        description,
        profile,
        contact,
        email,
        city,
        address,
        owner: userId,
    });

    await newCompany.save();

    const user = await User.findById(userId);
    user.company = newCompany._id;
    await user.save();

    return res.status(200).json({ success: true, newCompany });
});


// 2- Update Company

export const updateCompany = asyncHandler(async (req, res) => {
    const userId = req.user._id
    const { name, description, contact, email, city, address } = req.body
    const profile = req.file.filename

    const company = await Company.findOne({ owner: userId })

    if (name) company.name = name
    if (description) company.description = description
    if (contact) company.contact = contact
    if (email) company.email = email
    if (city) company.city = city
    if (address) company.address = address
    if (profile) company.profile = profile

    await company.save()

    return res.status(200).json({ success: true, company })
})



// 3- View Profile

export const viewProfile = asyncHandler(async (req, res) => {
    const userId = req.user._id

    const company = await Company.findOne({ owner: userId })

    if (!company) throw new Error("Company not Found")

    return res.status(200).json({ success: true, company })
})



// 4- View Specific Profile

export const specificProfile = asyncHandler(async (req, res) => {
    const { id } = req.params

    const profile = await Company.findById(id)

    if (!profile) throw new Error("Profile did not Exsist.")

    return res.status(200).json({ success: true, profile })
})



// 5- get all products of company

export const getCompanyProducts = asyncHandler(async (req, res) => {
    const { companyId } = req.params

    const products = await Product.find({ company: companyId })

    if (products.length === 0) throw new Error("No Products to Show")

    return res.status(200).json({ success: true, products })
})


// 6- get products Count

export const getCompanyProductsCount = asyncHandler(async (req, res) => {
    const { companyId } = req.params

    const productsCount = await Product.countDocuments({ company: companyId })

    if (!productsCount) throw new Error("0 Products to Show")

    return res.status(200).json({ success: true, productsCount })
})


// 7- follow and unfollow

export const follow = asyncHandler(async (req, res) => {
    const userId = req.user._id
    const { targetId } = req.params

    // console.log(targetId)

    // Compare strings
    if (userId.toString() === targetId) {
        throw new Error("You cannot follow/unfollow yourself.");
    }

    const currentUser = await User.findById(userId);
    const targetUser = await User.findById(targetId);

    if (!currentUser) throw new Error("User not found.");
    if (!targetUser) throw new Error("Target user not found.");

    const isFollowing = currentUser.following.includes(targetId);

    if (isFollowing) {
        // Unfollow
        currentUser.following.pull(targetId);
        targetUser.followers.pull(userId);
    } else {
        // Follow
        currentUser.following.push(targetId);
        targetUser.followers.push(userId);
    }

    await currentUser.save();
    await targetUser.save();

    return res.status(200).json({
        success: true,
    });
});



// 8- Search Companies

//       /search?search=software

export const searchCompanies = asyncHandler(async (req, res) => {
    const keyword = req.query.search || "";

    const companies = await Company.find({
        name: { $regex: keyword, $options: "i" }  // case-insensitive search
    }).populate("owner")

    res.status(200).json({ success: true, companies });
});


// 9- Profile Statistics

export const profileStatistics = asyncHandler(async (req, res) => {
    const userId = req.user?._id

    const user = await User.findById(userId).select('followers following')
    const productsCount = await Product.countDocuments({ owner: userId });

    if (!user) throw new Error("User not Found")

    const followersCount = user.followers.length
    const followingCount = user.following.length

    return res.status(200).json({ followersCount, followingCount, productsCount })
})