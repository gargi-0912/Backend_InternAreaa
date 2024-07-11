// const mongoose=require("mongoose")
// const url=`mongodb+srv://admin:admin@cluster0.aqimt4y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
// module.exports.connect=()=>{
//     mongoose.connect(url,console.log("Database is connected"))
// }
const mongoose=require("mongoose")
require('dotenv').config()
DATABASE=process.env.DATABASEURL
const url=DATABASE
module.exports.connect=()=>{
    mongoose.connect(url,console.log("Database is connected"))
}