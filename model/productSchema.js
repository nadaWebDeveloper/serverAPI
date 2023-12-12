import { Schema , model} from "mongoose";
const productSchema = new Schema({
    _id: Number,
    title:String,
    price:Number
})

export const product = model("products", productSchema)