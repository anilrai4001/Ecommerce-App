const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');

router.post('/products/:productid/review', async (req,res)=>{
    const {productid} = req.params;
    const product = await Product.findById(productid);

    const {rating,comment} = req.body;
    const review = new Review({rating,comment});

    product.reviews.push(review);
    await product.save();
    await review.save();
    
    res.redirect(`/products/${productid}`);
})

module.exports = router;