const mongoose = require('mongoose');
const uri = process.env.MONGO_URI

async function connect() {

    try {

        await mongoose.connect(uri)

        console.log('Database Connected Successfully')
    }
    catch (error) {

        console.log('Database Connection Error: ' + error)
    }
    
}

connect()