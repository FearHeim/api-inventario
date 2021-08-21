const {model, Schema} = require('mongoose')

const newItemSchema=new Schema({
    Nom_producto:{
        type: String,
        required: true
    },
    Des_producto:{
        type: String,
        required: true
    },
    Category_producto:{
        type: String,
        required: true
    },
    Pre_producto:{
        type: Number,
        required: true
    },
    Marca_producto:{
        type: String,
        required: true
    },
    Modelo_producto:{
        type: String,
        required: true
    },
    Cantidad_producto:{
        type: Number,
        required: true
    }
  
})

module.exports=model('Item', newItemSchema)