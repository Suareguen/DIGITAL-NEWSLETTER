const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const checkAuth = (req, res, next) => {
    const token = req.headers.token
    jwt.verify(token, 'secret', async (err, payload) => {
        if (err) {
            return res.status(400).send('Token not found')
        }
        const user = await User.findOne({
            where:
            {
                email: payload.email
            }
        })
        res.locals.user = user
        if (!user) {
            return res.status(400).send('Invalid token')
        }
        next()
    })
}

module.exports = {
    checkAuth
}