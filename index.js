import express from 'express';
import cors from "cors"
import connection from './db/connecting.js';
// import routes from './routes/routes.js';
import Product from './routes/Product.js';
import regst from './routes/FormRegister.js';
import mail from "./controller/sendingmail.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
  "origin": "http://localhost:3000",


}));
app.use(Product)
//  app.use(routes)
app.use("/", regst)
 app.use ("/register",mail)
app.get("/Product", async (req, res) => {
  console.log("ujwal")
});

// app.get("/allproduct",(req,res)=>{

// })


connection.then(() => {

  app.listen(8080, () => {
    console.log(`Server is listening at 8080`);
  });
})
