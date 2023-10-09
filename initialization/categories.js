var Categories = require('../models/categories.model.js');
const mongoose = require('mongoose');
async function initializeCategories() {
    const initialCategories = ['Teens', 'Women', 'Men'];
 
    for (const categoryName of initialCategories) {
        const existingCategory = await Categories.findOne({ name: categoryName });
        if (!existingCategory) {
            await Categories.create({ name: categoryName });
        }
    }

    console.log('Categories initialization completed.');
}
module.exports = initializeCategories;