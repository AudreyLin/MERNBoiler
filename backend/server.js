const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');

//Dotenv Config & Load Environment Variables
dotenv.config({ path: '../config/.env'});

const app = express();

app.get('/', (req, res) => res.send('Express API Running'));

app.use(cors());

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(morgan('dev'));

//Define your routes

//Route Middleware

//Error Handling Function (Keep This Last)
app.use((error, req, res, next) => {
    if(res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || 'A known error occurred!'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Express is listening to port ${PORT}`));