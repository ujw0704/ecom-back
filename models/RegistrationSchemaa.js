import mongoose from "mongoose";



const fromRegistartion = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please enter your Name"],
        unique: false,
        maxLength: 50,
        minLength: 4,

    },
    lastname: {
        type: String,
        required: [true, 'please Enter Your LastName'],
        unique: false,
        maxLength: 50,
        minLength: 4,

    },

    password: {
        type: String,

        unique: false,
        maxLength: 50,
        minLength: 4,

    },

    email: {
        type: String,
        required: [true, ' Please Enter Email Address'],
        unique: true,
        maxLength: 50,
        minLength: 4,

    },

    number: {
        type: Number,
        required: [true, "Enter a Number"]

    },

    username: {
        type: String,
        required: [true, 'please Enter Your useraame'],
        unique: false,
        maxLength: 50,
        minLength: 4,

    }

})
const form = mongoose.model("register", fromRegistartion)

export default form