import mongoose from "mongoose";

export const ConnectDB= async()=>{
    await mongoose.connect('mongodb+srv://LootLockerAdmin:admin@cluster0.k45am.mongodb.net/loot-locker')
    console.log("DB Connected");
}