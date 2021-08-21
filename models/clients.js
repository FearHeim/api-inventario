//nombre, apellido email contraseña
const {model, Schema} = require('mongoose')

const newItemSchema=new Schema({
    Nom_cliente:{
        type: String,
        required: true
    },
    Apellido_cliente:{
        type: String,
        required: true

    },
    Email_cliente:{
        type: Number,
        required: true

    },
    Pass_cliente:{
        type: String,
        required: true

    }
  
})

module.exports=model('Client', newItemSchema)