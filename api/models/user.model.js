const { DataTypes } = require('sequelize')
const { connection } = require('../../database')


const User = connection.define(
	'user',
)


module.exports = User