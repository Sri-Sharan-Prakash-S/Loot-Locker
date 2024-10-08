import lootModel from "../models/lootmodel.js";
import fs from 'fs'

const addloot=async(req,res)=>{
    let image_filename=`${req.file.filename}`;

    const loot=new lootModel({
        title:req.body.title,
        description:req.body.description,
        category:req.body.category,
        //image:image_filename
    })
    try{
        await loot.save();
        res.json({success:true,message:"Loot Added"})
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:"error"})
    }
}

export {addloot}