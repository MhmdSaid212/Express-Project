import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import connectDB from "./config/db";


connectDB()
.then(() => {

    app.listen(process.env.PORT, () => {
        console.log(
            `Restaurant API running on port ${process.env.PORT}`
        );
    });

});