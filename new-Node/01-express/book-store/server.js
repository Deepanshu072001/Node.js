const { error } = require('console');
const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 8001;

// In Memory DB
const books = [
    {id: 1, title: 'Book One', author: 'Author One'},
    {id: 2, title: 'Book Two', author: 'Author Two'},
    {id: 3, title: 'Book Three', author: 'Author Three'},
];

function loggerMiddleware (req, res, next) {
    const log = `\n[${ Date.now()}] ${req.method} ${req.path}`;
    fs.appendFileSync('logs.txt', log, 'utf-8', (err) => {
        if (err) console.error('Error writing log:', err);
    });
    next();
};

function customMiddleware (req, res, next) {
    console.log('This is custom middleware');
    next();
};

// Middleware (Plugins)

app.use(express.json()); // -->> Converts incoming JSON requests to JS objects..
app.use (loggerMiddleware);
app.use(customMiddleware);

//Routes
app.get('/books', (req, res) => {
    res.setHeader('x-custom', 'custom header'); // --> to create a custom header
    res.json(books);
});

app.get('/books/:id', (req, res) => {
const id = req.params.id;
const book = books.find((e) => e.id == id);

if(!book ) return res
    .status(404)
    .json({error: `Book with id ${id} does not exists`});
    return res.json(book);
});

app.post('/books', (req, res) => {
    const {title, author} = req.body;

    if(!title || title === '')
        return res.status(400).json({ error: 'title is required'});

    if(!author || author === '')
        return res.status(400).json({ error: 'author is required'});

    const id = books.length + 1;

    const book = { id, title, author };
    books.push(book);

    return res.status(201).json({message : "Book created successfully:", id});
});

app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if(isNaN (id))
        return res.status(400).json({error: 'id must be of number type'});

    const indexToDelete = books.findIndex(e => e.id === id)

    if (indexToDelete < 0)
        return res
         .status(404)
         .json({ error: `Book with id ${id} doesn't exists!! `});

    books.splice(indexToDelete, 1);

    return res.status(200).json({ message: ' book deleted '});
});

// Catch invalid routes (404)
app.use((req, res) => {
  const errorMessage = `Cannot ${req.method} ${req.path}`;
  const log = `\n[${Date.now()}] ERROR: ${errorMessage}`;
  fs.appendFile('logs.txt', log, 'utf-8', (err) => {
    if (err) console.error('Error writing log:', err);
  });
  res.status(404).json(`${errorMessage}`);
});

//Global error handler (in case of server-side errors)
app.use((err, req, res, next) => {
  const log = `\n[${Date.now()}] SERVER ERROR: ${err.message}`;
  fs.appendFile('logs.txt', log, 'utf-8', (e) => {
    if (e) console.error('Error writing log:', e);
  });
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});