const router = require('express').Router()
const {
    getAllArticles,
    getOneArticleById,
    createArticle,
    updateArticle,
    deleteArticle,
    commentArticle
} = require('../controllers/article.controller')
const { checkAuth, checkEditor, checkEmployeeAuth } = require('../middlewares/auth')


//Routes used by Admin
router.get('/', getAllArticles)
router.get('/:articleId', getOneArticleById)
router.post('/:articleId/comment', checkAuth, commentArticle)
router.post('/',checkEmployeeAuth,checkEditor, createArticle)
router.put('/:articleId', updateArticle)
router.delete('/:articleId', deleteArticle)

module.exports = router