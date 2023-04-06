const router = require('express').Router()
const {
    getAllDonations,
    getOneDonationById,
    updateDonation,
    deleteDonation,
    createDonation
} = require('../controllers/donation.controller')
const { checkAuth } = require('../middlewares/auth')


//Routes used by Admin
router.get('/', )
router.get('/:userId', )
router.post('/',checkAuth, createDonation)
router.put('/:userId', )
router.delete('/:userId', )


module.exports = router