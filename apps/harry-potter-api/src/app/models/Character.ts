import * as mongoose from 'mongoose';
const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  nickNames: {
    type: Array,
    required: true,
    unique: true
  },
  birthPlace: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true
  },
  dob:{
      type:Date,
      required:true    
  },
  active:{
    type:Boolean,
    required:true
  }
});



const Character = mongoose.model('character', characterSchema);


export default Character;
