const Post = require('../models/postModel');
const ErrorHandler = require("../utils/errorhandler");
const User=require('../models/userModel')
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const crypto=require('crypto');
var cloudinary = require('cloudinary');
exports.createPost = catchAsyncErrors(async (req, res, next) => {
    // const mycloud=await cloudinary.v2.uploader.upload(req.body.image,{
    //     folder:'avatars',
    //     width:150,
    //     crop:'scale'
    // })
  try {
   
    const newPost={
        title:req.body.title,
        description:req.body.description,
        image:{
            // public_id:mycloud.public_id,
            // url:mycloud.secure_url
            public_id:"mycloud.public_id",
            url:"mycloud.secure_url"
        },
        user: req.user._id,

    }
    const post = await Post.create(newPost);
    const user=await User.findById(req.user._id);
    user.posts.push(post._id);
    await user.save();
    
    res.status(201).json({
      success: true,
      post,
    });
    }
  catch (error) {
    
    res.status(500).json({
      success: false,
      message:error.message,
     
    });
  }
})


