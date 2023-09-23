import mongoose from "mongoose";


const productcart = new mongoose.Schema({
   name:{
    type:String,
    required:true

   } ,

   price:{
    type:Number,
    required : true

   },

   image:{
    type: String,
    required:true,


   },

   id:{
    type:String,
    required:true
   }
})
const cartItems = mongoose.model("cartItems",productcart)
export default  cartItems;