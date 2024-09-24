const User = require('../schemas/user.schema')

const login = async (req, res) => {

    try {

        const userData = await User.findOne({
            $or: [
                {username: req.params.username},
                {email: req.params.username}
            ],
            password: req.params.password
        })

        if (!userData) {

            res.status(404)
            return res.send({
                message: 'Bad Request',
                error: 'Username, email or password incorrect'
            })
        }

        res.status(200)
        res.send({userData})

    } catch (error) {

        res.status(500)
        res.send({
            message: 'Internal Server Error',
            error: error.message
        })
    }
}

const createUser = async (req, res) => {

    try {

        const {name, username, email, password} = req.body
        const user = {
            name: name,
            username: username,
            email: email,
            password: password
        }

        console.log(user)

        const existingEmail = await User.findOne({email: user.email})

        if (existingEmail) {

            res.status(409)
            return res.send({
                message: 'Conflict',
                error: 'Email already registered'
            })
        }

        const existingUsername = await User.findOne({username: user.username})

        if (existingUsername) {

            res.status(409)
            return res.send({
                message: 'Conflict',
                error: 'Username not allowed, is already taken'
            })
        }

        const newUser = new User(user)

        await newUser.save(newUser)

        res.status(201)
        res.send({
            message: 'User Created Successfully',
            user: newUser
        })

    } catch (error) {

        res.status(500)
        res.send({
            message: 'Internal Server Error',
            error: error.message
        })
    }
}


module.exports = {
    login,
    createUser
}