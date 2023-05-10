import Chapter from "../../models/Chapter.js";

let create = async(req, res, next)=>{
    try {
        req.body.manga_id = "64496465077201479936119e";
        req.body.cover_photo = "https://i.postimg.cc/q76GttJr/alice-in-borderland-001-01.jpg";

        let one = new Chapter(req.body)
        await one.save()
        return res.status(201).json({
            success: true,
            message: req.body,

        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "ERROR CREATING CHAPTER",
        })
    }
}

export default create