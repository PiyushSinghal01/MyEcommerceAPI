const express = require('express');
const router = express.Router();

const {getAllProducts, getAllProductsTesting, getIndivisualProduct} = require('../Controllers/Products');

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
router.route("/:id").get(getIndivisualProduct);


module.exports = router;