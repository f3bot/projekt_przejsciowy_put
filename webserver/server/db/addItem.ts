import item from "../models/item"

const addItem = async (name: String, sku: String, quantity: number, location: [Number, Number], category: String) =>{
    const newItem = new item({
        name: name,
        sku: sku,
        quantity: quantity,
        location: location,
        category: category
    })
    try {
        const savedItem = await newItem.save();
        console.log('Item added:', savedItem);
    } catch (error) {
        console.error('Error adding item:', error);
    }
}


export default addItem