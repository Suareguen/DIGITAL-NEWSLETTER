const router = require('express').Router()
const {
    getAllComments,
    getOneCommentById,
    updateComment,
    deleteComment,
    createComment
} = require('../controllers/comment.controller')
const { checkAuth } = require('../middlewares/auth')


//Routes used by Admin
router.get('/', getAllComments)
router.get('/:commentId', getOneCommentById)
router.post('/',checkAuth, createComment)
router.put('/:commentId', updateComment)
router.delete('/:commentId', deleteComment)

module.exports = router