const mongoose = require('mongoose');
const Product = require('./models/product');
mongoose.connect('mongodb://127.0.0.1:27017/shopping-app') // To set up database
    .then(()=> console.log('DB connected'))
    .catch((err)=> console.log(err))

const products = [
    {
        name:'Iphone 11',
        img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww',
        price: 300,
        desc:"The iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then–Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold."
    },
    {
        name:'Reebok shoes',
        img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
        price: 100,
        desc:"Reebok International Limited (/ˈriːbɒk/) is an American fitness footwear and clothing brand that is a part of Authentic Brands Group. It was established in England in 1958 as a companion company to J.W. Foster and Sons, a sporting goods company which had been founded in 1895 in Bolton, Lancashire. From 1958 until 1986, the brand featured the flag of the United Kingdom in its logo to signify the origins of the company."
    },
    {
        name:'Watch',
        img: 'https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D',
        price: 150,
        desc:"Reebok International Limited (/ˈriːbɒk/) is an American fitness footwear and clothing brand that is a part of Authentic Brands Group. It was established in England in 1958 as a companion company to J.W. Foster and Sons, a sporting goods company which had been founded in 1895 in Bolton, Lancashire. From 1958 until 1986, the brand featured the flag of the United Kingdom in its logo to signify the origins of the company."
    },
    {
        name:'Laptop',
        img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww',
        price: 1500,
        desc:"Reebok International Limited (/ˈriːbɒk/) is an American fitness footwear and clothing brand that is a part of Authentic Brands Group. It was established in England in 1958 as a companion company to J.W. Foster and Sons, a sporting goods company which had been founded in 1895 in Bolton, Lancashire. From 1958 until 1986, the brand featured the flag of the United Kingdom in its logo to signify the origins of the company."
    },
    {
        name:'Drone',
        img: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmVzfGVufDB8fDB8fHww',
        price: 200,
        desc:"Reebok International Limited (/ˈriːbɒk/) is an American fitness footwear and clothing brand that is a part of Authentic Brands Group. It was established in England in 1958 as a companion company to J.W. Foster and Sons, a sporting goods company which had been founded in 1895 in Bolton, Lancashire. From 1958 until 1986, the brand featured the flag of the United Kingdom in its logo to signify the origins of the company."
    },
    {
        name:'Bicycle',
        img: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmljeWNsZXxlbnwwfHwwfHx8MA%3D%3D',
        price: 50,
        desc:"Reebok International Limited (/ˈriːbɒk/) is an American fitness footwear and clothing brand that is a part of Authentic Brands Group. It was established in England in 1958 as a companion company to J.W. Foster and Sons, a sporting goods company which had been founded in 1895 in Bolton, Lancashire. From 1958 until 1986, the brand featured the flag of the United Kingdom in its logo to signify the origins of the company."
    },

];

// If you don't want to make a function then we just have to copy mongoose.connect method here and use Product.insertMany(products)



async function seedDB(){
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('products seeded')
}

seedDB();