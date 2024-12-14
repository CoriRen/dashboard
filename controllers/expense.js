const Expense = require('../models/Expense')

module.exports = {
    getExpense: async (req,res)=>{
        console.log(req.user)
        try{
            const expenseItems = await Expense.find({userId:req.user.id})
            res.render('expenses.ejs', {expense: expenseItems, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    addExpense: async (req, res)=>{
        try{
            //add 'recurring: true' if default doesn't work
            await Expense.create({expenseName: req.body.expenseName, cateogry: req.body.category, cost: req.body.cost, userId: req.user.id})
            console.log('Expense has been added!')
            res.redirect('/expenses')
        }catch(err){
            console.log(err)
        }
    },
    updateExpense: async (req, res)=>{
        try{
            await Expense.findOneAndUpdate({_id:req.body.expenseIdFromJSFile},{
                expenseName: req.body.expenseName,
                cost: req.body.cost
            })
            console.log('Updated Expense')
            res.json('Updated Expense')
        }catch(err){
            console.log(err)
        }
    },
    deleteExpense: async (req, res)=>{
        console.log(req.body.expenseIdFromJSFile)
        try{
            await Expense.findOneAndDelete({_id:req.body.expenseIdFromJSFile})
            console.log('Deleted Expense')
            res.json('Deleted Expense')
        }catch(err){
            console.log(err)
        }
    }
}    