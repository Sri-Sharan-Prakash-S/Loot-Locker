import express from "express"
import { addloot } from '../controllers/lootcontroller.js'
import multer from 'multer'

const lootRouter=express.Router();

const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})

lootRouter.post("/add",upload.single("image"),addloot)

export default lootRouter;