//Importar aqui los modelos
const User = require('../api/models/user.model')
const Donations = require('../api/models/donations.model')


function addRelationsToModels() {
    try {
        //One to many 
        //User-Donations
        User.hasMany(Donations)
        Donations.belongsTo(User)
    } catch (error) {
        throw error
    }
}

module.exports = addRelationsToModels