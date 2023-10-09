const initializeCategories = require('../initialization/categories');
const initializeProducts = require('../initialization/products');
const mongoose = require('mongoose');

async function initializeDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Marketplace', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
 
        console.log('Connected to MongoDB');
        
        await initializeCategories(); 
        await initializeProducts();  

        console.log('Product initialization completed.');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
 
initializeDatabase();
