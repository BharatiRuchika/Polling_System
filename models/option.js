const mongoose = require("mongoose")
const optionSchema = mongoose.Schema({
    text:{
        type:String,
        required:true,
    },
    votes:{
        type:Number,
        default:0
    },
    link_to_vote:{
        type:String,
    },
    isVoted:{
        type:Boolean,
        default:false
    },
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question'
    }
},{
    timestamps:true
})

const Option = mongoose.model('Option',optionSchema)
module.exports = Option