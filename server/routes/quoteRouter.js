const { Router } = require('express')
const quoteRouter = Router()
const quoteController = require('../controllers/quoteController')

// Route for getting random quote
quoteRouter.get('/', quoteController)

// Route for getting quote by category
quoteRouter.get('/:category', quoteController)

module.exports = quoteRouter