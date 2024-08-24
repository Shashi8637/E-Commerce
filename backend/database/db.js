import mongoose from "mongoose";


export const dbConnection = async()=>{
    try {
        await mongoose.connect(process.env.DB_URL,{
            dbName:"EcommerceApp"
        }).then((c)=>{
            console.log(`Connected to MongoDB database ${c.connection.host}`);
        })
    } catch (error) {
        console.log(`Connection Error in Connecting databse ${error}`);
    }
}
