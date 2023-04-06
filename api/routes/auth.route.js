const router = require('express').Router()
const {signUp, login } = require('../controllers/auth.controller')

router.post('/signUp', signUp)
router.post('/logIn', login)

module.exports = router