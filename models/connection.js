const mongoose=require('mongoose')
const url="mongodb+srv://mahak_findus:mahak123@cluster0.dsixy.mongodb.net/findus"
mongoose.connect(url)
const db=mongoose.connection
console.log("connection done.....")
module.exports=db 