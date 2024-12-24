const Budget = require('../models/Budget')

module.exports = {
    getBudget: async (req,res)=>{
        console.log(req.user)
        try{
            const total = await Budget.find({userId:req.user.id})
            res.render('expenses.ejs', {budget: total, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createBudget: async (req, res)=>{
        try{
            await Budget.create({
                totalBudget: req.body.totalBudget, 
                budgetType: req.body.budgetType, 
                userId: req.user.id})
            console.log('Budget has been added!')
            res.redirect('/expenses')
        }catch(err){
            console.log(err)
        }
    },
    // updateExpense: async (req, res)=>{
    //     try{
    //         await Expense.findOneAndUpdate({_id:req.body.expenseIdFromJSFile},{
    //             expenseName: req.body.expenseName,
    //             cost: req.body.cost
    //         })
    //         console.log('Updated Expense')
    //         res.json('Updated Expense')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // deleteExpense: async (req, res)=>{
    //     console.log(req.body.expenseIdFromJSFile)
    //     try{
    //         await Expense.findOneAndDelete({_id:req.body.expenseIdFromJSFile})
    //         console.log('Deleted Expense')
    //         res.json('Deleted Expense')
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
}    