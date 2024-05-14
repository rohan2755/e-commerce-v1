const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const {isLoggedIn} = require('../../middleware')


router.post('/product/:productid/like',isLoggedIn,async(req,res)=>{
    const {productid} = req.params

    const user = req.user

    const isLiked = user.wishList.includes(productid)

    const option = isLiked ? '$pull' : '$addToSet';
    if (isLiked) {
        req.user=await User.findByIdAndUpdate(req.user._id, { $pull: { wishList: productid } });
    } else {
        req.user=await User.findByIdAndUpdate(req.user._id, { $addToSet: { wishList: productid } });
    }

    // req.user = await User.findByIdAndUpdate(req.user._id,{ [option]:{wishList:productid}},{new:true})

    // console.log(productid)
    res.send('LIKE API')

    
})




module.exports = router