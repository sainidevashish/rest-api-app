const User = require('../../model/user');

const userController = async (req,res,next)=>{
    console.log(req.user);
    try{
        const user = await User.findOne({_id:req.user._id}).select('-password -updatedAt -__v');
        res.json(user);
    }catch(err){ 
        console.log(err);
        return next(err);
        
    }

}


module.exports = userController;