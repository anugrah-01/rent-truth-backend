import express from 'express';
import { authenticate } from '../middlewares/auth.middleware';
import { getFavourites } from '../controllers/favourite.controller';
import { addFavourite, removeFavourite } from '../controllers/favourite.controller';

const router = express.Router();
router.post('/:propertyId', authenticate, addFavourite);
router.delete('/:propertyId', authenticate, removeFavourite);
router.get('/', authenticate, getFavourites);

export default router;