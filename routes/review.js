const express = require('express');
const router = express.Router();
const Review = require('../models/review');
const Product = require('../models/product');
const{validateReview,isLoggedIn} = require('../middleware')

router.post('/products/:productid/review',isLoggedIn,validateReview,async(req,res)=>{
    try{
        const{productid} = req.params;

    const product = await Product.findById(productid);

    const{rating,comment} = req.body;
    const review = new Review({rating,comment});
    product.reviews.push(review)
    await review.save();
    await product.save();
    req.flash('success','Added your review successfully')
    res.redirect(`/products/${productid}`);
    }

    catch(e){
        res.status(500).render('error',{err:e.message})
    }

})










module.exports = router;