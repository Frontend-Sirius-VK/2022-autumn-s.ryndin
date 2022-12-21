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


app.get('/api/getQuestionsData', async (req,res) => {
    try {
        const result = await db.getQuestions();
      
        if (!result) {
            res.status(500).end();
        }

        res.json(result);
    } catch (err) {
        res.status(500).end();
    }
});

app.get('/api/getQuestionData/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await db.getQuestionData(id);

        if (isNaN(id)) {
            res.status(400).end();
        }

        if (result.length === 0) {
            res.status(404).end();
        }

        if (!result) {
            res.status(500).end();
        }

        res.json(result);
    } catch (err) {
        res.status(500).end();
    }
});

app.post('/api/createQuestion', async (req, res) => {
    try {
        const newQuestion = await db.createQuestion(req);
        res.json(newQuestion);
        return res;
    } catch (err) {
        res.status(500).end();
    }
});

app.put('/api/editQuestion', async (req, res) => {
    try {
        const updQuestion = await db.editQuestion(req);
        res.json(updQuestion);
        return res;
    } catch (err) {
        res.status(500).end();
    }
});

app.delete('/api/deleteQuestion/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const dltQuestion = await db.deleteQuestion(id);

        if (res.status(200)) {
            res.send('Deleted');
        }
    } catch (err) {
        res.status(500).end();
    }
});

app.listen(port, function() {
    console.log(`Server listening port ${port}`);
});
