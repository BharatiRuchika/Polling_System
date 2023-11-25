const Question = require('../../../models/question')

//function to create the question
module.exports.create = async function(req,res){    
    try{
        
        //fetched the content of title from req body
        const {title} = req.body
        
        //mongoose function to create the question
        let question = await Question.create({
            title:title
        })

        //return response to the request
        return res.status(200).json({
            data:question,
            message:'Question created successfully'
        })
    }catch(error){
        //if error then return this response to request
        return res.status(500).json({
            message:'Internal Server Error'
        })
    }
}

//function to delete the question
module.exports.delete = async function(req,res){
    try{
        let id = req.params.id
        let question = await Question.findById(id)
        if(question){
            //if isVoted field of question is false then delete the question
            if(!question.isVoted){
                let deleteQues = await Question.findByIdAndDelete(id)
                if (deleteQues) {
                    await Option.deleteMany({ question: req.params.id });
                }
                
                //return response to the request
                return res.status(200).json({
                    data:{
                        question:question
                    },
                    message:'Question and associated options Deleted Successfully'
                })
            }else{
                //if isVoted field of question is true then return the response
                return res.status(500).json({
                    message:'Cannot delete because one of its option is voted'
                })
            }
        }
    }catch(error){
         //if error then return this response to request
        return res.status(500).json({
            message:'Internal Server Error'
        })
    }
}


module.exports.getQuestions = async function(req,res){
    try{
        let id = req.params.id
        
        //fetch the question of specified id and populate the field options from that
        let question = await Question.findById(id).populate('options')

         //return response to the request
        return res.status(200).json({
            data:{
                question:question
            },
            message:'Question fetched Successfully'
        })
    }catch(error){
         //if error then return this response to request
        return res.status(500).json({
            message:'Internal Server Error'
        })
    }
}