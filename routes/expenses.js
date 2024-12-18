const express = require('express')
const router = express.Router()
const expenseController = require('../controllers/expenses') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, expenseController.getExpenses)
router.post('/addExpense', expenseController.addExpense)
// router.put('/updateExpense', expenseController.updateExpense)
// router.delete('/deleteExpense', expenseController.deleteExpense)

module.exports = router