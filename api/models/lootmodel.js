import mongoose from "mongoose";

const lootSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    category:{type:String,required:true}
},{minimize:true})

const lootModel = mongoose.models.looting || mongoose.model("looting",lootSchema)

export default lootModel;