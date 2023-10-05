const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
    name: String
});

// Create a Model
const Categories = mongoose.model('Categories', categoriesSchema);

// Define a Schema
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories'
    }
});

// Create a Model
const Product = mongoose.model('Product', productSchema);

// Set Up the Database connection
mongoose.connect('mongodb://127.0.0.1:27017/Marketplace', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    initializeCategories();
    initializeProducts();
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

async function initializeCategories() {
    const initialCategories = ['Men', 'Women', 'Teens'];

    for (const categoryName of initialCategories) {
        const existingCategory = await Categories.findOne({ name: categoryName });
        if (!existingCategory) {
            await Categories.create({ name: categoryName });
        } else {
            console.log('Duplication Avoided for ' + categoryName);
        }
    }

    console.log('Categories initialization completed.');
}
const productOne = [{
    name: 'Sample Product',
            description: 'This is a sample product',
            price: 19.99,
            quantity: 10,
            category: existingCategory._id
}]


async function initializeProducts() {
    const existingProduct = await Categories.findOne({ name: 'Men' });

    if (existingCategory) {
        await Product.create({
            name: 'Sample Product',
            description: 'This is a sample product',
            price: 19.99,
            quantity: 10,
            category: existingCategory._id
        });

        console.log('Products initialization completed.');
    } else {
        console.error('Category "Men" does not exist. Products not added.');
    }
}

console.log('Application started');
