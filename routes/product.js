const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const{validateProduct,isLoggedIn,isSeller,isProductAuthor} = require('../middleware')

//INDEX PAGE
router.get('/products',async(req,res)=>{
    try{
        const products = await Product.find({});
        res.render('products/index',{products})
    }
    catch(e){
        res.status(500).render('error',{err:e})
    }
    
})


//NEW PAGE
router.get('/products/new',isLoggedIn,(req,res)=>{

    
    try{
        res.render('products/new'); 
    }
    catch(e){
        res.status(500).render('error',{err:e.message})
    }
    
})
router.post('/products',isLoggedIn,validateProduct,isSeller,async(req,res)=>{
    try{
        const{name,price,desc,img} = req.body;

       
        await Product.create({name,price: parseFloat(price),img,desc,author:req.user._id})

        res.redirect('/products')
    }
    catch(e){
        res.status(500).render('error',{err:e.message})
    }
    
   
})

//SHOW PAGE
router.get('/products/:id',async(req,res)=>{
    try{
        const{id} = req.params;

        const product = await Product.findById(id).populate('reviews');
    
        res.render('products/show',{product});
    }
    catch(e){
        res.status(500).render('error',{err:e.message})
    }
   
})


//EDIT PAGE
router.get('/products/:id/edit',isLoggedIn,isProductAuthor,async(req,res)=>{
    try{
        const{id} = req.params;

    const product = await Product.findById(id);

    res.render('products/edit',{product})
    }
    catch(e){
        res.status(500).render('error',{err:e.message})
    }
    
})
router.patch('/products/:id',isLoggedIn,isProductAuthor,validateProduct,async(req,res)=>{
    try{
        const{id} = req.params;
        const{name,price,img,desc} = req.body
        await Product.findByIdAndUpdate(id,{name,price,img,desc})
        req.flash('success','Edit your product successfully')
        res.redirect(`/products/${id}`);
    }
    catch(e){
        req.flash('error', e.message);
        res.redirect(`/products/${id}/edit`);
    }
   
})
router.delete('/products/:id',isLoggedIn,isProductAuthor,async(req,res)=>{
    try{
        const{id} = req.params;

    // const product = await Product.findById(id);

    // for(let id of product.reviews){
    //     await Review.findByIdAndDelete(id);
    // }

    await Product.findByIdAndDelete(id);

    res.redirect('/products')
    }
    catch(e){
        res.status(500).render('error',{err:e.message})
    }
    
})
module.exports = router