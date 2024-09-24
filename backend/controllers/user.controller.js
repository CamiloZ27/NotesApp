const User = require('../schemas/user.schema')

const getUsers = async (req, res) => {

    try {

        const users = await User.find()

        if (users.length === 0) {

            res.status(204)
            return res.send()
        }

        res.status(200)
        res.json(users)
    } catch (error) {

        res.status(500)
        res.send({
            message: 'Internal Server Error',
            error: error.message
        })
    }
}

const getUserInfo = async (req, res) => {

    try {

        const userData = await User.findOne({username: req.params.username})

        if (!userData) {

            res.status(500)
            return res.send({
                message: 'Internal Server Error',
                error: 'Error searching user data'
            })
        }

        res.status(200)
        res.send(userData)
    } catch (error) {

        res.status(500)
        res.send({
            message: 'Internal Server Error',
            error: error.message
        })
    }
}

module.exports = {
    getUsers,
    getUserInfo,
}