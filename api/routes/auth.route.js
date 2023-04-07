const router = require('express').Router()
const {signUp, login, employeeLogin } = require('../controllers/auth.controller')

router.post('/signUp', signUp)
router.post('/logIn', login)
router.post('/employeeLogIn', employeeLogin)


module.exports = router