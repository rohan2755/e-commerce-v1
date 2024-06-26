const mongoose = require('mongoose')
const Review = require('./review')


const productSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true, //removes whitespace characters from the beginning and end of a string
        required: true
    },
    img:{
        type: String,
        trim: true,
        default:'/images/product.jpg'
    },
    price:{
        type:Number,
        min:0,
        default:0
    },
    desc:{
        type:String,
        trim:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ]

});


productSchema.post('findOneAndDelete', async function(product){
    if(product.reviews.length > 0){
        await Review.deleteMany({_id: {$in: product.reviews}})
    }
})

const Product = mongoose.model('Product',productSchema);

module.exports = Product;