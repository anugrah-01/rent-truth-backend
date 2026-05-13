import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";
 
const JWT_SECRET = "supersecret";

export interface AuthenticatedRequest extends Request {
    userId?: string;
}

export const authenticate = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ success: false, message: "Token Missing" });
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
        req.userId = decoded.userId;  //Middleware attaches authenticated user info to request.
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: "Invalid token" });
    }
};