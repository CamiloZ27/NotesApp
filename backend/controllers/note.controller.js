const Note = require('../schemas/note.schema')

const getUserNotes = async (req, res) => {

    try {

        console.log(req.params)

        const notes = await Note.find({userId: req.params.userId})

        if (notes.length === 0) {
            res.status(204)
            return res.send([])
        }

        console.log(notes)

        res.status(200)
        res.send(notes)

    } catch (error) {

        res.status(500)
        res.send({
            message: 'Internal Server Error',
            error: error.message
        })
    }
}

module.exports = {

    getUserNotes
}