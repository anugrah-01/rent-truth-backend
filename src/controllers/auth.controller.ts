import * as authService from "../services/auth.service";
import { Request, Response } from "express";
import { signupSchema, loginSchema } from "../validators/auth.validator";

export const signup = async(req: Request, res: Response) => {
    try {
        const validatedData = signupSchema.parse(req.body);
        const result = await authService.signup(validatedData);
        res.status(201).json({
            success: true,
            data: result
        });
    } catch (error : any) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

export const login = async(req: Request, res: Response) => {
    try {
        const validatedData = loginSchema.parse(req.body);
        const result = await authService.login(validatedData);
        res.status(200).json({
            success: true,
            data: result
        });
    } catch (error : any) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};