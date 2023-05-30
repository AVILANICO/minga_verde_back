import Chapter from '../../models/Chapter.js' 

    let create = async(req,res,next) => {
        try {
            let chapter = await Chapter.create(req.body)
            return res
                .status(201)
                .json({
                    message: 'create successfully',
                    chapter
                })
        } catch (error) {
            next (error)
        }
    }
export default create