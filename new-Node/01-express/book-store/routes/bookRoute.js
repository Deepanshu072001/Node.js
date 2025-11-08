const express = require('express');
const {BOOKS} = require('../db/book');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res) => {
    res.setHeader('x-custom', 'custom header'); // --> to create a custom header
    res.json(BOOKS);
});

router.get('/:id', (req, res) => {
const id = req.params.id;

const book = BOOKS.find((e) => e.id == id);

if(!book ) return res
    .status(404)
    .json({error: `Book with id ${id} does not exists`});
    return res.json(book);
});

router.post('/', (req, res) => {
    const {title, author} = req.body;

    if(!title || title === '')
        return res.status(400).json({ error: 'title is required'});

    if(!author || author === '')
        return res.status(400).json({ error: 'author is required'});

    const id = BOOKS.length + 1;

    const book = { id, title, author };
    BOOKS.push(book);

    return res.status(201).json({message : "Book created successfully:", id});
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if(isNaN (id))
        return res.status(400).json({error: 'id must be of number type'});

    const indexToDelete = BOOKS.findIndex(e => e.id === id)

    if (indexToDelete < 0)
        return res
         .status(404)
         .json({ error: `Book with id ${id} doesn't exists!! `});

    BOOKS.splice(indexToDelete, 1);

    return res.status(200).json({ message: ' book deleted '});
});

// Catch invalid routes (404)
router.use((req, res) => {
  const errorMessage = `Cannot ${req.method} ${req.path}`;
  const log = `\n[${Date.now()}] ERROR: ${errorMessage}`;
  fs.appendFile('logs.txt', log, 'utf-8', (err) => {
    if (err) console.error('Error writing log:', err);
  });
  res.status(404).json(`${errorMessage}`);
});

//Global error handler (in case of server-side errors)
router.use((err, req, res, next) => {
  const log = `\n[${Date.now()}] SERVER ERROR: ${err.message}`;
  fs.appendFile('logs.txt', log, 'utf-8', (e) => {
    if (e) console.error('Error writing log:', e);
  });
  res.status(500).json({ error: 'Internal Server Error' });
});



module.exports = router;