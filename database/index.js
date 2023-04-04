const  { Sequelize } = require('sequelize')


//Realizamos la conección a la base de datos por medio de la documentación de Sequelize
const connection = new Sequelize(process.env.DIALECT+'://'+process.env.DB_USERNAME+':'+process.env.DB_PASSWORD+'@'+process.env.DB_HOST+':'+process.env.DB_PORT+'/'+process.env.DB_NAME,{
    port: process.env.DB_PORT,
    logging:false

})


async function checkConnection() {
    try {
        await connection.authenticate()
        console.log('Connection to DB Done!')
    } catch (error) {
        throw error
    }
}

async function syncModels() {
    try {
        await connection.sync()
        console.log('All models synchronized succesfully!')
    } catch (error) {
        
    }
}

module.exports = {
    connection,
    checkConnection,
    syncModels
}