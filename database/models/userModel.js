const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
  auth:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'newusers'
  },
  text:{
     type:String,
     required: true,
  }
},{
  timestamps: true
})

module.exports=mongoose.model('newgoals',userSchema)