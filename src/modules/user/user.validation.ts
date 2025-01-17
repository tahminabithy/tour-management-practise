import { z } from "zod";

const userValidationSchema = z.object({
    name:z.string({required_error:"number must be provided"}).max(100).min(3),
    email:z.string().email(),
    password:z.string({required_error:"password is needed"}).min(8),
    age:z.number().min(18).int().positive().optional(),
    photo:z.string().optional(),
    // role:z.enum(["Traveller","Admin"]),
    // status:z.enum(["Active","Inactive"]),
})
export const zodValidation={
    userValidationSchema
};