import express from 'express'
import cors from 'cors'

import {dev}  from '../configs/index.js'
import connectDB from '../configs/db.js'
import productRoute from '../routes/productRouter.js'

const app = express();
const port = dev.app.port;

connectDB();

app.listen(port, () => {
  console.log(`Server is Running At http://localhost:${port}`);
  
});


app.get("/", (req, res) => {
  res.json({
    message: 'Welcome to the express server'  
  })});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.use("/products", productRoute);

