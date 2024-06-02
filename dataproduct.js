const express = require('express');
const multer = require('multer');
const DataProduct = require('../models/DataProduct');
const jwt = require('jsonwebtoken');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), async (req, res) => {
    const { name, description, price } = req.body;
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const dataProduct = new DataProduct({
        name,
        description,
        price,
        filePath: req.file.path,
        uploadedBy: decoded.id
    });

    try {
        await dataProduct.save();
        res.status(201).json({ message: 'Data product uploaded successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const dataProducts = await DataProduct.find().populate('uploadedBy', 'username');
        res.json(dataProducts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
