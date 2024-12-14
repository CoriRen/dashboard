const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({
  expenseName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  recurring: {
    type: Boolean,
    default: true,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Expense', ExpenseSchema)
