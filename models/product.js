const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    img:{
        type: String,
        trim: true,
        default: 'images/product.jpg'
    },
    price:{
        type: Number,
        min:0,
        default:0
    },
    desc: {
        type: String,
        trim: true
    }
});


const Product = mongoose.model('Product',productSchema);

module.exports = Product;