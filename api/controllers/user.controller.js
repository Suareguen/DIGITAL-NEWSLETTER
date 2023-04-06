const User = require('../models/user.model')

async function getAllUsers(req, res) {
    try {
        const users = await User.findAll() 
        if(users) {
            return res.status(200).json(users)
        } 
        else {
        return res.status(404).send('No users found')
    }
    } catch (error) {
        res.status(500).send(error.message)
    }
}


async function getOneUser(req, res) {
    try {
        const name = req.query.name
        const user = await User.findOne({
            where: {name}
        })
        if(user) {
            return res.status(200).json(user)
          } 
        else {
            return res.status(404).send('No users found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}


async function getOneUserById(req, res) {
    try {
        const user = await User.findByPk(req.params.userId)
        if(user) {
            return res.status(200).json(user)
          } 
        else {
            return res.status(404).send('No users found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}



async function createUser(req, res) {
    try {
        const user = await User.create(req.body)
        return res.status(200).json({ message: 'User created', user: user })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateUser(req, res) {
    try {
        const [update] = await User.update(req.body, {
            where: {
                id: req.params.userId
            }
        })
        console.log(update)
        if(update) {
            return res.status(200).json({ message: 'User updated' })
        }
        else {
			return res.status(404).send('User not found or already updated')
		}
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteUser(req, res) {
    try {
        const user = await User.destroy({
            where: {
                id: req.params.userId
            }
        })
        if (user) {
			return res.status(200).json('User deleted')
		} else {
			return res.status(404).send('User not found')
		}
    } catch (error) {
        res.status(500).send(error.message)
    }
}



module.exports = {
    getAllUsers,
    getOneUser,
    getOneUserById,
    createUser,
    updateUser,
    deleteUser
}