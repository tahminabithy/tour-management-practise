import { z } from "zod";

export const tourValidation=z.object({
    name:z.string().max(100),
    description:z.string().max(200),
    price:z.number().positive(),
    duration:z.number().positive(),
    location:z.string().max(100),
    seats:z.number().positive(),
    availableSeats:z.number().positive(),
    rating:z.number().positive(),
})