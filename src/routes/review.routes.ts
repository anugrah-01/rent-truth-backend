import express from 'express';
import { createReview } from '../controllers/review.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = express.Router();
router.post('/', authenticate, createReview);
export default router;


/*POST /reviews

↓
authenticate middleware

↓
if token valid:
  createReview controller

else:
  401 Unauthorized
*/