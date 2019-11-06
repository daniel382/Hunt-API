const express = require('express')
const app = express()
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

const host = '127.0.0.1'
const port = 3000

// db config
mongoose.connect(`mongodb://${host}:27017/nodeapi`, { useNewUrlParser: true, useUnifiedTopology: true })
requireDir('./src/models')

app.use(cors())
app.use(express.json())
app.use('/api', require('./src/routes'))

app.listen(port, host, () => console.log(`Running on http://${host}:${port}`))