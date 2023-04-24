import { Router } from "express";
let router = Router();

router.get('/', (req, res, next) => res.status(200).render('index', {
  title: '/CATEGORIES',
  subtitle: 'endpoints of categories' 
}))

export default router;