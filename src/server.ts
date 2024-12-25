import mongoose from "mongoose";
import app from "./app"
import config from "./config";

async function run (){
    try{
        await mongoose.connect(config.db_url as string)
        app.listen(config.port, () => {
            console.log(`Example app listening on port ${config.port}`)
          })
    }
    catch(err){
        console.log(err)
    }

   
}


run();
// tour-user
// 7CsDwbhVYqK5PMcr