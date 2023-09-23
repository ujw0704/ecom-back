import mongoose from 'mongoose'
const connection = mongoose.connect("mongodb+srv://ujwalsharma571:t6W7VCIJaF8foe7F@cluster0.xszbxx4.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology: true,
})
export default connection
