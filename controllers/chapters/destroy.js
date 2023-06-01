import Chapter from "../../models/Chapter.js";

let destroy = async(req,res,next) => {
    try {
        let destroyed = await Chapter.deleteOne({_id: req.params.id});
<<<<<<< HEAD
=======
<<<<<<< HEAD
        console.log(destroyed);
=======
>>>>>>> a76dcab429e7e3049128c248c8509948997b6e71
>>>>>>> 96b2055865d7bf034613ea708981944426487e06
        if (destroyed.deletedCount){
            return res.status (200).json({
                success: true,
            })
        }else {
            return res.status(404).json({
                success: false,
                message: 'Chapter not found'
            })
        }

    } catch (error) {
        next (error);
    }
}

export default destroy