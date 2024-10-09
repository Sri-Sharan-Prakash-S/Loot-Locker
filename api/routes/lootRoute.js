import express from "express"
import { addLoot } from "../controllers/lootcontroller.js"

const lootRouter=express.Router();

lootRouter.post("/add",addLoot)



export default lootRouter;