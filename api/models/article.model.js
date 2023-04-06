const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const Article = connection.define(
	'article',
	{
		title: {
			type: DataTypes.STRING,
			allowNull: false,
            validate: {
                notEmpty: true
            }
		},
		content: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    },
    {timestamps: false}
)






module.exports = Article