const Data = require('../models/userModel') 
const asyncHandler = require('express-async-handler')


const getData = asyncHandler( async (req,res)=>{
  const data = await Data.find({auth: req.user.id})

  res.status(200).json(data)
})

const postData = asyncHandler( async(req,res)=>{
  const data = await Data.create({
    text: req.body.text,
    auth: req.user.id
  })

  res.status(200).json(data)
})

const updateData = asyncHandler( async(req,res)=>{
  const data = await Data.findById(req.params.id)
  if(!data){
    res.status(400).json({message:'Couldnt find user with that ID'})
  }
  const updatedData = await Data.findByIdAndUpdate(req.params.id,req.body,{new:true})

  res.status(200).json(updatedData)
})

const deleteData = asyncHandler( async (req,res)=>{
  const data = await Data.findById(req.params.id)
  if(!data){
    res.status(400).json({message:'Couldnt find user with that ID'})
  }
  await data.remove()

  res.status(200).json({id:req.params.id})
})


module.exports={
  getData,
  postData,
  updateData,
  deleteData
}