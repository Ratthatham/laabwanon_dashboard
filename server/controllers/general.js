import User from "/Users/ratthathamsiridol/Documents/Fullstack Dev/laabwanon/laabwanon_dashboard/server/models/user.js";

const getUser = async(req, res) =>{
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user)

    } catch (error){
        res.status(404).json({message: error.message})
    }
}

export default getUser;