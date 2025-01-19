const mongoose = require('mongoose');

module.exports.connect = async () =>{
    try
    {
        const mongo_url = process.env.MONGO_URL;
        await mongoose.connect(mongo_url);
        console.log("connect success");
    }
    catch(e)
    {
        console.log("database error: " + e);
    }
}
