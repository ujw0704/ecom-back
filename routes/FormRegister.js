

import express from "express";
import form from "../models/RegistrationSchemaa.js";

const regst = express.Router();

regst.post("/register", async (req, res) => {
  const { firstname, lastname, password, number, username, email } = req.body;
  console.log(req.body);

 
  const registration = new form({
    firstname,
    lastname,
    password,
    number,
    username,
    email,
  });

  
  try {
    const savedRegistration = await registration.save();
    res.json(savedRegistration); 
  } catch (error) {
    res.status(400).json({ error: "Registration failed" });
  }
 });
 

export default regst;
