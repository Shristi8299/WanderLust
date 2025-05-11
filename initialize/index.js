const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');

const mongo_Url ='mongodb://127.0.0.1:27017/wanderLust';
main().then(()=>{
  console.log("connected to the database");
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(mongo_Url);
}

const initDB = async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({
        ...obj,
        Owner:"67134986d5107081b9689855",

    }))
    await Listing.insertMany(initData.data);
    console.log("data was saved");

};

initDB();
 