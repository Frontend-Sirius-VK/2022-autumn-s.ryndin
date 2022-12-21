const Pool = require('pg').Pool;
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.HOST || 'localhost',
    database: process.env.APP_NAME,
    password: process.env.PASSWORD,
    port: process.env.POSTGRES_PORT
})

async function getQuestions() {
    try {
        const result = await pool.query('select * from question;');
        return result.rows;
    } catch (err) {
        console.log(err);
    }
}

async function getQuestionData(id) {
    try {
        const result = await pool.query('select title, excerp from question where id = $1;', [id]);
        return result.rows;
    } catch (err) {
        console.log(err);
    }
}

async function createQuestion(req) {
    try {
        const {stats, title, excerp} = req.body;
        const result = await pool.query('insert into question(stats,title,excerp) values ($1, $2, $3) returning *;', [stats, title, excerp]);
        return result.rows;
    } catch (err) {
        console.log(err);
    }
}

async function editQuestion(req) {
    try {
        const {title, excerp, id} = req.body;
        const result = await pool.query('update question set title = $1, excerp = $2 where id = $3 returning *;', [title, excerp, id]);
        return result.rows;
    } catch (err) {
        console.log(err);
    }
}

async function deleteQuestion(id) {
    try {
        const result = await pool.query('delete from question where id = $1 returning *',[id]);
        return result.body;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getQuestions,
    getQuestionData,
    createQuestion,
    editQuestion,
    deleteQuestion
}

