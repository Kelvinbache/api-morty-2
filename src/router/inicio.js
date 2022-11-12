import {Router } from  "express";
const router = Router();

router.get('/principal', (req,res) => res.render('principal.ejs'));
router.get('/inicio', (req,res) => res.render('index.ejs'))

export default router;
