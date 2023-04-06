const router = require('express').Router()

router.use('/user', require('./user.route'))
router.use('/donations', require('./donations.route'))



module.exports = router