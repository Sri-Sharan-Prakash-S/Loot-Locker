import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://LootLockerAdmin:admin@cluster0.k45am.mongodb.net/lootlocker').then(()=>console.log('DB Connected'));
}