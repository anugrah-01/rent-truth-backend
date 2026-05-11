import { z } from "zod";

export const createPropertySchema = z.object({

  address: z.string().min(3, "Address too short"),

  city: z.string().min(2, "City is required"),

  pincode: z.string().length(6, "Pincode must be 6 digits"),

});