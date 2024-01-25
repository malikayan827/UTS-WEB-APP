const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    
    // title: {
    //     type: String,
    //     required: [true, "Please enter your title"],
    //     maxLength: [100, "Title cannot exceed 100 characters"],
    //     minLength: [4, "Title cannot be less than 4 characters"]
    // },
    description: {
        type: String,
        required: [true, "Please enter your description"],
        maxLength: [500, "Description cannot exceed 500 characters"],
        minLength: [4, "Description cannot be less than 4 characters"]
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        // required: true
    },
    image:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    likes: [{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }],
    comments: [{
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            // required: true
        },
        comment: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }]
});
module.exports = mongoose.model('Post', postSchema);