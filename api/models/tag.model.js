const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const Tag = connection.define(
	'tag',
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






module.exports = Tag