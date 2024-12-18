//imports express framework and Mongoose
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const logger = require('morgan')

//declare variables that store paths to routes folders
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const expenseRoutes = require('./routes/expenses')
// const budgetRoutes = require('./routes/budget')

//module to read .env file
require('dotenv').config({path: './config/.env'})

// passport/authentication config
require('./config/passport')(passport)

//call connectDB function and connect to Mongoose.
connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))

//middleware - for user sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: process.env.DB_STRING, }),
    })
  )
  
// Passport middleware - for authentication
app.use(passport.initialize())
app.use(passport.session())

// Flash middleware - displays flash messages
app.use(flash())

// middleware - for user requests
app.use('/', mainRoutes)
// app.use('/budget', budgetRoutes)
app.use('/expenses', expenseRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})    


