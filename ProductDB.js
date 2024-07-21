require('dotenv').config();
const  connectDB = require('./DB/Connect');
const Product = require('./Models/Product');
const ProductJson = require('./Products.json');


const start = async () => {
    try {
        await connectDB(process.env.MONGO_DB);
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("sucess");
    } catch (error) {
        console.log(error);
    }
}


start();