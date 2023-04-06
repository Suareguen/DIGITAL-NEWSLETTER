const router = require('express').Router()

router.use('/user', require('./user.route'))
router.use('/auth', require('./auth.route'))
router.use('/donation', require('./donation.route'))
router.use('/comment', require('./comment.route'))
router.use('/article', require('./article.route'))





module.exports = router