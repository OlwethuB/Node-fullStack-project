    // importing functions from the product model
    const Product = require("../model/productModel");

    // Get all products
    exports.showProducts = (req, res) => {
        Product.getProducts((err, results) => {
            if (err){
                res.send(err);
            } else{
                res.json(results)
            }
        })
    }
    
    //  Get single product 
    exports.getProductId = (req, res) => {
        Product.getProductId(req.params.id, (err,result) =>{
            if (err){
                res.send(err);
            } else{
                res.json(result);
            }
        })
    }

    // create a new product
    exports.createProduct = (req, res) => {
        const data = req.body;
        Product.insertProduct(data, (err, results) =>{
            if (err){
                res.send(err);
            } else{
                res.json(results);
            }
        })
    }

    // update product
exports.updateProduct = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    Product.updateProductById(data, id, (err, results) => {
        if (err){
            res.send(err);
        } else{
            res.json(results);
        }
    })
}

// delete product 
exports.deleteProduct = (req, res) => {
    const id = req.params.id;
    Product.deleteProductById(id, (err, results) => {
        if (err){
            res.send(err);
        } else{
            res.json(results);
        }
    })
}
