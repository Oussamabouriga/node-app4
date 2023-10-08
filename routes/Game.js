import express from  'express';

import {
    getAII, addOnce, getOnce,
    putOnce, patchOnce, deleteOnce
} from '../controllers/game.js'

const router = express.Router();


router
    .route('/')
    .get(getAll)
    .post(addOnce);
router
    .route('/')
    .get(getOnce)
    .put(putonce)
    .patch(patchonce)
    .delete(deleteonce);

export default router;