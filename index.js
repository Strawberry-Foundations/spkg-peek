const express = require('express')
const config = require('./config.json')

// Setup app
const app = express()
app.use(express.json())

// Load config attributes
const port = config.port

const mainRoutes = require('./app/index')
app.use('/', mainRoutes)

app.listen(port, () => {
    console.log(`Running peek on port ${port}`)
    console.log(`peek is now availbe under http://127.0.0.1:${port}`)
})