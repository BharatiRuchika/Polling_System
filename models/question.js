const mongoose = require("mongoose")
const questionSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    options:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Option'
    }],
    isVoted:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

const Question = mongoose.model('Question',questionSchema)
module.exports = Question