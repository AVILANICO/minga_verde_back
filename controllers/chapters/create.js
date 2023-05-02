import Chapter from '../../models/Chapter.js' 

    let create = async(req,res,next) => {
        try {
            let capitulo = await Chapter.create(req.body)
            return res
                .status(201)
                .json({
                    message: 'create successfully',
                    capitulo
                })
        } catch (error) {
            next (error)
        }
    }
export default create