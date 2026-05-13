import {Request, Response} from "express";
import * as reviewService from "../services/review.service";
import { AuthenticatedRequest } from "../middlewares/auth.middleware";

export const createReview = async(req: AuthenticatedRequest, res: Response) => {
    try {
        const review = await reviewService.createReview({
            ...req.body,
            userId: req.userId       //req.userId comes from decoded JWT
        });
        res.status(201).json({
            success: true,
            data: review
        }); 
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}