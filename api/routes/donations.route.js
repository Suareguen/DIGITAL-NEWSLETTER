const router = require('express').Router()
const { createDonation, getAllDonations, getDoantionById, updateDonation, deleteDonation  } = require('../controllers/donations.controller')

//Routes used by Admin
router.get('/', getAllDonations)
router.get('/:donationId', getDoantionById)
router.post('/',createDonation)
router.put('/:donationId', updateDonation)
router.delete('/:donationId', deleteDonation)




module.exports = router