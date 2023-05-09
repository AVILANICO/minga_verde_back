import Chapter from "../../models/Chapter.js";

let get_one = async (req, res, next) => {
    try {
        
        let get_one = await Chapter.findOne({_id:req.params.id},'pages title order -_id' )
        if (get_one){
            return res.status(200).json({
                response: get_one
            })
        }   return res.status(404).json({
                response: 'the chapter was not found'
            })
    } catch (error) {
        next(error) 
    }
}

export default get_one