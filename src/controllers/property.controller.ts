import {Request, Response} from "express";
import * as propertyService from "../services/property.service";
import { createPropertySchema } from "../validators/property.validator";

export const createProperty = async(req: Request, res: Response) => {
    try {
        const validatedData = createPropertySchema.parse(req.body);
        const property = await propertyService.createProperty(validatedData);
        
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
        const city = req.query.city as string | undefined;
        const pincode = req.query.pincode as string | undefined;

        const properties = await propertyService.getProperties({city, pincode});
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
