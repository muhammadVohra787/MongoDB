var Product = require('../models/products.model.js');
const mongoose = require('mongoose');
var Categories = require('../models/categories.model.js');

async function initializeProducts() {
    const products = [
        {
            name: 'Hoodies',
            description: 'Great for winter and fall!',
            price: 24.99,
            quantity: 10,
            category: 'Teens'
        },
        {
            name: 'T-Shirt',
            description: 'amazing quality, stretchable and comfortable',
            price: 24.99,
            quantity: 10,
            category: 'Men'
        }, 
        {
            name: 'Trousers',
            description: 'amazing quality, stretchable and comfortable',
            price: 14.99,
            quantity: 10,
            category: 'Men'
        },
        {
            name: 'Dress',
            description: 'amazing quality, slim-fit and comfortable',
            price: 29.99,
            quantity: 10,
            category: 'Women'
        },
        {
            name: 'Sweats',
            description: 'comfortable, great fabric',
            price: 49.99,
            quantity: 10,
            category: 'Teens'
        }
    ];

    for (const categoryName of products) {
        const existingProduct = await Product.findOne({ name: categoryName.name});
        if (!existingProduct) { 
            await Product.create({
                name: categoryName.name,
                description: categoryName.description,
                price: categoryName.price,
                quantity: categoryName.quantity,
                category: categoryName.category
            });
        }
    }
}

module.exports = initializeProducts; 