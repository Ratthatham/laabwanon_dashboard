import mongoose from "mongoose";

const TransactionsSchema = new mongoose.Schema(
    {
       userId: "string",
       cost: "string",
       products: {
        type: [mongoose.Types.ObjectId],
        of: Number
       }
    },
    {timestamps: true}
)

const Transactions = mongoose.model("Transactions", TransactionsSchema);
export default Transactions;