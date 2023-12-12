import { Schema , model} from "mongoose";
const productSchema = new Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    title:String,
    price:Number
})

export const product = model("products", productSchema)