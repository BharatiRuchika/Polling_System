const Option = require('../../../models/option')
const Question = require('../../../models/question')

//function to create an option for a question 
module.exports.create = async function (req, res) {
    try {
        console.log('id', req.params.id)
        console.log('body', req.body)
        //fetch option text from request body
        const { text } = req.body

        //mongoose function for creating option for a question
        let option = await Option.create({
            text: text,
            question: req.params.id
        })

        //mongoose update function for adding link to link_to_vote field
        option = await Option.findByIdAndUpdate(option._id, {
            link_to_vote: `http://localhost:8000/api/v1/options/${option._id}/add_vote`,

        }, { new: true })

        //fetch question document of specified id sent from params 
        let question = await Question.findById(req.params.id)

        //push the option id into question options field
        question.options.push(option._id)

        //save the question into database
        question.save()

        //return response to the request
        return res.status(200).json({
            option: option,
            question: question,
            message: 'option created successfully'
        })
    } catch (error) {
        //if error then return this response to request
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

// function to add a vote to a specific option
module.exports.addVote = async function (req, res) {
    try {
        //increment the vote field of the option of specified id
        let option = await Option.findByIdAndUpdate(req.params.id, {
            isVoted: true, $inc: { votes: 1 }
        }, { new: true })

        // update isVoted field of Qustion schema to true if for any option vote is given
        let question = await Question.findByIdAndUpdate(option.question, {
            isVoted: true
        }, { new: true })

        if (option) {
            //save the option to database
            await option.save()

            //return response to the request
            return res.status(200).json({
                data: {
                    option: option,
                    question: question
                },
                message: "vote added successfully"
            })
        }
    } catch (error) {
        //if error then return this response to request
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

module.exports.delete = async function (req, res) {
    try {
        let id = req.params.id

        //fetch the option of specified id
        let option = await Option.findById(id)
        if (option) {
            //if option isVoted is false then delete the option 
            if (!option.isVoted) {
                option = await Option.findByIdAndDelete(id)
                let question = await Question.findById(option.question)
                question.options.pull(option._id)
                question.save()

                //return response to the request
                return res.status(200).json({
                    data: {
                        option: option,
                        question: question
                    },
                    message: 'Option Deleted Successfully'
                })
            } else {

                //if option isVoted is true then return the response
                return res.status(500).json({
                    message: 'Cannot delete because option is voted'
                })
            }
        } else {
            //return response to the request
            return res.status(500).json({
                message: 'option already deleted'
            })
        }
    } catch (error) {
        //if error then return this response to request
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}