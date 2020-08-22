var mongoose = require("./connect");
var USERSCHEMA = new mongoose.Schema({
    nick:{
        type: String,
        required: [true, "El nickname es necesario"]
    },
    age: {
        type: Number,
        required: [true, "La edad es necesaria"]
    },
    email: {
        type: String,
        required: [true, "El email es necesario"],
        validate: {
            validator: (value) => {
                return /^[\w\.]+@[\w\.]+\.\w{3,3}$/.test(value);
            },
            message: props => `${props.value} no es valido`
        }
        
    },
    password: {
        type: String,
        required: [true, "el password es obligatorio"],
        min: [6, "El password debe tener minimo 6 caracterers"],
        validate: {
            validator: (value) => {
                if (!/[A-Z]+/.test(value)) {
                    return false;
                }
                if (!/[\$\^\@\(\)\{\}\#]+/.test(value)) {
                    return false;
                }
                return true;
            },
            message: props => `${props.value} El passwor debe tener al menos un mayuscula y un caracter erspecial`
        }
        
    },
    roles:{
        type:Array,
        default:[]
    },
    playlist:{
        ype:Array,
        default:[]
    },
    create:{
        type: Date,
        default: new Date()
    }
    
});
var USER = mongoose.model("user", USERSCHEMA);
module.exports=USER;