import mongoose from "mongoose";

const items = new mongoose.Schema({

   id:{
        type:String,
        required:true,
    },

 price:{
    type:Number ,
    required: true,

},
title:{
    type : String  ,
    required:true

},

image:{
    type:String , 
    required: true,
}


})
const productitems = mongoose.model('productitems',items)

export default  productitems
