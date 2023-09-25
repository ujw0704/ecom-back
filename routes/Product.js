import express from "express";
import cors from "cors"
import connection from "../db/connecting.js"
import productitems from "../models/Product.Schema.js"


const app = express()


app.use (cors({origin:"http://localhost:3000"}))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.post("/Product",async(req,res)=>{
    // const productid = req.body.id
    // const productprice = req.body.price
    // const productitle = req.body.productitle
    // const productimage = req.body.image
 
    const {price,id,product,image}= req.body

const newproduct =  new productitems({
   
    price,id,product,image

})
const productdata = await productitems.save()
 
res.status(200).send("hello product is heere")

})
connection.then(()=>{
    app.listen(8080,()=>{
        console.log('server started')
    })
})

















