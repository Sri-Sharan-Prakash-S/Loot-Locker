import express from "express"
import { addLoot } from "../controllers/lootcontroller.js"
import multer from "multer"

const lootRouter=express.Router();

const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})

lootRouter.post("/add",upload.single("image"),addLoot)



export default lootRouter;