const catchAsyncErrors=require('./catchAsyncErrors');
const ErrorHandler=require('..//utils//errorhandler');
const jwt=require('jsonwebtoken');
const User=require('../models/userModel');
exports.isAuthenticatedUsers=catchAsyncErrors(async(req,res,next)=>{
    try{
        // const {token}=req.cookies;
        const token = req.headers.authorization && req.headers.authorization.startsWith('Bearer')
      ? req.headers.authorization.split(' ')[1]
      : null;
    
    if(!token){
        return next(new ErrorHandler('Login first to access this resource',401));
    }
    const decodedData=jwt.verify(token,process.env.JWT_SECRET);
    req.user=await User.findById(decodedData._id);
    
    next();}
    catch(error){
        return next(new ErrorHandler(error,500));
    }
})
     
