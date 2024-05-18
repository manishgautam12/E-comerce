const mongoose=require("mongoose");

const reviewSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
},{timestamps:true})

const productSchema=mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    name:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    countInStock:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        required:true
    },
    gst:{
        type:Number,
        required:true
    },
    totalPrice:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    reviews:[reviewSchema],
    numReviews:{
        type:Number
    },
    

},{timestamps:true})

const Product= mongoose.model("Product",productSchema);

module.exports=Product;