import express from 'express';
import cors from "cors"
import connection from './db/connection.js';
import user from './models/userSchema.js';

const app = express(); 

app.use(cors({origin: "http://localhost:3000"}))
app.use(express.json())

app.post('/login', async(req, res)=>{
    // console.log(req.body.name)
    const name = req.body.name
    const password = req.body.password

    const newuser = new user({
        name,
        password
    })
   const newdata =await newuser.save()
    console.log(name, password)
   res.status(200).send("hello is working")
})

connection.then(()=>{

    app.listen(8080,() => {
        console.log(`Server is listening at 8000`);
    }); 
})
