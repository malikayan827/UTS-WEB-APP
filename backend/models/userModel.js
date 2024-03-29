const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const crypto=require('crypto');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"],
        maxLength:[30,"Name cannot exceed 30 characters"],
        minLength:[4,"Name cannot be less than 4 characters"]
    },
    email:{
        type:String,
        required:[true,"Please enter your email"],
        unique:true,
        validate:[validator.isEmail,"Please enter valid email address"]
    },
    password:{
        type:String,
        required:[true,"Please enter your password"],
        minlength:[8,"Password cannot be less than 6 characters"],
        select:false
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
    role:{
        type:String,
        default:"user"
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    posts:[
        {
            type:mongoose.Schema.ObjectId,
            ref:'Post'
        }
    ],
    followers:[
        {
            type:mongoose.Schema.ObjectId,
            ref:'User'
        }
    ],
    following:[
        {
            type:mongoose.Schema.ObjectId,
            ref:'User'
        }
    ],
    
    
    
    // resetPasswordToken:String,
    // resetPasswordExpire:Date,

    

});

//encrypting password before saving user
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }
    this.password=await bcrypt.hash(this.password,10);
})
//jwt token
userSchema.methods.getJWTToken=function(){
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
}

userSchema.methods.comparePassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

//generating password resset token
// userSchema.methods.getResetPasswordToken=function(){
    
//     const resetToken=crypto.randomBytes(20).toString('hex');
    
//     this.resetPasswordToken=
//     crypto.createHash('sha256')
//     .update(resetToken).digest('hex');
    
//     this.resetPasswordExpire=Date.now()+15*60*1000;
//     return resetToken;
// };
module.exports=mongoose.model('User',userSchema);


