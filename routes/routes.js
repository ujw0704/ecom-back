import express from 'express';
// import cors from "cors"
import connection from "../db/connecting.js"
import user from '../models/FormSchema.js';

const app = express(); 

 const routes = express.Router()
// app.use(cors({origin: "http://localhost:3000"}))
// app.use(express.urlencoded({extended:true}))
// app.use(express.json())

routes.post('/login', async(req, res)=>{
    // const name = req.body.name
    // const password = req.body.password


    const{name , password } = req.body

    const newuser = new user({
        name,
        password
    })
   const newdata =await newuser.save()
    console.log(newdata)
   res.status(200).send(newdata)
})




 export default  routes
