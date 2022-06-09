const mongoose = require('mongoose')

const connectDB = async ()=>{
  try{
    mongoose.connect(process.env.MONGO_URI)
    console.log('connected to mong database')
  }
  catch(err){
    console.log(err)
    process.exit(1)
  }
}

module.exports=connectDB