import express from 'express'
import { addlock, listLock, removeLock } from '../controllers/lockController.js'
import multer from 'multer'

const lockRouter=express.Router();

// const storage=multer.diskStorage({
//     destination:"uploads",
//     filename:(req,file,cb)=>{
//         return cb(null,`${Date.now()}${file.originalname}`)
//     }
// })

// const upload=multer({storage:storage})

lockRouter.post("/add",addlock)
lockRouter.get("/list",listLock)
lockRouter.post("/remove",removeLock);

//upload.single("image"),



export default lockRouter;