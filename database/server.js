const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
const app = express()
require('dotenv').config()
const port = process.env.PORT

//connect to mongoDB
connectDB()

//body req middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//

//cors middleware
app.use(cors())


//auth router middleware
app.use('/api/users',require('./Routes/authRoute'))

//users router middleware
app.use('/api/docs',require('./Routes/userRoute'))

//listening to server
app.listen(port,(req,res)=>{
  console.log(`server running on port ${port}`)
})