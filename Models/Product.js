const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    company : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : [true, "price must be provided"]
    },
    colors : {
        type : [String],
        required : true
    },
    image : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    // rating : {
    //     type : Number,
    //     required : true,
    //     default : 4.9
    // },
    featured : {
        type : Boolean,
    },
    shipping : {
        type : Boolean,
    },
})


const Product = new mongoose.model("Product", productSchema);


module.exports = Product;