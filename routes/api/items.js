const express = require('express');
const router = express.Router();

// Item Model
const Item_model = require('../../models/Item');

// @route   POST api/item
// @desc    Add an item
// @access  Public
router.post('/', (req, res) => {
    const newItem = new Item_model({
        name: req.body.name
    });

    newItem.save()
        .then(item => res.json(item));
});

// @route   GET api/item
// @desc    Get All items
// @access  Public
router.get('/', (req, res) => {
    Item_model.find()
        .sort({date: -1})
        .then(item => res.json(item));
});

// @route   DELETE api/item
// @desc    Add an item
// @access  Public
router.delete('/:id', (req, res) => {
    Item_model.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({succuess:true})))
        .catch(err => res.status(404).json({succuess: false}));
});

module.exports = router;