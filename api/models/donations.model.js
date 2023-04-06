const { DataTypes } = require('sequelize')
const { connection } = require('../../database')


const Donations = connection.define(
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
		quantity: {
			type: DataTypes.INTEGER,
            allowNull: false,
            validation: {
                notEmpty: true
            }
		},
    },
	{timestamps: false}
)


module.exports = Donations