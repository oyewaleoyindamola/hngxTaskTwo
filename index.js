const express = require ("express");
const dotenv = require ("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/user");


const app = express()
dotenv.config();
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const port = process.env.PORT || 8000
const connection_string = process.env.CONNECTION_STRING;

app.use("/", router )

app.listen(port, () => {
    console.log(`server is bouncing on port ${port}`);
});

// MongoDB connection
mongoose
  .connect(connection_string)
  .then(() => {
    console.log("database connection successful");
  })
  .catch((error) => {
    console.log("database connection failed" + error);
  });