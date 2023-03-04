import Product from "../models/product.js"
import ProductState from "../models/ProductState.js"

export const getProducts = async(req, res) => {
    try{
        const products = await Product.find(); //retrieve all ducument from Product collection in database
        console.log(products);

        const productWithStat = await Promise.all(
            products.map( async (product)=>{
                const stat = await ProductState.find({
                    productId: product._id
                })
                return {
                    ...product._doc,
                    stat
                }
            })
        )
        res.status(200).json(productWithStat);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
