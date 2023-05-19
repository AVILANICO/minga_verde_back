import Chapter from "../../models/Chapter.js";

let get_one = async (req, res, next) => {
    try {
        
        let get_one = await Chapter.findOne({_id:req.params.id},'pages title order manga_id -_id' )
        let id_next = await Chapter.findOne({order:get_one.order + 1}, '_id')
        let id_prev = await Chapter.findOne({order:get_one.order - 1}, '_id')
        if (get_one){
            return res.status(200).json({
                response: get_one,
                id_next: id_next?._id || null,
                id_prev: id_prev?._id || null
            })
        }   return res.status(404).json({
                response: 'the chapter was not found'
            })

    } catch (error) {
        next(error) 
    }
}

export default get_one