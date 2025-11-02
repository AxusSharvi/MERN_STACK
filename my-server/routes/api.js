const express = require('express');
const router = express.Router();
const Books = require('../models/books')

// --- Define API Routes ---
router.get('/books', async(req, res) =>{
  try {
      const findBook = await Books.find();
      res.json(findBook);
  }catch(err){
    res.status(500).json({ message: err.message});
  }
});

router.post('/books', async(req, res) =>{
  const newBook = new Books({
    name: req.body.name,
    description: req.body.description
  });
  try{
    const saveBook = await newBook.save();
    res.status(201).json(saveBook);
  }catch (err){
    res.status(400).json({ message: err.message});
  }
});



module.exports = router;