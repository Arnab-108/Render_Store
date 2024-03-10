const mongoose = require("mongoose")

const pdfSchema = mongoose.Schema({
    user_Id:{type:String , required:true},
    user_name:{type:String , required:true},
    name:{type:String , required:true},
    description:{type:String , required:true},
    file:{type:String , required:true},
    date:{type:String}
},{
    versionKey:false,
    timestamps:true
})

const pdfModel = mongoose.model('pdf' , pdfSchema )

module.exports={pdfModel}