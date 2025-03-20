const pool = require('../db/db')

const quoteController = async (req, res) => {
    try {
        const category = req.params.category
        console.log('Received req with category: ', category)

        const query = 'SELECT * FROM quotes_tbl WHERE category = $1 ORDER BY RANDOM() LIMIT 1'
            // all quotes ? : 'SELECT * FROM quotes_tbl ORDER BY RANDOM() LIMIT 1'

        const result = await pool.query(query, [category])
            // ? : await pool.query(query)

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'No quotes found for this category'})
        }

        res.json(result.rows[0])
        console.log(result.rows[0])
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Server error'})
    }
}

module.exports = quoteController