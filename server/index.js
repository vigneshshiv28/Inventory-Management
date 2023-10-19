//importing the dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");   
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const authRoutes = require("./routes/auth.js");
const productRoute = require("./routes/product.js");
const userRoute = require("./routes/user.js");

//confirugations
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(bodyParser.json({limit: "30mb" , extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb" , extended: true}));
app.use(cors());

//routes
app.use("/auth",authRoutes);
app.use("/products", productRoute);
app.use("/user", userRoute);

//connecting to the database
const PORT = process.env.PORT || 8080;
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    app.listen(PORT, () => console.log(`Server Port : ${PORT}`));
})
.catch((error) =>{
    console.log(`${error} did not connect`);
}) 