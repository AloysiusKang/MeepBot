
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Router
const serviceRouter = require("./routers/services");

mongoose.connect(process.env.MONGO_URI).then(
    app.listen(process.env.PORT, () => {
        console.log("Connected to MONGODB and Listening to port " + process.env.PORT);
    })
).catch((error) => {
    console.log(error);
})
    
app.use(express.json());
app.use("/api/services", serviceRouter);


