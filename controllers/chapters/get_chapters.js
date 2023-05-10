import Chapter from "../../models/Chapter.js";

let get_chapters = async(req, res, next) => { // la funcion controladora debe ser asincrona para poder esperar la respuesta de mongo 
  let queries={}                              //consultas que hay que condicionarlas
  let sort={}   
  let pagination={limit:4, page:1}
  //armar la query para recibir el manga_id
  if(req.query.manga_id){
    queries.manga_id = req.query.manga_id
  }
  if(req.query.title){
      queries.title=new RegExp(req.query.title.trim(),'i')
  }
  if (req.query.cover_photo) {
      queries.cover_photo=new RegExp(req.query.cover_photo.trim(),'i')
  }
  if(req.query.pages){
    queries.pages=req.query.pages
  }
  if (req.query.order) {
    sort.pages=req.query.order
  }
  if(req.query.page){
    pagination.page=req.query.page
  }
  if(req.query.limit){
    pagination.limit=req.query.limit
  }
  try
    {
      let all = await Chapter.find(queries).sort(sort).skip(pagination.page > 0 ? (pagination.page-1)*pagination.limit:0)//desde donde pagino 
      .limit(pagination.limit > 0 ? pagination.limit:0)//hasta donde pagino 
      return res.status(200)
      .json({
        succes:true,
        response: all,
      })
    }
  catch(error){
      console.log(error)
    }
      return res.status(400).json({error: "a ocurrido un problema"})
}

export default get_chapters
