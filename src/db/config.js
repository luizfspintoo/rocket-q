const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

module.exports = async function () {
    const db = await open({
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database
    });

    return db;
};
