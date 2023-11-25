//function to render home 
module.exports.renderHome = async function(req,res){
    try{
         //render Home view on a screen
        return res.render('home',{
            title:'Home'
        })
    }catch(error){
        //if error then return this response to request
        console.log('error',error)
        return res.status(500).json({
            message:'Internal Server Error'
        })
    }
}