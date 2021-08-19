const {model, Schema} = require('mongoose')

const newItemSchema=new Schema({
    Nom_producto:{
        type: String,
        required: true
    },
    Des_producto:{
        type: String
    },
    Pre_producto:{
        type: Number
    },
  
})

module.exports=model('Item', newItemSchema)