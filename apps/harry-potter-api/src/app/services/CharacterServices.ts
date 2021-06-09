import {Character} from '../models'

const  CharacterServices= {
 listCharacters:async ()=> {
     return Character.find()
 },
 listCharacterById:async(id)=>{
    return Character.findOne({id:id})
 }
}
export default CharacterServices;