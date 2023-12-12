import mongoose from 'mongoose'
import { dev } from './index.js'


 const connectDB = async () => {
    try {
        await mongoose.connect(dev.db.url)
        console.log('Database connected')

    } catch (error) {
        console.log(`MongoDB connection error: ${error.message}`)

    }
}

export default connectDB