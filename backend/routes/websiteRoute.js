
import {Router } from "express"
import express from 'express'
import { isAuthenticated } from '../middleware/isAuthenticated.js'
import { generateWebsite, changeWebsite, getWebsiteById, getAllWebsite, deployWebsite, getBySlug } from '../controllers/websiteController.js'


const router = express.Router();

router.post("/generate",  isAuthenticated, generateWebsite)
router.post("/update/:id",  isAuthenticated, changeWebsite)
router.get("/getbyid/:id",  isAuthenticated, getWebsiteById)
router.post("/getall",  isAuthenticated, getAllWebsite)
router.post("/deploy/:id",  isAuthenticated, deployWebsite)
router.post("/getbyslug/:slug",  getBySlug)



export default router;