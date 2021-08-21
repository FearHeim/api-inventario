const {model, Schema} = require('mongoose')

const newItemSchema=new Schema({
    Codigo_cat:{
        type: String,
        required: true
    },
    Nombre:{
        type: String,
        required: true
    }
  
})

module.exports=model('Category', newItemSchema)