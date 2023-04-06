const Donations = require('../models/donations.model')



async function getAllDonations(req, res) {
    try {
       const donations = await Donations.findAll() 
       if(donations) {
        return res.status(200).json(donations)
       } else {
        return res.status(404).send('No donations found')
       }
    } catch (error) {
        res.status(500).send(error.message)
    }
}


async function getDoantionById(req, res) {
    try {
       const donations = await Donations.findByPk(req.params.donationId) 
       if(donations) {
        return res.status(200).json(donations)
       } else {
        return res.status(404).send('No donations found')
       }
    } catch (error) {
        res.status(500).send(error.message)
    }
}



async function createDonation(req, res) {
    try {
        const donation = await Donations.create(req.body)
        return res.status(200).json({ message: 'User created', donation: donation })
    } catch (error) {
        res.status(500).send(error.message)
    }
}


async function updateDonation(req, res) {
    try {
        const [update] = await Donations.update(req.body, {
            where: {
                id: req.params.donationId
            }
        })
        console.log(update)
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
        const user = await Donations.destroy({
            where: {
                id: req.params.donationId
            }
        })
        if (user) {
			return res.status(200).json('Donation deleted')
		} else {
			return res.status(404).send('Donation not found')
		}
    } catch (error) {
        res.status(500).send(error.message)
    }
}



module.exports = {
    createDonation,
    getAllDonations,
    getDoantionById,
    updateDonation,
    deleteDonation
}