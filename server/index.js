import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"

import clientRoutes from "./routes/client.js"
import generalRoutes from "./routes/general.js"
import managementRoutes from "./routes/management.js"
import salesRoutes from "./routes/sales.js"

// Data import 
import User from "./models/user.js"
import Product from "./models/product.js"
import ProductState from "./models/ProductState.js"
import getUser from "./controllers/general.js"
import Transactions from "./models/transactions.js"
import { dataUser, dataProduct, dataProductStat, dataTransaction } from "./data/data.js"


/* Configuration */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

/* Routes */
app.use("/client", clientRoutes)
app.use("/general", generalRoutes)
app.use("/sales", salesRoutes)
app.use("/management", managementRoutes)




/* Mongo Setup */
const PATH = process.env.PATH_URL || 9000;
const PORT = process.env.PORT;
mongoose.set('strictQuery', true);
//Connect to MangoDB
mongoose.connect(PATH, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    app.listen(PORT, () => console.log(`Server Run on ${PORT}`))

    // Insert the data array of documents into the Collection of MangoDB 
    // User.insertMany(dataUser)
    // Product.insertMany(dataProduct);
    // ProductState.insertMany(dataProductStat);
    // Transactions.insertMany(dataTransaction);
})
.catch((error)=> console.log( `${error} did not connect`))