const router = require('express').Router()
const {
    getAllArticles,
    getOneArticleById,
    createArticle,
    updateArticle,
    deleteArticle
} = require('../controllers/article.controller')
const { checkAuth } = require('../middlewares/auth')


//Routes used by Admin
router.get('/', getAllArticles)
router.get('/:articleId', getOneArticleById)
router.post('/',checkAuth, createArticle)
router.put('/:articleId', updateArticle)
router.delete('/:articleId', deleteArticle)

module.exports = router