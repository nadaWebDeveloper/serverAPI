import { Schema , model} from "mongoose";
const productSchema = new Schema({
    title:String,
    price:Number
})

export const product = model("products", productSchema)