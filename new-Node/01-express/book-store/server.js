const express = require('express');
const bookRouter = require('./routes/bookRoute');
const {loggerMiddleware} = require('./Middlewares/logger')

const app = express();
const PORT = 8001;

// Middleware (Plugins)

app.use(express.json()); // -->> Converts incoming JSON requests to JS objects..
app.use (loggerMiddleware);
//app.use(customMiddleware);

// Routes
app.use('/books', bookRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});