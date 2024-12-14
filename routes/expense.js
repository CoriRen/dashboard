const express = require('express')
const router = express.Router()
const expenseController = require('../controllers/expense') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, expenseController.getExpense)
router.post('/addExpense', expenseController.addExpense)
router.put('/updateExpense', expenseController.updateExpense)
router.delete('/deleteExpense', expenseController.deleteExpense)

module.exports = router