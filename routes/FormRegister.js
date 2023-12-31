

import express from "express";
import form from "../models/RegistrationSchemaa.js";
import md5 from "md5";
const regst = express.Router();

//--------------------login-------------------------------------------
regst.post('/login', async(req, res)=>{

  // const name = req.body.name
  // const password = req.body.password

  const{username , password } = req.body

  // const newuser = new user({
  //     username,
  //     password
  // })
   
  const hashedPassword = md5(password);
  try {
    const user = await form.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    console.log("DB pwd: " + user.password);
    console.log("User entered pwd: " + hashedPassword);
    if (user.password === hashedPassword) {
      
      return res.send({status:200,message: "Login successful"})
    } else {
      return res.send({status:401,message: "Login unsuccessful"})
    }
  } catch (error) {
    return res.send({status:401,message: "Login intrnalerror"})
  }
  
});













//--------------------------------register---------------------------------------------
regst.post("/register", async (req, res) => {
  const { firstname, lastname, password, number, username, email } = req.body;
  console.log(req.body);
   console.log(password)
  // const hashedPassword = md5(password);
  // console.log(hashedPassword);

  const registration = new form({
    firstname,
    lastname,
    password,
    number,
    username,
    email
  });

  
  try {
    const savedRegistration = await registration.save();
    res.json(savedRegistration); 
  } catch (error) {
    res.status(400).json({ error: "Registration failed" + error });
  }
 });
 

export default regst;
