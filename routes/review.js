const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');

const {validateReview} = require('../middleware');

router.post('/products/:productid/review',validateReview, async (req,res)=>{
    try{
        const {productid} = req.params;
        const product = await Product.findById(productid);
    
        const {rating,comment} = req.body;
        const review = new Review({rating,comment});
    
        product.reviews.push(review);
        await product.save();
        await review.save();
        
        res.redirect(`/products/${productid}`);
    }
    catch(e){
        res.status(500).render('error',{err:e.message});
    }
})

module.exports = router;