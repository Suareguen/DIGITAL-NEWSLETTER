const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const Donation = connection.define(
	'donation',
	{
		payment_method: {
			type: DataTypes.STRING,
			allowNull: false,
            validate: {
                notEmpty: true
            }
		},
		message: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {timestamps: false}
)

module.exports = Donation