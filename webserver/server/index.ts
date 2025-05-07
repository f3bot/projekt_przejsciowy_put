import express, { Request, Response } from "express";
import path from "path";
import item from "./models/item";
import mongoose from "mongoose";
import { fileURLToPath } from 'url';
import addItem from "./db/addItem";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const port = 3000;


const mongoURI = 'mongodb://localhost:27017/order_db'; 

mongoose.connect(mongoURI, {})
.then(() => console.log("MongoDB connected"))
.catch((err : any)=> console.error("MongoDB connection error:", err));

app.use(express.static(path.join(__dirname, '../s7-webserver-client/dist')));

app.get('/', (req : Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../s7-webserver-client/dist/src/views/index/index.html'));
});
    
app.get('/products', async (req: Request, res: Response) =>{
    try{
        const entry = await item.find()
        res.send(entry); 
    }
    catch(err){
        res.status(500).json({err: "Failed to retrieve all products", details: err});
    }
})  

app.get('/orders', (req: Request, res: Response) =>{

})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
  