import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
    {
        name: String,
        price: String,
        description: String,
        category: String,
        rating: String,
        supply: String,
    },
    {timestamps: true}
)

const Product = mongoose.model("Product", productsSchema);
export default Product;