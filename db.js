const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password: "sqlshad0",
    host: "localhost",
    port: 5432,
    database: "motoflexbd"
    
});

module.exports = pool;