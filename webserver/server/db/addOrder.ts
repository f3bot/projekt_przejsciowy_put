import mongoose from 'mongoose';
import { Types } from 'mongoose';
import Order from '../models/order';

const MONGO_URI = 'mongodb://localhost:27017/order_db';

async function addTestOrder(): Promise<void> {
    try {
        await mongoose.connect(MONGO_URI);

        const testItems = [
            {
                item: new Types.ObjectId('681e0414e7ed64b2db519de6'),
                quantity: 2
            },
        ];

        const newOrder = new Order({
            items: testItems,
            status: 'pending' 
        });

        const savedOrder = await newOrder.save();
        console.log('Order saved:', savedOrder);
    } catch (error) {
        console.error('Error creating order:', error);
    } finally {
        await mongoose.disconnect();
    }
}

addTestOrder();
