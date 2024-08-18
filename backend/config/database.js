import mongoose from "mongoose";

mongoose.set('strictQuery', true);

export const connectDatabase =()=>{
    mongoose.connect(process.env.MONGO_URI).then((c)=>{
        console.log(`MongoDB connect to: ${c.connection.host}`);
    }).catch((err)=>{
        console.log(err);
    });

};