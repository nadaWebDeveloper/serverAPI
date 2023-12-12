import express from 'express'
import mongoose from 'mongoose'
import { config } from 'dotenv'

import { dev } from './configs/index.js'

config()
const app = express()
const port = dev.app.port
const URL = dev.db.url

let products =[
    {id:0, title: 'apple iphone 5', price: 6705},
    {id:1, title: 'mac book air ', price: 86705},
    {id:2, title: 'Ice maker', price: 675},
    {id:3, title: 'Coffee machine', price: 9805},
  ] 

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res)=>{
 res.json({
   statusCode: 200,
   message: 'Welcome to the express server'  
 })
})

app.get('/products', (req, res)=>{
    res.json({
      statusCode: 200,
      message: 'Welcome to the Store' ,
      products
    })
   })

   app.get('/products/:id', (req, res)=>{
   try {
    const id = Number(req.params.id)
    const product = products.find((product) => product.id === id)
    res.json({
        product:product
      })
   } catch (error) {
    res.status(500).send({message: error.message})
   }
   })

mongoose
  .connect(URL)
  .then(() => {
    console.log('Database connected')
  })
  .catch((err) => {
    console.log(`MongoDB connection error: ${err}`)
  })
   
app.listen(port, ()=>{
   console.log(`server is running at http://localhost:${port}`); 
//    connectDB()
})