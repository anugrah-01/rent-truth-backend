import {Request, Response} from "express";
import * as favouriteService from "../services/favourite.service";
import { AuthenticatedRequest } from "../middlewares/auth.middleware";

export const addFavourite = async(req: AuthenticatedRequest, res: Response) => {
    try {
        const {propertyId} = req.params as {propertyId: string};
        const result = await favouriteService.addFavourite(req.userId!, propertyId);
        res.status(200).json({ 
            success: true,
            data: result
         });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: (error as Error).message
         });
    }
};

export const removeFavourite = async(req: AuthenticatedRequest, res: Response) => {
    try {
        const {propertyId} = req.params as {propertyId: string};
        const result = await favouriteService.removeFavourite(req.userId!, propertyId);
        res.status(200).json({ 
            success: true,
            data: result
         });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: (error as Error).message
         });
    }
};

export const getFavourites = async(req: AuthenticatedRequest, res: Response) => {
    try {
        const result = await favouriteService.getFavourites(req.userId!);
        res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: (error as Error).message
        });
    }   
};