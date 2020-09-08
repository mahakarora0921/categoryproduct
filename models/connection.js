const mongoose=require('mongoose')
const url="mongodb://localhost:27017/findus"
mongoose.connect(url)
const db=mongoose.connection
console.log("connection done.....")
module.exports=db 

