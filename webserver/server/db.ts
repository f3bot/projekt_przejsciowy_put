import mongoose from "mongoose";
import addItem from "./db/addItem";

const mongoURI = 'mongodb://localhost:27017/order_db'; 


mongoose.connect(mongoURI, {})
.then(() => console.log("MongoDB connected"))
.catch((err : any)=> console.error("MongoDB connection error:", err));

addItem('LED Light Bulb 2', "LED-001-005-01", 1, "Rack1-Slot3","Household");