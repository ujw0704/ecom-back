import mongoose from "mongoose";

 const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required: true,
        unique: false,
    },
    password:{
        type: String,
        required:true,
        unique: false,

    }
 })

 const user =  mongoose.model('user',userSchema)

 export default user;
