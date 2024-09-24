const express = require('express');
const app = express()
const cors = require('cors')

const corsOptions = {
    origin: 'http://localhost:3000'
}

app.use(express.json())
app.use(cors(corsOptions))

require('dotenv').config({ path: './config/.env.dev' });
const port = process.env.PORT

const routes = require('../routes/index.routes')
app.use('/', routes)

require('../config/database')

try {

    app.listen(port, () => {
        console.log(`Server Running on port [${port}]`)
    })
} catch {

    console.log("Server not running")
}