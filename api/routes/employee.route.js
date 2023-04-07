const router = require('express').Router()
const {
    getAllEmployees,
    getOneEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee,
} = require('../controllers/employee.controller')
const { checkAuth } = require('../middlewares/auth')


//Routes used by Admin
router.get('/', getAllEmployees)
router.get('/:employeeId', getOneEmployeeById)
router.post('/',checkAuth, createEmployee)
router.put('/:employeeId', updateEmployee)
router.delete('/:employeeId', deleteEmployee)

module.exports = router