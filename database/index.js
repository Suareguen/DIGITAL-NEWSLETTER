const  { Sequelize } = require('sequelize')


//Realizamos la conección a la base de datos por medio de la documentación de Sequelize
const connection = new Sequelize(process.env.DB_NAME, 'root', process.env.DB_PASSWORD, {
	host: process.env.DB_HOST,
	dialect: process.env.DIALECT,
	port: process.env.DB_PORT,
	logging: false,
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
        throw error
    }
}

module.exports = {
    connection,
    checkConnection,
    syncModels
}