const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        default:""
    },
    phoneNo:{
        type:String,
        default:""
    },
    linkedIn:{
        type:String,
        default:""
    },
    twitter:{
        type:String,
        default:""
    },
    address:{
        type:String,
        default:""
    },
    emailVerify:{
        type:Boolean,
        required:true,
        default:false
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }
},{timestamps:true})


const User=mongoose.model("User",userSchema);

module.exports=User;