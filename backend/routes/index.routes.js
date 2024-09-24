const express = require('express');
const router = express.Router()

const userRoutes = require('./user.routes')
const authRoutes = require('./auth.routes')

router.use('/api/v1/user', userRoutes)
router.use('/api/v1/auth', authRoutes)

router.get('/', (req, res) => {

    res.send(`
        <body style="background-color: #000000; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0;"> 
            <h1 style="color: #FFFFFF; text-align: center;">Welcome to the Backend Host</h1>
        </body>
    `)

    console.log('Route Root Generated')
})

module.exports = router