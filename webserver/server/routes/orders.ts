import { Router, Request, Response } from "express";
import order from "../models/order";
import mongoose from "mongoose";


const router = Router();

router.get('/all', async (req: Request, res: Response) =>{
    try{
        const entry = await order.find()
        res.send(entry)
    }
    catch(err){
        res.send(500).json({err: "Failed to retrieve all orders", details: err})
    }
});

router.get('/:orderID', async (req: Request, res: Response) =>{
    try{
        const {orderID} = req.params;
        const entry = await order.findById(orderID);
        res.send(entry)
    }catch(err){
        res.send(500).json({err: "Failed to retrieve order by ID", details: err});
    }
});

router.delete('/:orderID', async (req: Request, res: Response) =>{
    try{
        const {orderID} = req.params;
        const entry = await order.findByIdAndDelete(orderID);
        res.send(entry);
    }catch(err){
        res.send(500).json({err: "Failed to delete order by ID", details: err});
    }
});


router.post('/new', async (req: Request, res: Response) => {
    try {
        const orderDetails = req.body;

        const orderedItemsList = Object.values(orderDetails).map((entry: any) => ({
            item: new mongoose.Types.ObjectId(entry.name),
            quantity: entry.quantity
        }));

        const newOrder = new order({
            items: orderedItemsList,
            customerName: 'Test Customer'
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ error: 'Failed to create order' });
    }
});


export default router