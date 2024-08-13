import asyncHandler from "../middlewares/asyncHandler.js";
import Product from "../models/productModel.js";


const getProducts =  asyncHandler( async (req, res) => {
    const products = await Product.find({})
    res.json(products)
});

const getProductById =  asyncHandler( async (req, res) => {
    const product = await Product.findById(req.params.id);

    if(product){
        res.json(product)
    }else{
        res.status(404);
        throw new Error('Product not found')
    }
})


export  { getProducts, getProductById };



// productController.js

// import asyncHandler from "../middlewares/asyncHandler.js";
// import products from "../data/products.js"; // import the static data

// // @desc    Fetch all products
// // @route   GET /api/products
// // @access  Public
// const getProducts = asyncHandler(async (req, res) => {
//   res.json(products);
// });

// // @desc    Fetch single product by ID
// // @route   GET /api/products/:id
// // @access  Public
// const getProductById = asyncHandler(async (req, res) => {
//   const product = products.find((p) => p._id === req.params.id);

//   if (product) {
//     res.json(product);
//   } else {
//     res.status(404);
//     throw new Error('Product not found');
//   }
// });

// export { getProducts, getProductById };
