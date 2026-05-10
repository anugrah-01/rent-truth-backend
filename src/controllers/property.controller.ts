import {Request, Response} from "express";
import * as propertyService from "../services/property.service";

export const createProperty = async(req: Request, res: Response) => {
    try {
        const property = await propertyService.createProperty(req.body);
        res.status(201).json({
            success: true,
            data: property
        });        
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

export const getProperties = async(req: Request, res: Response) => {
    try {
        const properties = await propertyService.getProperties();
        res.status(200).json({
            success: true,
            data: properties
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getPropertyById = async(req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        const property = await propertyService.getPropertyById(id);

        res.status(200).json({
            success: true,
            data: property
        });
    } catch (error: any) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
};
