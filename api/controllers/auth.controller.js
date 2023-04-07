const User = require('../models/user.model')
const Employee = require('../models/employee.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const signUp = async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10)
        const user = await User.create(req.body)
        return res.status(200).json(user)
    } catch (error) {
        console.error(error)
        return res.status(500).send('Error: Cannot create member')
    }
}

const login = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        })
        if (!user) {
            return res.status(500).send('Error: Empty mail or password')
        }
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (!result) {
                return res.status(403).send('Error: Empty mail or password')
            }
            const token = jwt.sign({ email: user.email }, 'secret', { expiresIn: '7h' })
            return res.status(200).json({ token })
        })
    }
    catch (err) {
        console.error(err)
    }
}

const employeeLogin = async (req, res) => {
    try {
        const employee = await Employee.findOne({
            where: {
                email: req.body.email
            }
        })
        if (!employee) {
            return res.status(500).send('Error: Empty mail or password')
        }
        bcrypt.compare(req.body.password, employee.password, (err, result) => {
            if (!result) {
                return res.status(403).send('Error: Empty mail or password')
            }
            const token = jwt.sign({ email: employee.email }, 'secret', { expiresIn: '7h' })
            return res.status(200).json({ token })
        })
    }
    catch (err) {
        console.error(err)
    }
}


module.exports = {
    signUp,
    login,
    employeeLogin
}