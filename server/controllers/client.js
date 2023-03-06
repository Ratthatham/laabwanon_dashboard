import Product from "../models/product.js"
import ProductState from "../models/ProductState.js"
import User from "../models/user.js";
import Transaction from "../models/transactions.js"

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

export const getCustomers = async(req, res) => {
    try{
        const customers = await User.find({role: "user"})
        res.status(200).json(customers);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getTransactions = async (req, res) => {
    try{
        const {page=1, pageSize=20, sort='' , search=''} = req.query

        const sortFormatted = {};
        if (sort) {
        try {
            const sortParsed = JSON.parse(sort);
            sortFormatted[sortParsed.field] = sortParsed.sort === "asc" ? 1 : -1;
        } catch (error) {
            console.error(error);
        }
}
        // const generateSort = () => {
        //     const sortParsed = JSON.parse(sort);
        //     const sortFormatted = {
        //         [sortParsed.field]: sortParsed.sort === "asc"? 1 : -1
        //     }
        //     return sortFormatted;
        // }

        // const sortFormatted = Boolean(sort)? generateSort:{};
        const transactions = await Transaction.find(
            { $or: [
                {cost:{$regex: new RegExp(search, 'i')}},
                {userId: {$regex: new RegExp(search, 'i')}}
            ]}
        )
        .sort(sortFormatted)
        .skip(page*pageSize)
        .limit(pageSize)

        const total = await Transaction.countDocuments({
            name: {$regex: search, $options: "i"}
        })
            
        res.status(200).json({transactions, total})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}
