const Products = require('../Models/Product')


const getAllProducts = async (req, res) =>{
    const AllProducts = await Products.find();
    res.status(200).json({AllProducts});

}

const getAllProductsTesting = async (req, res) =>{
    const AllProducts = await Products.find(req.query);
    res.status(200).json({AllProducts});
}

const getIndivisualProduct = async (req, res) =>{
    const id = req.params.id;
    const indivisualProduct = await Products.find({_id : id});
    res.status(400).json({indivisualProduct});
}

module.exports = {getAllProducts, getAllProductsTesting, getIndivisualProduct};