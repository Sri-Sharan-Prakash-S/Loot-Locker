import mongoose from "mongoose";

const lootSchema=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    category:{type:String,required:true},
    image:{type:String,required:true}
})

const lootModel=mongoose.models.loot || mongoose.model("loot",lootSchema);

export default lootModel;