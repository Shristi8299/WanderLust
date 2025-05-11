const  mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
    }

    //no need to define username and password becasue passport-local-mongoose  automatically done with salt
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("user" , userSchema);