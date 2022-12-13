'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const body = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(express.static('.'));
app.use(body.json());

const port = process.env.PORT || 3030;

const db = require('./src/database.js');

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/questions/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/getQuestionsData', async (req,res) => {
    const result = await db.getQuestions();
    res.json(result);
});

app.get('/getQuestionData/:id', async (req, res) => {
    const id = req.params.id;
    const result = await db.getQuestionData(id);
    res.json(result);
});

app.post('/createQuestion', async (req, res) => {
    const newQuestion = await db.createQuestion(req);
    res.json(newQuestion);
    return res;
});

app.put('/editQuestion', async (req, res) => {
    const updQuestion = await db.editQuestion(req);
    res.json(updQuestion);
    return res;
});

app.delete('/deleteQuestion/:id', async (req, res) => {
    const id = req.params.id;
    const dltQuestion = await db.deleteQuestion(id);
    res.json(dltQuestion);
});

app.listen(port, function() {
    console.log(`Server listening port ${port}`);
});
