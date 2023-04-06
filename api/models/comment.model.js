const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const Comment = connection.define(
	'comment',
	{
		title: {
			type: DataTypes.STRING,
			allowNull: false,
            validate: {
                notEmpty: true
            }
		},
		body: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    },
    {timestamps: false}
)






module.exports = Comment