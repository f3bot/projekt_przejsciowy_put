import express, { Request, Response } from "express";
import path from "path";
import mongoose from "mongoose";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import itemRoutes from './routes/items'
import orderRoutes from './routes/orders'

const app = express();
const port = 3000;


const mongoURI = 'mongodb://localhost:27017/order_db'; 
app.use(express.json());
mongoose.connect(mongoURI, {})
.then(() => console.log("MongoDB connected"))
.catch((err : any)=> console.error("MongoDB connection error:", err));
app.use(express.static(path.join(__dirname, '../s7-webserver-client/dist')));


//API ROUTES
app.get('/', (req : Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../s7-webserver-client/dist/src/views/index/index.html'));
});

app.use('/items', itemRoutes);

app.use('/orders', orderRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
