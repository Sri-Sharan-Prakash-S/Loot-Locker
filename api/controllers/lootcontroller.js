import lootModel from "../models/lootModel.js"

const addLoot= async(req,res)=>{

    let image_filename=`${req.file.filename}`;

    const looting=new lootModel({
        name:req.body.name,
        description:req.body.description,
        category:req.body.category,
        image:image_filename
    })
    try{
        await looting.save();
        res.json({success:true,message:"Loot Added"})
    } catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export {addLoot}