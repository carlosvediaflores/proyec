var mongoose = require("./connect");
var musicSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "El titulo es requerido"]

    },
    subtitle:{
        type:String,
        required:[true, "El subtitulo es requerido"]
    },
    genero:Array,
    commentaries:[{body: String, date: Date}],
    likes: [{_iduser:
        {
            type:String,
            required:[true,"El usuario es nesesario"]
        },
        date:{
        type:Date,
        defauld: new Date()
    }}],
    Albun:{
        type: String,
        required:[true, "El albun es necesario"]
    },
    year: Number,
    image:{
        type:String,
        required:[true, "La ruta de la imagen es necesario"]
    },
    pathfile:{
        type: String,
        required:[true, "La ruta de la cancion es necesaria"]
    }
});
var MUSIC=mongoose.model("music", musicSchema);
module.exports=MUSIC;