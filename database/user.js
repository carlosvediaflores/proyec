var mongoose=require("./connect");
var USERSCHEMA = new mongoose.Schema({
    name: String,
    lastname: String,
    age: Number,
    date: Date,
    typemusic: Array
});
var USER = mongoose.model("user", USERSCHEMA);
module.exports=USER;