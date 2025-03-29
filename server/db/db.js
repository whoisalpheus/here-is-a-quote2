// Pool setup
const Pool = require('pg').Pool
const path = require('path')
// require('dotenv').config({ path: path.join(__dirname, '..', '.env')})

const pool = new Pool({
    user: process.env.PG_USER,
    password: String(process.env.PG_PASSWORD),
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    ssl: process.env.PG_SSL === 'true'
        ? { rejectUnauthorized: false }
        : false
    // Needed???:
    // const isProduction = process.env.NODE_ENV === 'production'
    // ssl: isProduction ? { rejectUnauthorized: false } : false
})

module.exports = pool