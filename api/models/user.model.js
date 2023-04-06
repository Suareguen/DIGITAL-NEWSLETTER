const { DataTypes } = require('sequelize')
const { connection } = require('../../database')


const User = connection.define(
	'user',
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
            validate: {
                notEmpty: true
            }
		},
		username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
		password: {
			type:DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
        email: {
            type: DataTypes.STRING,
            validate: {
                is: {
                    args: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    msg: "Error: Wrong email format."
                }
            }
        },
        phone: {
			type: DataTypes.INTEGER,
        },
		subscribed: {
			type: DataTypes.BOOLEAN,
			toDefaultValue: false
		},
    },
	{timestamps: false}
)


module.exports = User