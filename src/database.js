const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'StackOverflow',
    password: '123',
    port: '999'
})

async function getQuestions() {
    try {
        const result = await pool.query('select * from question');
        return result.rows;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getQuestions
}

