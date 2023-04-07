const router = require('express').Router()

router.use('/user', require('./user.route'))
router.use('/auth', require('./auth.route'))
router.use('/donation', require('./donation.route'))
router.use('/comment', require('./comment.route'))
router.use('/article', require('./article.route'))
router.use('/category', require('./category.route'))
router.use('/employee', require('./employee.route'))
router.use('/tag', require('./tag.route'))






module.exports = router