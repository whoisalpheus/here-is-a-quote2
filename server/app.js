const express = require('express')
const path = require('path')
require('dotenv').config()
const cors = require('cors')
const morgan = require('morgan')
const indexRouter = require('./routes/indexRouter')
const quoteRouter = require('./routes/quoteRouter')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.use('/', indexRouter)
app.use('/quote', quoteRouter)

// Development NODE_ENV
// if (process.env.NODE_ENV === 'development') {
//     app.use(morgan('dev'))
// }

// Production NODE_ENV
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')))
}
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))

// Listen to port
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Here is a quote app is litening on port ${PORT}`)
})