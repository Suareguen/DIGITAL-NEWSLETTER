const router = require('express').Router()
const {
    getAllCategories,
    getOneCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/category.controller')
const { checkAuth } = require('../middlewares/auth')


//Routes used by Admin
router.get('/', getAllCategories)
router.get('/:categoryId', getOneCategoryById)
router.post('/',checkAuth, createCategory)
router.put('/:categoryId', updateCategory)
router.delete('/:categoryId', deleteCategory)

module.exports = router