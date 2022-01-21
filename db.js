const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "JekaPl1968",
    host: "localhost",
    port: "6000",
    database: "node_postgres"
})

module.exports = pool