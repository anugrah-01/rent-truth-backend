import {Request, Response} from "express";
import * as reviewService from "../services/review.service";

export const createReview = async(req: Request, res: Response) => {
    try {
        const review = await reviewService.createReview(req.body);
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