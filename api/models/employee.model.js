const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const Employee = connection.define(
	'employee',
	{
		name: {
			type: DataTypes.STRING,
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
        password: {
			type: DataTypes.STRING,
			allowNull: false,
            validate: {
                notEmpty: true
            }
		},
        phone: {
			type: DataTypes.INTEGER,
			allowNull: false,
            validate: {
                notEmpty: true
            }
		},
		salary: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
		role: {
            type: DataTypes.ENUM('admin', 'editor', 'moderator'),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    },
    {timestamps: false}
)






module.exports = Employee