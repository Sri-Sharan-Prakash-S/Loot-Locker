import mongoose from "mongoose";

const lockSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    //image:{type:String,required:true},
    category:{type:String,required:true}
})

const lockModel= mongoose.models.lock || mongoose.model("lock",lockSchema);

export default lockModel;