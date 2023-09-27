import express from "express";

 import connection from "../db/connecting.js";

import productitems from "../models/Product.Schema.js";
//  import cors from "cors"


// const app = express()
const Product = express.Router()





Product.post("/Product",async(req,res)=>{
   
    const {price,id,product,image}= req.body
 console.log(req.body)

 const products =  new productitems({
     
     price,id,product,image
     
    })
    
  
// const productdata = await new productitems.save()
//  if(productdata){
//     res.send({status:200 ,masseged :"done"})
//  }else{

//      res.status(200).send("hello product is heere")
//     }


})


export default Product














