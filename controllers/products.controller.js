//products.controller.js
const express = require('express');
const app = express();
const Products = require('../models/products.model.js');
app.use(express.json());
var Categories = require('../models/categories.model.js');
const mongoose = require('mongoose');

exports.find = async (req, res) => {
    try {
        const keyword = req.query.name;
        const result = keyword ? keyword.toString().replace(/\[|\]/g, '') : '';
        if (result) {
            const products = await Products.find({ name: { $regex: result, $options: 'i' } });
            res.json({ success: true, data: products });
        } else {
            const products = await Products.find();
            res.json({ success: true, data: products });
        }
    } catch (error) {
        console.error('Error retrieving products:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error', message: error.message });
    }
};

exports.find.id = async (req, res) => {
    try {
        const product = await Products.findById(req.params.id);
        res.json({ product });
    } catch (error) {
        console.error('Error retrieving product by ID:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error', message: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        if (req.body === null || req.body === undefined) {
        const defaultValues = {
            name: 'New Arrival Product',
            description: 'Coming Soon',
            price: 0,
            quantity: 0,
            category: 'Teens',
        };

        req.body = defaultValues;
    }
        const newProduct = await Products.create(req.body);
        res.json({ success: true, data: newProduct });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error', message: error.message });
    }
};

exports.delete = {
    byId: async (req, res) => {
        try {
            await Products.findByIdAndDelete(req.params.id);
            res.json({ success: true });
        } catch (error) {
            console.error('Error deleting product by ID:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error', message: error.message });
        }
    },

    deleteMany: async (req, res) => {
        try {
            await Products.deleteMany({});
            res.json({ success: true });
        } catch (error) {
            console.error('Error deleting all products:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error', message: error.message });
        }
    },
};

exports.update = async (req, res) => {
    try {
        const product = await Products.findById(req.params.id);
        res.json({ product });
    } catch (error) {
        console.error('Error retrieving product by ID:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error', message: error.message });
    }
};

exports.updateById = async (req, res) => {
    try {
        const productId = req.params.id;
        const updates = req.body;

        const updatedProduct = await Products.findByIdAndUpdate(productId, updates, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }

        res.json({ success: true, data: updatedProduct });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error', message: error.message });
    }
};
