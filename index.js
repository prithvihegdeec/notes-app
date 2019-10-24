const express = require('express')
const configureDB = require('./config/database') //to connect the database
const cors = require('cors')
const router = require('./config/routes')

const app = express()
const port = 3005

configureDB()

app.use(express.json())
app.use(cors())


app.use('/', router)

app.listen(port, () => {
    console.log('listening on port', port)
})




