import express from 'express';
import { createProperty, getProperties, getPropertyById } from '../controllers/property.controller';

const router = express.Router();

router.post('/', createProperty);
router.get('/', getProperties);
router.get('/:id', getPropertyById);
export default router;