const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const Category = connection.define(
	'category',
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
            validate: {
                notEmpty: true
            }
		}
    },
    {timestamps: false}
)






module.exports = Category