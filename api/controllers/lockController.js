import lockModel from "../models/lockModel.js";
import fs from 'fs'

const addlock=async(req,res)=>{
    
    const {name,description,category}=req.body;
    //const {filename}=req.file;
    //let image_file=`${filename}`;
    const lock=new lockModel({
        name:name,
        description:description,
        category:category,
        //image:image_file
    })
    try{
        await lock.save();
        res.json({success:true,message:"Lock Added"})
    }catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

const listLock=async(req,res)=>{
    try{
        const locks=await lockModel.find({});
        res.json({success:true,data:locks})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"error"})
    }
}

const removeLock = async(req,res)=>{
    try {
        const lock=await lockModel.findById(req.body.id);
        await lockModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Lock Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {addlock,listLock,removeLock}
