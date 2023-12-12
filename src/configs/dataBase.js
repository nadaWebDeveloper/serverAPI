import mongoose from 'mongoose'

import { dev } from './index.js'


export const connectDB = async () => {

try {
    await mongoose.connect(dev.db.url)
    console.log('Database connected')

} catch (error) {
    console.error(`MongoDB connection error: ${error}`)
}}
