import Chapter from "../../models/Chapter.js";

let get_one = async (req, res, next) => {
    try {
        
        let get_one = await Chapter.findOne({_id:req.params.id},'pages -_id' )
        if (get_one){
            return res.status(200).json({
                response: get_one
            })
        }
    } catch (error) {
        next(error) 
    }
}

export default get_one