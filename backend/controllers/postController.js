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
    user.posts.unshift(post._id);
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
exports.likeAndUnlike = catchAsyncErrors( async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post donot exists",
      });
    }

    if (post.likes.includes(req.user._id)) {
      const index = post.likes.indexOf(req.user._id);

      post.likes.splice(index, 1);

      await post.save();

      return res.status(200).json({
        success: true,
        message: "Unliked",
      });
    } else {
      post.likes.push(req.user._id);

      await post.save();

      return res.status(200).json({
        success: true,
        message: "Liked",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
})
exports.commentOnPost = catchAsyncErrors(async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post donot exists",
      });
    }

    const comment = {
      user: req.user._id,
      comment: req.body.comments,
    };

    post.comments.push(comment);

    await post.save();

    return res.status(200).json({
      success: true,
      message: "Commented",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
})
exports.deleteComment = catchAsyncErrors(async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post donot exists",
      });
    }

    
    
    if (post.user.toString() === req.user._id.toString()) {
      if (req.body.commentId === undefined) {
        return res.status(400).json({
          success: false,
          message: "Id is required",
        });
      }

      post.comments.forEach((item, index) => {
        if (item._id.toString() === req.body.commentId.toString()) {
          return post.comments.splice(index, 1);
        }
      });

      await post.save();

      return res.status(200).json({
        success: true,
        message: "Selected Comment has deleted",
      });
    } else {
      post.comments.forEach((item, index) => {
        if (item.user.toString() === req.user._id.toString()) {
          return post.comments.splice(index, 1);
        }
      });

      await post.save();

      return res.status(200).json({
        success: true,
        message: "Your Comment has deleted",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
})
exports.deletePost = catchAsyncErrors(async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post donot exists",
      });
    }

    if (post.user.toString() === req.user._id.toString()) {
      await post.deleteOne();
      const user=await User.findById(req.user._id);
      const index=user.posts.indexOf(req.params.id);
      user.posts.splice(index,1);
      await user.save();
      return res.status(200).json({
        success: true,
        message: "Post has deleted",
      });

    } else {
      return res.status(401).json({
        success: false,
        message: "You are not unauthorized ",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
})