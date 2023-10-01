// import mongoose from "mongoose";


// // const productreview = new mongoose.Schema({

// //     username:{
// //         type: String,
// //         required: true,
// //     },
// //    status:{

// //        pendingRequest:{
// //            type: Array,
// //            unique: false,
// //         },
// //         aproveRequest: {
// //             type: Array,
// //             unique: false,
// //             default :date=> Date.now(),
            
// //         },
        
// //         disaproveRequest:{
// //             type:Array,
// //             unique:false,
// //             default :date=> Date.now(),
// //             default:false,
// //         }
        
// //     },
    
// // })

// // const productreviews =  mongoose.model("productreview",productreviews)


// //  export default productreviews;

// import mongoose from "mongoose"

// const productItemSchema = new mongoose.Schema({
//   price: Number,
//   id: String,
//   product: String,
//   image: String,
//   status: {
//     type: String,
//     enum: ['pending', 'approved', 'rejected'],
//     default: 'pending',
//   },
// });

// const ProductItem = mongoose.model('ProductItem', productItemSchema);

// ProductItem;
