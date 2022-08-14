const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRouter = require("./routes/auth");

dotenv.config();

mongoose
    .connect(process.env.MONGO_CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // for creating indexes in the DB 
        // useCreateIndex: true
    })
    .then(() => {
        console.log("DB connection successful");
    })
    .catch((error) => {
        console.log(error);
    });

    // json files
    app.use(express.json());

    // routes
    app.use("/api/auth", authRouter);

app.listen(process.env.PORT || 3001, () => {
    console.log(`Running on ${process.env.PORT}`);
});