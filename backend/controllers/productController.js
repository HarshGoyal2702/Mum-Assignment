import Product from "../models/productModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncError from "../middlewares/catchAsyncError.js";

// UPDATE PRODUCT --Admin
export const updateProduct = catchAsyncError(async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) return next(new ErrorHandler("Product has been removed from the store", 404))

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });
    res.status(200).json({
        success: true,
        product
    })
}
);

// Create Products
export const createProduct = catchAsyncError(async (req, res, next) => {

    const { name, description, price, category } = req.body;
    if (name === "" || description === "" || price === "" || category === "") return next(
        new ErrorHandler("Please fill in all fields", 400)
    )
    const product = await Product.create({
        name: name,
        description: description,
        price: price,
        category: category
    });

    res.status(201).json({
        success: true,
        product,
    });
});


// Get All Products
export const getAdminProducts = catchAsyncError(async (req, res, next) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products,
    })
}
);

// Delete Products
export const deleteProduct = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) return next(new ErrorHandler("Product not found", 404))
    await product.deleteOne();
    res.status(200).json({
        success: true,
        message: "Product deleted successfully"
    })
});
