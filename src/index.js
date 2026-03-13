import connectDB from "./db/connect.js";
import 'dotenv/config';
import { app } from "./app.js";


const PORT = process.env.PORT || 8000
connectDB()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running on ${PORT}`);
    })
}) 
.catch((err)=>{
    console.log("DB connection failed !!! ", err)
})
 
// import express from "express"
// const app = express()

// ( async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error", (error)=>{
//             console.log("Error", error);
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`app is listening on port ${process.env.PORT}`);
//         })

//     } catch (error) {
//         console.error("Error: ", error)
//         throw error
//     }
// })()