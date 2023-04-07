const Employee = require('../models/employee.model')

async function getAllEmployees(req, res) {
    try {
        const employees = await Employee.findAll() 
        if(employees) {
            return res.status(200).json(employees)
        } 
        else {
        return res.status(404).send('No Employees found')
    }
    } catch (error) {
        res.status(500).send(error.message)
    }
}




async function getOneEmployeeById(req, res) {
    try {
        const employee = await Employee.findByPk(req.params.employeeId)
        if(employee) {
            return res.status(200).json(employee)
          } 
        else {
            return res.status(404).send('No Employees found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}



async function createEmployee(req, res) {
    try {
        const employee = await Employee.create(req.body)
        return res.status(200).json({ message: 'Employee created', employee: employee })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateEmployee(req, res) {
    try {
        const [update] = await Employee.update(req.body, {
            where: {
                id: req.params.employeeId
            }
        })
        console.log(update)
        if(update) {
            return res.status(200).json({ message: 'Employee updated' })
            
        }
        else {
			return res.status(404).send('Employee not found or already updated')
		}
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteEmployee(req, res) {
    try {
        const employee = await Employee.destroy({
            where: {
                id: req.params.employeeId
            }
        })
        if (employee) {
			return res.status(200).json('Employee deleted')
		} else {
			return res.status(404).send('Employee not found')
		}
    } catch (error) {
        res.status(500).send(error.message)
    }
}



module.exports = {
    getAllEmployees,
    getOneEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee,
}