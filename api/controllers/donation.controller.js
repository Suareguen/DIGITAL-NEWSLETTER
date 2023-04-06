const Donation = require('../models/donation.model')
const User = require('../models/user.model')


async function getAllDonations(req, res) {
    try {
        const donations = await Donation.findAll() 
        if(donations) {
            return res.status(200).json(donations)
        } 
        else {
        return res.status(404).send('No Donations found')
    }
    } catch (error) {
        res.status(500).send(error.message)
    }
}



async function getOneDonationById(req, res) {
    try {
        const donation = await Donation.findByPk(req.params.donationId)
        if(donation) {
            return res.status(200).json(donation)
          } 
        else {
            return res.status(404).send('No Donations found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}



async function createDonation(req, res) {
    try {
        const user = await User.findOne({
            where: {
                id: res.locals.user.id
            }
        })
        const donation = user.createDonation({
            payment_method: req.body.payment_method,
            message: req.body.message,
            amount: req.body.amount,
            userId: res.locals.user.id
        })
        return res.status(200).json({ message: 'Donation created', donation: {
            payment_method: req.body.payment_method,
            message: req.body.message,
            amount: req.body.amount,
            userId: res.locals.user.id
        } })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateDonation(req, res) {
    try {
        const [update] = await Donation.update(req.body, {
            where: {
                id: req.params.donationId
            }
        })
        if(update) {
            return res.status(200).json({ message: 'Donation updated' })
            
        }
        else {
			return res.status(404).send('Donation not found or already updated')
		}
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteDonation(req, res) {
    try {
        const donations = await Donation.destroy({
            where: {
                id: req.params.donationId
            }
        })
        if (donations) {
			return res.status(200).json('Donation deleted')
		} else {
			return res.status(404).send('Donation not found')
		}
    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports = {
    getAllDonations,
    getOneDonationById,
    updateDonation,
    deleteDonation,
    createDonation
}