import mongoose from 'mongoose';

const mongoURI = 'mongodb://localhost:27017/order_db'; 


mongoose.connect(mongoURI, {})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));