import * as authRepository from "../repositories/auth.repository";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = "supersecret";

export const signup = async (
    data:{
        name: string;
        email: string;
        password: string;
    }
) => {
    const existingUser = await authRepository.findUserByEmail(data.email);
    if(existingUser){
        throw new Error("Email already in use");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await authRepository.createUser({ ...data, password: hashedPassword });

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });

    return {
        token, 
        user,
    };
};

export const login = async (data: { email: string; password: string }) => {
    const user = await authRepository.findUserByEmail(data.email);
    if(!user){
        throw new Error("Invalid credentials");
    }

    const isPasswordCorrect = await bcrypt.compare(data.password, user.password);
    if(!isPasswordCorrect){
        throw new Error("Invalid credentials");
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "7d" });

    return {
        token,
        user,
    };
};