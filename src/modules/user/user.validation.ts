import { z } from "zod";

const userValidation = z.object({
    name:z.string().max(100).min(3),
    email:z.string().email(),
    password:z.string().min(8),
    age:z.number().min(18),
    photo:z.string().optional(),
    role:z.enum(["Traveller","Admin"]),
    status:z.enum(["Active","Inactive"]),
})
export default userValidation;