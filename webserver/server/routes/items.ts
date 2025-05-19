import { Router, Request, Response } from "express";
import item from "../models/item";

const router = Router();

    
router.get('/all', async (req: Request, res: Response) =>{
    try{
        const entry = await item.find()
        res.send(entry); 
    }
    catch(err){
        res.status(500).json({err: "Failed to retrieve all products", details: err});
    }
})  

router.post('/new', async (req: Request, res: Response) => {
    try{
        const itemDetails = req.body;

        const name = itemDetails.name
        const sku = itemDetails.sku
        const quantity = itemDetails.quantity
        const location = itemDetails.location
        const category = itemDetails.category
    
        console.log(name, sku, quantity, location, category);
    
        const newItem = new item({
            name: name,
            sku: sku,
            quantity: quantity,
            location: location,
            category: category
        })
        const result = await newItem.save();
    
        if(!result) {res.status(500).json({error : "Failed to add new item", details: result})}
        console.log(result)
        res.status(200).json({ received: itemDetails });
    }
    catch(err){
        res.status(500).json({error: err})
    }
});


router.post('/update/:itemID/:quantity', async (req: Request, res: Response) : Promise<any>=>{
    try {
        const { itemID } = req.params;
        const { quantity } = req.params; 

    
        const result = await item.findByIdAndUpdate(
          itemID,
          { quantity },
          { new: true }
        );
    
        if (!result) {
          return res.status(404).json({ message: "Item not found" });
        }
    
        res.json({ message: "Item updated", updatedItem: result });
      } catch (err) {
        res.status(500).json({ error: "Failed to update item", details: err });
      }
})

router.delete('/delete/:itemID', async (req:Request, res:Response) =>{
    try{
        const {itemID} = req.params;
        console.log(itemID)
        const result = await item.findByIdAndDelete(itemID)
    
        if(!result){
            res.status(404).json({message: "Item Not found"});
        }
    
        res.json({message: "Item Deleted", deletedItem: result})
    
    }
    catch(err) {
        res.status(500).json({error: "Failed to delete item", details : err})
    }
})

export default router