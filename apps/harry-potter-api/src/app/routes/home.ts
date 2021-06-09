import * as express from 'express';
import {UrlConstants } from '@tekkon/api-services';
import {CharacterController} from '../controllers';
const {HarryPotterInterface} = UrlConstants;
const {findCharacterById,listCharacter} = CharacterController;
const router = express.Router();

router.get(HarryPotterInterface.list,listCharacter);
router.get(HarryPotterInterface.listById,findCharacterById);

export default router;
