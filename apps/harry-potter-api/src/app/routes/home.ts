import * as express from 'express';
import {UrlConstants } from '@tekkon/api-services';
const {HarryPotterInterface} = UrlConstants;
const router = express.Router();

router.get(HarryPotterInterface.list, (req,res,next)=>{});
router.get(HarryPotterInterface.listById,(req,res,next)=>{

})

export default router;
