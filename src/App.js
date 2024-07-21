require('dotenv').config();
const express = require('express');
const app = express();

const products_route = require('../Routes/Products'); 
const connectDB = require('../DB/Connect');

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hi Im Piyush");
})

app.use('/api/products', products_route);


const start = async () =>{
    try {
        await connectDB(process.env.MONGO_DB);
        console.log("Database connected");
        app.listen(PORT, () => {
            console.log("listining to the port", PORT);
        })
    } catch (error) {
        console.log(error);
    }
}


start();