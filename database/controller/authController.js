const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/authModel')
const asyncHandler = require('express-async-handler')
const res = require('express/lib/response')
const signUp = asyncHandler( async (req,res)=>{

  const {firstname,lastname,email,password} = req.body

  if(!firstname || !lastname || !email || !password){
    res.status(400).json({message:'Please insert your details'})
  }

  const userExists = await User.findOne({email})

  if(userExists){
    res.status(400).json({message:'User with Email already exists'})
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password,salt)

  const user = await User.create({
    firstname,
    lastname,
    email,
    password: hash

  })

  if(user){
    res.status(202).json({
      _id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.firstname,
      token:generateToken(user._id)
      
    })
  }else{
    res.status(400).json({message:'invalid user data'})
  }

  

})


const login = asyncHandler( async (req,res)=>{
  const {email,password} = req.body
  const user = await User.findOne({email})

  if(user && (await bcrypt.compare(password, user.password))){
    res.status(202).json({
      id:user._id,
      firstname:user.firstname,
      lastname:user.lastname,
      email:user.email,
      token:generateToken(user._id)
    })
  }else{
    res.status(400).json({message:'Invalid user data'})
  }

})


const generateToken = (id)=>{
  return jwt.sign({id},process.env.JWT_SECRET,{
    expiresIn:'30d'
  })
}

module.exports={
  signUp,
  login
}