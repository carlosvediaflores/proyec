var mongoose = require("mongoose");
mongoose.connect("mongodb://172.20.0.2:27017/otrodatabase", {useNewUrlParser: true});
var db = mongoose.connection;
db.on("error", ()=>{
    console.log("Error al conectarse a db");
});
db.on("open", ()=>{
    console.log("Conexion exitosa");
});
module.exports=mongoose;