const mongoose = require( 'mongoose' )
require('mongoose-type-email')
const MODEL_NAME = 'User'
const _schema = {
  name:{
    type: String, required: true
  },
  email: {
    type: mongoose.SchemaTypes.Email, 
    required: true, 
    unique:true
  },
  type:{
    type: String,
    enum:['TEACHER','STUDENT'],
    required: true,
  }
  

}
const schema = new mongoose.Schema( _schema )
const Model = mongoose.model(MODEL_NAME, schema )

module.exports = Model
