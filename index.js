const express = require ("express");
const dotenv = require ("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/user");


const app = express();
app.use(cors())
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const port = process.env.PORT || 8000
const connection_string = process.env.CONNECTION_STRING;
console.log(connection_string);

app.use("/", router )

app.listen(port, () => {
    console.log(`server is bouncing on port ${port}`);
});

// MongoDB connection

  mongoose
  .connect(connection_string, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
  