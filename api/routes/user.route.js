const router = require('express').Router()
const {
    getAllUsers,
    getOneUser,
    getOneUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/user.controller')


router.get('/byName', getOneUser)
router.get('/', getAllUsers)
router.get('/:userId', getOneUserById)
router.post('/', createUser)
router.put('/:userId', updateUser)
router.delete('/:userId', deleteUser)

module.exports = router