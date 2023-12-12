import express from 'express'

import { dev } from '../configs/index.js'
import {connectDB} from '../configs/db.js'
import {product} from '../model/productSchema.js'

const app = express()
const port = dev.app.port
connectDB() 


// let products =[
//     {id:0, title: 'apple iphone 5', price: 6705},
//     {id:1, title: 'mac book air ', price: 86705},
//     {id:2, title: 'Ice maker', price: 675},
//     {id:3, title: 'Coffee machine', price: 9805},
//   ] 

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res)=>{
 res.json({
   statusCode: 200,
   message: 'Welcome to the express server'  
 })
})

app.get('/products', async (req, res)=>{

  const products = await product.find()
    res.json({
      message: 'Git All Products From the Store' ,
      products
    })
   })

   app.get('/products/:id',async (req, res)=>{
   try {
    // const id = Number(req.params.id)
    // const product = products.find((product) => product.id === id)
    const product= await product.find()

    res.json({
        product:product
      })
   } catch (error) {
    res.status(500).send({message: error.message})
   }
   })

app.listen(port, ()=>{
   console.log(`server is running at http://localhost:${port}`); 
})