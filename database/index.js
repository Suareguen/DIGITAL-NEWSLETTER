const { Sequelize } = require('sequelize')

const connection = new Sequelize(process.env.DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
	host: process.env.HOST,
	dialect: process.env.DIALECT,
	port: process.env.DB_PORT,
	logging: false,
})

async function checkConnection() {
	try {
		await connection.authenticate()
		console.log('Connection to DB has been established successfully.')
	} catch (error) {
		throw error
	}
}

async function syncModels(value) {
	const state = {
		alter: { alter: true },
		force: { force: true },
	}
	try {
		await connection.sync(state[value] || '')
		console.log(`All models were synchronized successfully using sync(${JSON.stringify(state[value]) || ''}).`)
	} catch (error) {
		throw error
	}
}


module.exports = { connection, checkConnection, syncModels }