const pool = require('../db/db')
const quotes = require('./quotes')

const seedDB = async () => {
    try {
        for (const quote of quotes) {
            await pool.query(
                'INSERT INTO quotes_tbl(quote_text, author, category) VALUES($1, $2, $3)',
                [quote.text, quote.author, quote.category]
            )
        }
        console.log('Database seeded successfully')
    } catch (err) {
        console.error('Error seeding database', err)
    } finally {
        pool.end()
    }
}
seedDB()