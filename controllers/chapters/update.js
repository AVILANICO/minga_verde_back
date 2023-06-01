import Chapter from "../../models/Chapter.js";

const update = async (req, res, next) => {
    try {
        let response = await Chapter.findOneAndUpdate(
            { _id: req.params.id }, 
            req.body, 
<<<<<<< HEAD
            {new:true});            // este campo es opcional y retorna despues de modificarse
=======
<<<<<<< HEAD
            {new:true});            // este campo es opcional y retorna despues de modificarse
=======
            {new:true});
>>>>>>> a76dcab429e7e3049128c248c8509948997b6e71
>>>>>>> 96b2055865d7bf034613ea708981944426487e06
        if (response) {
        return res.status(200).json({
            success: true,
            message: "updated",
            response
        });
        } else {
        return res.status(404).json({
            success: false,
            message: "not found"
        });
        }
    } catch (error) {
        next(error);
    }
};
export default update;