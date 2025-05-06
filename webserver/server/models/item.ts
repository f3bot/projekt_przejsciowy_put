const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sku: {
        type: String,
        unique: true,
        required: true
    }, //Stock keeping unit - unique identifier - example: "LED Light Bulb 5W" - SKU = "LED-5W-001"
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    location: {
        type: String,
        required: true // e.g., "Rack-1-Slot-3" 3 piętra 4 sekcje
    },
    category: {
        type: String
    }, //TODO: Wymyślic kategorie
    lastUpdated: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Item', ItemSchema);
