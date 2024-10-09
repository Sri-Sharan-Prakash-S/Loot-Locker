import lootModel from "../models/lootModel.js"

const addLoot= async(req,res)=>{

    const newlooting=new lootModel({
        name:req.body.name,
        description:req.body.description,
        category:req.body.category
    })
    try{
        await newlooting.save();
        res.json({success:true,message:"Loot Added"})
    } catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export {addLoot}