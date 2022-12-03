'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('dev'));
app.use(express.static('.'));

const port = process.env.PORT || 3030;

const db = require('./src/dataBase.js')

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
})

app.get('/login', (req,res) => {
    // TODO
})

app.get('/question', async (req,res) => {
    const result = await db.getQuestions();
    res.json(result);
})

app.listen(port, function() {
    console.log(`Server listening port ${port}`);
})
