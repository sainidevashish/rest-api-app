const refreshToken = require("../../model/refreshToken");


const logoutController = async (req,res,next) =>{

    try {
        await refreshToken.deleteOne({token:req.body.refresh_token});

    } catch (err){
        return next (new Error('Something went wrong in database!'));
    }

    res.json({"msg":"logout successfully!"});
};

module.exports = logoutController;