const router = require('express').Router()
const {
    getAllTags,
    getOneTagById,
    createTag,
    updateTag,
    deleteTag
} = require('../controllers/tag.controller')
const { checkAuth } = require('../middlewares/auth')


//Routes used by Admin
router.get('/', getAllTags)
router.get('/:tagId', getOneTagById)
router.post('/',checkAuth, createTag)
router.put('/:tagId', updateTag)
router.delete('/:tagId', deleteTag)

module.exports = router