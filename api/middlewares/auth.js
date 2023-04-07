const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const Employee = require('../models/employee.model')

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
const checkEmployeeAuth = (req, res, next) => {
    const token = req.headers.token
    jwt.verify(token, 'secret', async (err, payload) => {
        if (err) {
            return res.status(400).send('Token not found')
        }
        const employee = await Employee.findOne({
            where:
            {
                email: payload.email
            }
        })
        res.locals.employee = employee
        if (!employee) {
            return res.status(400).send('Invalid token')
        }
        next()
    })
}


const checkEditor = (req, res, next) => {
    if (res.locals.employee.role === 'editor' || res.locals.employee.role === 'admin') {
        next()
    } else {
        res.status(401).send('This is just for Editors!')
    }
}

module.exports = {
    checkAuth,
    checkEditor,
    checkEmployeeAuth
}