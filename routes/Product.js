import express from "express";

 import connection from "../db/connecting.js";

import productitems from "../models/Product.Schema.js";
//  import productreviews from "../models/Productapprove.schema.js"

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
// /-------------------------product arrpove  reject-----------------------------------/


// Product.post("/approve/:id",async(res,req)=>{
//    const {usrename, id, quality, } =req.body

   

//    try {
//     const productId = req.params.id;
//     const updatedProduct = await productitems.findByIdAndUpdate(
//       productId,
//       { status: 'approved' },
//       { new: true } 
//     );

//     if (!updatedProduct) {
//       return res.status(404).json({ message: 'Product not found' });
//     }

//     res.status(200).json({ message: 'Product approved successfully', product: updatedProduct });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error approving product' });
//   }
// });


// Product.post('/reject/:id', async (req, res) => {
//   try {
//     const productId = req.params.id;
//     const updatedProduct = await ProductItem.findByIdAndUpdate(
//       productId,
//       { status: 'rejected' },
//       { new: true } 
//     );

//     if (!updatedProduct) {
//       return res.status(404).json({ message: 'Product not found' });
//     }

//     res.status(200).json({ message: 'Product rejected successfully', product: updatedProduct });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error rejecting product' });
//   }


// })



export default Product














