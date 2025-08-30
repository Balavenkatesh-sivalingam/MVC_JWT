const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api",require("./routes/userRoutes"));

app.use("/api",require("./routes/getUserRoutes"));

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log("server is running on port",{PORT})
})